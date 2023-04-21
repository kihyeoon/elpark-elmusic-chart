export const formatDateAndTime = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = date.getHours();
  const ampm = hour >= 12 ? "pm" : "am";

  const formattedHour = hour % 12 || 12; // 12시간 형식으로 변환

  return `${year}.${month}.${day} ${formattedHour}${ampm}`;
};
