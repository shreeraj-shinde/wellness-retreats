import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Pagination from "../../../components/Pagination";
import { paginate } from "../../../utils/paginate";
import { extractFilterOptions } from "../../../utils/retreatUtils";
import { fetchData } from "../../../hooks/fetchData";

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

const url = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";

const RetreatList = () => {
  const [data, setData] = useState<ItemType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState<string[]>([]);
  const [dateOptions, setDateOptions] = useState<string[]>([]);

  const count = data.length;
  const pageSize = window.innerWidth > 800 && window.innerWidth < 1024 ? 4 : 3;

  useEffect(() => {
    fetchData(url).then((response) => {
      setData(response?.data);
      extractFilterOptions(setCategories, setDateOptions);
    });
  }, []);

  ///Pagination
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const retreats: ItemType[] = paginate(data, pageSize, currentPage);

  if (!data) return <h1>Loading...</h1>;
  return (
    <>
      {/**Filters */}
      <div className="flex flex-col gap-2 md:flex-row justify-between mt-4">
        <div className="flex flex-col md:flex-row gap-2">
          <Select
            name="FilterByDate"
            title="Filter By Date"
            options={dateOptions}
            setData={setData}
            date
          />
          <Select
            name="FilterByCategory"
            title="Filter By Category"
            options={categories}
            setData={setData}
          />
        </div>
        <input
          className="p-2 px-2 text-sm border-2 border-gray outline-none w-full lg:w-1/4 rounded-lg bg-[#1a3352] text-white font-medium"
          placeholder="Search Here...."
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Card List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {retreats
          .filter((item: ItemType) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 3)
          .map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </div>
      {!search && (
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

interface SelectPropType {
  title: string;
  options: string[];
  name: string;
  setData: Function;
  date?: boolean;
}

const Select = ({ title, options, name, setData, date }: SelectPropType) => {
  const filterByCategories = (filter: string) => {
    if (filter.includes("Filter By Category")) {
      fetchData(url).then((response) => setData(response?.data));
    } else {
      fetchData(`${url}?condition=${filter}`).then((response) =>
        setData(response?.data)
      );
    }
  };

  const filterByDate = (date: string) => {
    if (date.includes("Filter By Date")) {
      fetchData(url).then((response) => setData(response?.data));
    } else {
      fetchData(`${url}?date=${Number(date)}`).then((response) =>
        setData(response?.data)
      );
    }
  };

  return (
    <select
      name={name}
      onChange={
        date
          ? (e) => filterByDate(e.target.value)
          : (e) => filterByCategories(e.target.value)
      }
      className="p-2 md:px-2 bg-[#1a3352] outline-none text-white text-sm font-medium rounded-lg"
    >
      <option defaultValue="">{title}</option>
      {options.map((opt, idx) => (
        <option value={opt} key={idx}>
          {date ? new Date(Number(opt) * 1000).toDateString() : opt}
        </option>
      ))}
    </select>
  );
};

export default RetreatList;
