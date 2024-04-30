/* eslint-disable react/prop-types */

import { IoMdPricetags } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const Spot = ({ spotsData }) => {
    const { _id,name, email, totalVisitors, population, photUrl, spotName, countryName, location, description, averageCost, seasonality, travelTime } = spotsData
    return (
        <div data-aos="fade-up-left" className="flex h-[600px] flex-col gap-2 justify-between border-2 border-secondaryWhite bg-secondaryBlue p-3 rounded-xl">
            <div>
                <img className="w-[400px] h-[200px] object-cover rounded-2xl shadow-lg" src={photUrl} alt="img" />
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="lg:text-xl text-xl font-bold text-primaryNavy ">{spotName}</h2>
                </div>
                <div className="flex items-center w-[150px] rounded-full gap-2 border-2 border-gray-300 justify-center">
                    <IoMdPricetags></IoMdPricetags>
                    <h2 className="text-lg font-bold"> € {averageCost}</h2>
                </div>
            </div>
            <div className="flex gap-3 text-gray-500 items-center text-lg ">
                <span>{countryName},</span>
                <span>{location}</span>
            </div>
            <div>
            <p>{description.length > 200 ? `${description.slice(0, 200)}...` : description}</p>


            </div>

            <div className="flex w-[180px]  items-center p-3  gap-2 justify-center text-center text-primaryWhite bg-primaryNavy hover:bg-primaryBlue rounded-full">
            <FiArrowUpRight></FiArrowUpRight>
            <Link to=''><button>View Details</button></Link>
            </div>

        </div>
    );
};

export default Spot;