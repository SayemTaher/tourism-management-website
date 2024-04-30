import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10 mb-10 gap-5">
            <Helmet>
                <title>
                    EuroQuest | 404
                </title>
            </Helmet>
            <h1 className="text-2xl lg:text-6xl font-bold">Ooops! Page Does not Exist</h1>
            <img className="h-[600px] w-[800px] object-cover" src="https://i.ibb.co/xstFc9H/228438-P28070-739.jpg" alt="img" />
            <Link to='/'><button className="btn btn-primary w-[120px] rounded-full text-center text-white">Go back</button></Link>
            
        </div>
    );
};

export default Error;