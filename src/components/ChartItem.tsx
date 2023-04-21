import styles from "./ChartItem.module.css";
import { Album } from "../types/chart.type";

interface AlbumItemProps {
  album: Album;
}

const ChartItem = ({ album }: AlbumItemProps) => {
  return (
    <li className={styles.albumItem}>
      <img
        src={album["im:image"][0].label}
        alt={`${album["im:name"]} album cover`}
      />
      <div className={styles.albumInfo}>
        <h2>{album["im:name"].label}</h2>
        <p>{album["im:artist"].label}</p>
        <p>{album["im:price"].label}</p>
        <p>{album.category.attributes.term}</p>
        <p>{album["im:releaseDate"].attributes.label}</p>
      </div>
    </li>
  );
};

export default ChartItem;
