import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const Details = () => {
    const singleSpotData = useLoaderData();
    const { totalVisitors, photUrl, population, spotName, countryName, location, description, averageCost, seasonality, travelTime } = singleSpotData;

    // Handler functions for Typewriter
    const handleType = (count) => {
        console.log(count); // This logs the current word count
    };

    const handleDone = () => {
        console.log(`Done typing!`);
    };

    return (
        <div className="flex flex-col mt-5 mb-5">
            <div className="mb-5">
                <Link to='/'><button className="p-1 w-[80px] text-center bg-primaryPurple rounded-xl text-white">Previous</button></Link>
            </div>
            <div className="flex justify-between items-center">
                <span className="lg:text-4xl text-2xl font-bold text-primaryNavy">
                <Typewriter
                            words={[location,spotName]}
                            loop={1}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                </span>
                <h1 className="p-1 rounded-full border-2 border-primaryPurple text-primaryNavy font-bold w-[120px] text-center">{countryName}</h1>
            </div>
            <div className="mt-5">
                <img className="rounded-xl shadow-xl w-full h-[700px]" src={photUrl} alt="Spot Image" />
            </div>
            <div className="flex flex-col mt-10 lg:flex-row gap-10">
                <div className="flex flex-col gap-2">
                    <span className="text-primaryNavy font-bold text-xl">Overview</span>
                    <p className="text-sm max-w-[600px] text-justify tracking-wide">
                        {/* Integrating Typewriter for dynamic description effect */}
                        {description}
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-xl border-2 w-[400px] shadow-xl justify-center border-gray-300 p-5">
                    <div className="flex flex-col gap-2 text-xl">
                        <span>Visitors per year</span>
                        <span>Population</span>
                        <span>Average Cost</span>
                        <span>Seasonality</span>
                        <span>Travel time</span>
                    </div>
                    <div className="flex flex-col gap-2 text-xl font-bold">
                        <span>: {totalVisitors}</span>
                        <span>: {population}</span>
                        <span>: €{averageCost}</span>
                        <span>: {seasonality}</span>
                        <span>: {travelTime}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
