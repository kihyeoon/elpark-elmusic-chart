import styles from "./AlbumDetail.module.css";
import { useLocation } from "react-router-dom";
import { Album } from "../../types/chart.type";
import { formatDateAndTime } from "../../utils/formatDateAndTime";

interface LocationState {
  state: Album;
}

const AlbumDetail = () => {
  const {
    state: {
      "im:name": { label: albumName },
      "im:image": [, , { label: albumImageUrl }],
      "im:itemCount": { label: albumItemCount },
      "im:price": { label: albumPrice },
      "im:artist": { label: albumArtist },
      category: {
        attributes: { label: albumCategory },
      },
      rights: { label: albumRights },
      "im:releaseDate": {
        attributes: { label: albumReleaseDate },
      },
    },
  } = useLocation() as LocationState;

  return (
    <>
      <header className={styles.header}>
        <img
          src={albumImageUrl}
          alt={`${albumName}  album cover`}
          className={styles.albumImage}
        />
        <div className={styles.headerInfo}>
          <div className={styles.title}>{albumName}</div>
          <div className={styles.artist}>{albumArtist}</div>
          <div className={styles.secondary}>
            Release date {formatDateAndTime(albumReleaseDate)}
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.infoWrapper}>
          <div>Price</div>
          <div>{albumPrice}</div>
        </div>
        <div className={styles.infoWrapper}>
          <div>Category</div>
          <div>{albumCategory}</div>
        </div>
        <div className={styles.infoWrapper}>
          <div>Number of tracks</div>
          <div>{albumItemCount}</div>
        </div>
        <div className={styles.secondary}>{albumRights}</div>
      </main>
    </>
  );
};

export default AlbumDetail;
