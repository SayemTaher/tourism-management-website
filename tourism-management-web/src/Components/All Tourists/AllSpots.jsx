import { useLoaderData } from "react-router-dom";
import Spot from "../Spots/Spot";


const AllSpots = () => {
    const touristSpots = useLoaderData()
    return (
        <div>
            <div>
                <h1 className="mt-10 font-bold mb-5 text-2xl lg:text-4xl text-primaryNavy">All Tourists Spot...</h1>
            </div>
            <div data-aos="fade-up-right" className="grid grid-cols-1 mt-10 mb-5 lg:grid-cols-3 md:grid-cols-2 gap-5 bg-primaryWhite p-2 rounded-xl">
                    {
                        touristSpots.map(spotsData => <Spot key={spotsData._id} spotsData={spotsData}></Spot>)
                    }
                </div>
            
        </div>
    );
};

export default AllSpots;