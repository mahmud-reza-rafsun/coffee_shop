
import Image from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div className='max-w-5xl mx-auto my-6'>
            <img className='rounded-md' src={Image} alt="" />
        </div>
    );
};

export default Banner;