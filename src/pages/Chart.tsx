/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Chart.module.css";
import { Album } from "../types/chart.type";

import { useCallback, useEffect, useState } from "react";
import ChartFilter from "../components/ChartFilter/ChartFilter";
import { getChart } from "../api/getChart";
import ChartItem from "../components/ChartItem/ChartItem";

const Chart = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getChart();
      if (!response) return;
      const {
        feed: { entry },
      } = response;
      setAlbums(entry);
      filterAlbums("asc", "");
      setLoading(false);
    })();
  }, []);

  const filterAlbums = useCallback((order: "asc" | "desc", search: string) => {
    setAlbums((albums) =>
      albums
        .filter((album) =>
          album["im:name"].label.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) =>
          order === "asc"
            ? a["im:name"].label.localeCompare(b["im:name"].label)
            : b["im:name"].label.localeCompare(a["im:name"].label)
        )
    );
  }, []);

  return (
    <>
      <header>
        <h1 className={styles.title}>EL Chart: Top Albums</h1>
      </header>
      <main className={styles.albumChart}>
        <ChartFilter onFilterChange={filterAlbums} />
        <ul>
          {loading ? (
            <p>Loading...</p>
          ) : (
            albums.map((album, index) => (
              <ChartItem
                key={album.id.attributes["im:id"]}
                album={album}
                index={index}
              />
            ))
          )}
        </ul>
      </main>
    </>
  );
};

export default Chart;
