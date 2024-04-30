import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Spot from "../Spots/Spot";
const Home = () => {
    const touristSpots = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>EuroQuest | Home</title>

            </Helmet>
            <div>
                <Slider></Slider>
            </div>
            <div data-aos="fade-up-left" className="flex bg-primaryWhite p-3 rounded-xl flex-col mt-10 mb-5 lg:flex-row justify-center gap-5 items-center">
                <div className="">
                    <img className="backdrop-blur-md p-2 rounded-xl w-[400px] h-[500px] object-cover" src="https://i.ibb.co/fDdL6Rs/daniel-bounliane-ove-Yd-Yj-ZQw-unsplash.jpg" alt="eiffel" />
                </div>
                <div className="flex flex-col gap-2" data-aos="fade-up">
                    <div className="flex justify-between items-center">
                        <span>Paris, FRANCE</span>
                        <div className="flex items-center gap-2 p-2 border-2 border-primaryBlue rounded-full">
                            <FaPeopleGroup></FaPeopleGroup>
                            <span>Yearly Tourists - 38 Million</span>

                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-4xl font-bold text-primaryNavy ">Eiffel Tower: A Soaring Emblem of French Ingenuity</h1>
                        <p className="text-sm mt-5 text-gray-500 max-w-[700px]">Step into the heart of Paris with a visit to the Eiffel Tower, an awe-inspiring symbol of French artistry and engineering. This iconic structure, originally constructed for the 1889 Worlds Fair, stands majestically over the city, offering breathtaking views that stretch across the sprawling urban landscape. Join one of the many guided tours available and ascend its levels to learn about the towers storied history, architectural marvels, and the visionary mind of Gustave Eiffel. </p>
                    </div>
                    <div className="flex hover:bg-primaryPurple justify-center text-white mt-5 font-medium gap-2 p-2 w-[120px] items-center bg-primaryNavy rounded-full">
                        <HiArrowUpRight></HiArrowUpRight>
                        <button>View All </button>
                    </div>

                </div>

            </div>
            <div className="flex flex-col gap-5 mt-10">
                <div className="flex z-20 items-center justify-between" data-aos="fade-in">
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold  text-primaryNavy border-b-4 pb-5 border-primaryPink">Most Visited</h1>
                    </div>
                    <div className="dropdown border-2 w-[120px] text-center p-3 border-primaryPurple rounded-full">
                        <div tabIndex={0} role="button" >Sort By</div>
                        <ul tabIndex={0} className="dropdown-content rounded-xl bg-primaryPurple text-white z-[1] mt-5 menu p-2 shadow w-52">
                            <li><a>Price</a></li>
                            <li><a>Country</a></li>
                        </ul>
                    </div>



                </div>
                <div data-aos="fade-up-right" className="grid grid-cols-1 mt-10 lg:grid-cols-3 md:grid-cols-2 gap-5 bg-primaryWhite p-2 rounded-xl">
                    {
                        touristSpots.slice(0, 6).map(spotsData => <Spot key={spotsData._id} spotsData={spotsData}></Spot>)
                    }
                </div>
            </div>

            <div data-aos="fade-up-right" className="mt-10 rounded-xl flex flex-col  justify-end mb-5 bg-[url('https://i.ibb.co/1XgPgpL/henrique-ferreira-62-QRd-Doe44-M-unsplash.jpg')] h-[700px] bg-no-repeat bg-cover w-full">
                <div className=" backdrop-blur-sm p-5 " data-aos="fade-up">
                    <h1 className="text-2xl lg:text-6xl  pb-2 font-bold text-primaryWhite">Barcelona: A Tapestry of Catalan Culture and Architectural Wonders</h1>
                    <p className="text-sm text-primaryWhite">Immerse yourself in the vibrant energy of Barcelona, a city that pulses with the rhythms of its rich Catalan heritage and groundbreaking artistry. Barcelona is a playground for the senses, featuring the enchanting works of Antoni Gaudí, such as the Sagrada Família and Park Güell, which offer a surreal escape into architectural genius. Wander through the historic streets of the Gothic Quarter, where medieval charm meets bustling modern life. Experience the colorful mercados like La Boqueria, and indulge in the local cuisine that makes Catalan gastronomy renowned worldwide. From the sun-drenched beaches of Barceloneta to the spirited performances at the Palau de la Música Catalana, Barcelona delivers an eclectic mix of experiences that are as diverse as they are captivating.</p>
                    <div className="flex border-2 border-primaryWhite  hover:bg-primaryPurple justify-center text-white mt-5 font-medium gap-2 p-2 w-[120px] items-center bg-primaryNavy rounded-full">
                        <HiArrowUpRight></HiArrowUpRight>
                        <button>View All </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;