import { IChart } from '@/interface/chartData';

const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const minDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

export const generateStartAndEndDate = (data: IChart[]) => {
  const dateList = data.map(({ date }) => new Date(date));

  const min = minDate(dateList);
  const start = `${min.getFullYear()}-${min.getMonth() + 1}-${min.getDate()}`;

  const max = maxDate(dateList);
  const end = `${max.getFullYear()}-${max.getMonth() + 1}-${max.getDate()}`;

  return { start, end };
};
