import { Album } from "../../types/chart.type";
import styles from "./ChartItem.module.css";

interface AlbumItemProps {
  album: Album;
  index: number;
}

const ChartItem = ({ album, index }: AlbumItemProps) => {
  return (
    <li className={styles.albumItem}>
      <div className={styles.left}>
        <img
          src={album["im:image"][2].label}
          alt={`${album["im:name"]} album cover`}
        />
        <div className={styles.rankContainer}>
          <div>{index + 1}</div>
          <div>-</div>
        </div>
      </div>
      <div className={styles.mainInfo}>
        <h2>{album["im:name"].label}</h2>
        <p>{album["im:artist"].label}</p>
      </div>
      <div className={styles.subInfo}>
        <p>{album["im:price"].label}</p>
        <p>{album.category.attributes.term}</p>
      </div>
    </li>
  );
};

export default ChartItem;
