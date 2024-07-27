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
  const datetime = item.date;
  const date = new Date(datetime * 1000);
  return (
    <div className="bg-[#e0d8ce] p-4 rounded-lg flex flex-col gap-2 hover:scale-[1.02] transition-all">
      <div className="w-4/5 md:w-1/2">
        <img
          src={item.image}
          alt={item.type}
          className="w-full h-32 rounded-lg object-cover "
        />
      </div>
      <h1 className="text-lg font-semibold">{item.title}</h1>
      <p>{item.description}</p>
      <p>
        <span className="font-medium">Location : </span> {item.location}
      </p>
      <p>
        <span className="font-medium">Date : </span>
        {date.toDateString()}
      </p>
      <p>
        <span className="font-medium">Price : </span>
        {item.price.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </p>
    </div>
  );
};

export default Card;
