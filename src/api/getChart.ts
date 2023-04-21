import { Album, ChartData } from "../types/chart.type";
import { BASE_URL } from "./const";

export const getChart = async (): Promise<Album[] | null> => {
  try {
    const response = await fetch(BASE_URL);
    const ChartInfoResponse: ChartData = await response.json();
    const {
      feed: { entry: Albums },
    } = ChartInfoResponse;

    return Albums;
  } catch (e) {
    console.error(e);
    return null;
  }
};
