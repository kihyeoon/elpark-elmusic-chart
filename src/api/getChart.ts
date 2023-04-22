import { ChartData } from "../types/chart.type";
import { BASE_URL } from "./const";

export const getChart = async (): Promise<ChartData | null> => {
  try {
    const ChartInfoResponse = await fetch(BASE_URL);

    return ChartInfoResponse.ok ? ChartInfoResponse.json() : null;
  } catch (e) {
    console.error(e);
    return null;
  }
};
