import { fetchData } from "../hooks/fetchData";

interface ItemType {
  type: string;
  title: string;
  tag: string[];
  price: number;
  location: string;
  image: string;
  id: string;
  duration: number;
  description: string;
  date: number;
  condition: string;
}

export function extractFilterOptions(
  setCategories: Function,
  setDates: Function
) {
  const categories: string[] = [];
  const dates: string[] = [];
  fetchData("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats").then(
    (res) =>
      res?.data.map((item: ItemType, idx: number) => {
        if (item.condition in categories) null;
        categories.splice(idx, 0, item.condition);
        setCategories([...new Set(categories)]);
        dates.splice(idx, 0, String(item.date));
        setDates([...new Set(dates)]);
      })
  );
}
