import _ from "lodash";
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

export function paginate(
  items: ItemType[],
  pageSize: number,
  pageNumber: number
) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
