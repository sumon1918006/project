const Banner = () => {
  return (
    <div>
        
      {/* banner section discover start*/}
      <section className="text-white px-[210px] py-[130px] text-center rounded-3xl w-full h-[600px] bg-image space-y-6">
        <h1 className="text-[52px] font-bold">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="font-light">
          
Discover recipes online, explore diverse cuisines, and experiment with flavors to create delicious,<br /> satisfying meals for  every occasion. Enjoy cooking
        </p>

        <div className="space-x-7 pt-4">
          <button className="common-button">Explore Now</button>
          <button className="unique-btn">Our Feedback</button>
        </div>
      </section>
      {/* banner section  discover  end */}
    </div>
  );
};

export default Banner;
