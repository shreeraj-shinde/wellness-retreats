import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../../components/Card";

const RetreatList = () => {
  const [data, setData] = useState([]);
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

  if (!data) return <>Loading...</>;
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default RetreatList;
