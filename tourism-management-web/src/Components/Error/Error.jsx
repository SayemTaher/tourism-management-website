import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h1>Ooops! Page Does not Exist</h1>
            <img src="" alt="" />
            <Link to='/'><button className="btn btn-primary rounded-full text-center text-white">Go back</button></Link>
            
        </div>
    );
};

export default Error;