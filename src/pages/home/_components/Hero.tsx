import heroImage from "../../../assets/images/jared-rice-NTyBbu66_SI-unsplash.jpg";

const Hero = () => {
  return (
    <div className="max-w-full px-6 py-4 bg-[#e0d8ce] rounded-lg overflow-hidden">
      <img
        className="w-full max-h-80 object-cover object-center rounded-r-lg"
        src={heroImage}
        alt="Hero Section image"
      />
      <div className="mt-2">
        <h1 className="text-xl">Discover Your Inner Peace</h1>
        <p>
          Join us for a series of wellness retreats designes to help you find
          tranquility and rejuvenation
        </p>
      </div>
    </div>
  );
};

export default Hero;
