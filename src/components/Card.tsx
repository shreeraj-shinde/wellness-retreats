// condition: "Stress Relief";
// date: 1692921600;
// description: "A weekend retreat focused on yoga and meditation to relieve stress.";
// duration: 3;
// id: "1";
// image: "https://cdn.midjourney.com/a287f9bc-d0fb-4e78-a0fa-e8136d3c408a/0_0.jpeg";
// location: "Goa";
// price: 200;
// tag: (3)[("relaxation", "meditation", "weekend")];
// title: "Yoga for Stress Relief";
// type: "Signature";

interface PropType {
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

const Card = ({ item }: { item: PropType }) => {
  return (
    <div className="bg-[#e0d8ce] px-2">
      <h1>{item.title}</h1>
    </div>
  );
};

export default Card;
