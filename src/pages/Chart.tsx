import styles from "./Chart.module.css";
import { Album } from "../types/chart.type";
import ChartItem from "../components/ChartItem";
import { useEffect, useState } from "react";

const Chart = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );
      const data = await response.json();
      setAlbums(data.feed.entry);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <header>
        <h1 className={styles.title}>EL Chart: Top Albums</h1>
      </header>
      <main className={styles.albumChart}>
        <ul>
          {loading ? (
            <p>Loading...</p>
          ) : (
            albums.map((album, index) => (
              <ChartItem key={index} album={album} />
            ))
          )}
        </ul>
      </main>
    </>
  );
};

export default Chart;
