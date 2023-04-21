import styles from "./Chart.module.css";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getChart } from "../../api/getChart";
import { Album } from "../../types/chart.type";
import ChartFilter, { Order } from "../../components/ChartFilter/ChartFilter";
import ChartItem from "../../components/ChartItem/ChartItem";

const Chart = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetchChart = useCallback(async (order: Order, search: string) => {
    const Albums = await getChart();
    if (!Albums) return;

    setAlbums(
      Albums.filter((album) =>
        album["im:name"].label.toLowerCase().includes(search.toLowerCase())
      ).sort((a, b) =>
        order === "asc"
          ? a["im:name"].label.localeCompare(b["im:name"].label)
          : b["im:name"].label.localeCompare(a["im:name"].label)
      )
    );
  }, []);

  useEffect(() => {
    fetchChart("asc", "");
  }, [fetchChart]);

  return (
    <>
      <header>
        <h1 className={styles.title}>EL Chart: Top Albums</h1>
      </header>
      <main className={styles.albumChart}>
        <ChartFilter onFilterChange={fetchChart} />
        <ul>
          {albums.map((album, index) => (
            <Link to={album.id.attributes["im:id"]} state={album}>
              <ChartItem
                key={album.id.attributes["im:id"]}
                album={album}
                index={index}
              />
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Chart;
