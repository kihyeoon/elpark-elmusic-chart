/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Chart.module.css";
import { Album } from "../../types/chart.type";

import { useCallback, useEffect, useState } from "react";
import ChartFilter from "../../components/ChartFilter/ChartFilter";
import { getChart } from "../../api/getChart";
import ChartItem from "../../components/ChartItem/ChartItem";

const Chart = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const Albums = await getChart();
      if (!Albums) return;
      setAlbums(Albums);
      filterAndSortAlbums("asc", "");
      setLoading(false);
    })();
  }, []);

  const filterAndSortAlbums = useCallback(
    async (order: "asc" | "desc", search: string) => {
      setLoading(true);
      const Albums = await getChart();
      if (!Albums) return;
      setAlbums(Albums);

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
      setLoading(false);
    },
    []
  );

  return (
    <>
      <header>
        <h1 className={styles.title}>EL Chart: Top Albums</h1>
      </header>
      <main className={styles.albumChart}>
        <ChartFilter onFilterChange={filterAndSortAlbums} />
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
