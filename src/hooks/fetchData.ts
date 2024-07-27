import axios from "axios";

export async function fetchData(url: string) {
  const response = await axios.get(url);

  if (!response) return null;

  const data = response;

  return data;
}
