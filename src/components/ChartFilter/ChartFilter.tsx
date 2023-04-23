import { ChangeEvent, MouseEvent, useCallback, useState } from "react";
import styles from "./ChartFilter.module.css";

export type Order = "asc" | "desc";

interface ChartFilterProps {
  onFilterChange: (order: Order, search: string) => void;
}

const ChartFilter = ({ onFilterChange }: ChartFilterProps) => {
  const [order, setOrder] = useState<Order>("asc");
  const [search, setSearch] = useState<string>("");

  const handleOrderChange = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const newOrder =
        e.currentTarget.innerText === "ASCENDING" ? "asc" : "desc";
      setOrder(newOrder);
      onFilterChange(newOrder, search);
    },
    [onFilterChange, search]
  );

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newSearch = e.target.value;
      setSearch(newSearch);
      onFilterChange(order, newSearch);
    },
    [order, onFilterChange]
  );

  return (
    <div className={styles.chartFilter}>
      <label>
        <button
          onClick={handleOrderChange}
          className={order === "asc" ? styles.activeButton : ""}
        >
          ASCENDING
        </button>
        <button
          onClick={handleOrderChange}
          className={order === "desc" ? styles.activeButton : ""}
        >
          DESCENDING
        </button>
      </label>
      <label>
        Search
        <input type="text" value={search} onChange={handleSearchChange} />
      </label>
    </div>
  );
};

export default ChartFilter;
