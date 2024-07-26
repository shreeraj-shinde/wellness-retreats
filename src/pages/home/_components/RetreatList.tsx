import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../../components/Card";

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

const RetreatList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats"
      );
      setData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  if (!data) return <h1>Loading...</h1>;
  return (
    <>
      {/**Filters */}
      <div className="flex justify-between mt-2">
        <div className="flex gap-2">
          <Select
            name="FilterByDate"
            title="Filter By Date"
            options={["Jan 2023", "Jan 2024"]}
          />
          <Select
            name="FilterByCategory"
            title="Filter By Category"
            options={["Meditation", "Yoga"]}
          />
        </div>
        <input
          className="p-[4px] border-2 border-gray outline-none w-full lg:w-1/4 rounded-lg bg-[#1a3352] text-white font-medium"
          placeholder="Search Here...."
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Card List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-2">
        {data
          .filter((item: ItemType) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 3)
          .map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </div>
    </>
  );
};

interface SelectPropType {
  title: string;
  options: string[];
  name: string;
}

const Select = ({ title, options, name }: SelectPropType) => {
  return (
    <select
      name={name}
      className="px-2 bg-[#1a3352] outline-none text-white text-sm font-medium rounded-lg"
    >
      <option selected>{title}</option>
      {options.map((opt, idx) => (
        <option value={opt} key={idx}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default RetreatList;
