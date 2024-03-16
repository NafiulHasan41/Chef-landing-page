const Banner = () => {
  return (
    <div>
     <div className="hero h-[500px] md:h-[600px] rounded-3xl space-y-3" style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/side-view-cook-making-delicious-pasta_23-2150690631.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710460800&semt=sph)",
        }}>
         <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
         <div className="hero-content text-center text-neutral-content">
             <div className="max-w-[897px]">
                 <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">Discover an exceptional
                     cooking class tailored for you!</h1>
                 <p className="mb-5 text-xs md:text-[18px] text-white">

                     Cooking, also known as cookery or professionally as the culinary arts, is the art, science and
                     craft of using heat to make food more palatable, digestible, nutritious, or safe.

                 </p>
                 <button
                     className="btn btn-primary mx-2 my-2 rounded-full bg-green-400 text-black border-none text-xl font-normal ">Explore
                     Now</button>
                 <button className="btn btn-primary rounded-full bg-transparent border-white text-xl font-normal ">Our
                     Feedback</button>
             </div>
         </div>
     </div>
 </div>
  );
};

export default Banner;
