import Swal from 'sweetalert2'
import { RiImageAddFill } from "react-icons/ri";
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Utilities/AuthContextProvider';
import { useLoaderData } from 'react-router-dom';
const Update = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData()
    const {_id,name,email,totalVisitors, population,photUrl,spotName, countryName,location,description,averageCost,seasonality,travelTime} = data
    const handleAddSpot = (e) =>{
        console.log(user)
        e.preventDefault()
        const form = e.target 
        const name = form.user_name.value;
        const email = user.email
        const photUrl = form.photo.value 
        const spotName = form.spot_name.value 
        const totalVisitors = form.total_visitors.value 
        const countryName = form.country_name.value 
        const location = form.location.value
        const description = form.description.value 
        const population = form.population.value
        const averageCost = form.cost.value 
        const seasonality = form.seasonality.value 
        const travelTime = form.travel_time.value 

        console.log(name,email,totalVisitors, population,photUrl,spotName, countryName,location,description,averageCost,seasonality,travelTime)

        const upDateCoffee = {
            name,email,totalVisitors, population,photUrl,spotName, countryName,location,description,averageCost,seasonality,travelTime
        }
        fetch(`http://localhost:5000/addTourists/${_id}`,{
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(upDateCoffee)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Spot Details Updated successfully!',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        })



    }
    return (

        
            <div className="hero  bg-[url('https://i.ibb.co/w0kjxCs/victor-elvira-avalos-l-Iyu0a-Lb-MVI-unsplash.jpg')] bg-no-repeat bg-cover ">
                <Helmet>
                    <title>EuroQuest | Update Data</title>
                </Helmet>
                <div className="hero-content flex-col p-3 rounded-xl">
                    
                    <div className="card shrink-0  shadow-2xl w-full bg-base-100">
                    <div className="text-center lg:text-left mb-5">
                        <h1 className="lg:text-5xl mt-5 text-center text-xl font-bold text-primaryNavy">Update Tourists Spot</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                        <form className="card-body flex flex-col gap-2 " onSubmit={handleAddSpot}>
                            <div className="flex flex-col lg:flex-row gap-10">
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" defaultValue={email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name="user_name" defaultValue={name} placeholder="Enter user name" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Population</span>
                                    </label>
                                    <input type="text" defaultValue={population} name="population" placeholder="Enter the population" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" defaultValue={photUrl} name="photo" placeholder="https://example.com" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Tourists spot name</span>
                                    </label>
                                    <input type="text" defaultValue={spotName} name="spot_name" placeholder="Enter spot name" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Total visitors per year </span>
                                    </label>
                                    <input type="text" defaultValue={totalVisitors} name="total_visitors" placeholder="Enter the number of visitors per year" className="input input-bordered" required />

                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country Name</span>
                                    </label>
                                    <input type="text" defaultValue={countryName} name="country_name" placeholder="Enter the country name" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" defaultValue={location} name="location" placeholder="Enter the location name" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea type="text" defaultValue={description} name="description" className="input input-bordered" required id="" placeholder="Enter some description" cols="30" rows="10"></textarea>


                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Average cost</span>
                                    </label>
                                    <input type="text" defaultValue={averageCost} name="cost" placeholder="Enter average cost" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seasonality</span>
                                    </label>
                                    <select
                                        className="select w-full select-ghost "
                                        name="seasonality" 
                                        defaultValue={seasonality} // name attribute for the select field
                                        required
                                    >
                                        <option value="">Select season</option>
                                        <option value="Summer">Summer</option>
                                        <option value="Winter">Winter</option>
                                        <option value="Spring">Spring</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Travel time</span>
                                    </label>
                                    <input type="text" defaultValue={travelTime} name="travel_time" placeholder="Enter travel time" className="input input-bordered" required />

                                </div>
                                


                            </div>
                            </div>
                            <div className=" p-3 mt-5 flex items-center gap-2 hover:bg-primaryBlue font-bold justify-center text-2xl rounded-full bg-primaryNavy text-white ">
                                <RiImageAddFill></RiImageAddFill>
                                <input type="submit" name="Add Spot" id="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        
    );
};

export default Update;