import { Link } from "react-router-dom";
import img from "../../../../assets/josh-appel.jpg"
import Button from "../../../../shared/button/Button";
import Aos from "aos";
import 'aos/dist/aos.css';

const AnotherSEction = () => {
    Aos.init();
    return (
        <div data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="100" className="bg-[#4e63b8]  mt-20 block md:flex">
            <div className="w-full md:w-1/2  ">
                <img src={img} alt="" />
            </div>
            <div className=" md:w-1/2 px-3 md:px-8 py-2 md:py-10 ">
                <h1 className="text-white text-center font-semibold text-2xl md:text-3xl">Securely send your money and get online shoping using NetPay</h1>
                <p className="text-white text-sm md:text-base my-3 md:my-6">Feel free to adjust the wording to match your brand&apos;s voice and values. This tagline highlights both secure money transfers and the convenience of online shopping through NetPay. Experience Peace of Seamlessly Send Money and Shop Online with NetPay&apos;s .....</p>
                <Link to='/signup'>
                    <Button text={'Sign Up Now'}></Button>
                </Link>
            </div>


        </div>
    );
};

export default AnotherSEction;