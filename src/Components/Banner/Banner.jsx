import banner from '../../assets/images/banner-bg.png'
const Banner = () => {
    return (
        <div className='mt-12 rounded-lg h-[600px] ' style={{backgroundImage:`url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        }}>
            <div className="text-white text-center px-12 py-36 lg:p-32">
            <div className=''>
                <p className=' text-3xl lg:text-5xl font-bold'>The best fast food!
                <br />
                Perfect Dish, Perfect Date!
                </p>

                <p className='space-y-5 text-lg'>Your Gateway to Quick, Delicious Dining! Discover Mouthwatering Recipes. Ultimate Destination for Fast, Flavorful Feasts!</p>
                
            </div>
            <div className="flex justify-center gap-6">
            <button className="btn rounded-full border-none bg-[#0BE58A] ">Explore Now</button>
            <button className="btn rounded-full ">Our Feedback</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;