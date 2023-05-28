export function formaterDate(date: string): string {
  const data = new Date(date);

  const day = String(data.getDate()).padStart(2, "0");
  const month = getMonthNumber(data.getMonth());
  const year = data.getFullYear();

  return `${day} ${month} ${year}`;
}

function getMonthNumber(month: number): string {
  const allMonth = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  return allMonth[month];
}
