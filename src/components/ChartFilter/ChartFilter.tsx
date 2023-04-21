import { ChangeEvent, useCallback, useState } from "react";
import styles from "./ChartFilter.module.css";

interface ChartFilterProps {
  onFilterChange: (order: "asc" | "desc", search: string) => void;
}

const ChartFilter = ({ onFilterChange }: ChartFilterProps) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [search, setSearch] = useState<string>("");

  const handleOrderChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newOrder = e.target.value as "asc" | "desc";
      setOrder(newOrder);
      onFilterChange(newOrder, search);
    },
    [search, onFilterChange]
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
        정렬:
        <select value={order} onChange={handleOrderChange}>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </label>
      <label>
        검색:
        <input type="text" value={search} onChange={handleSearchChange} />
      </label>
    </div>
  );
};

export default ChartFilter;
