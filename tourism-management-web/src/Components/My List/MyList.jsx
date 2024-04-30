import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Utilities/AuthContextProvider";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const MyList = () => {
    const [mySpot, setMySpot] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://b9a10-server-side-sayem-taher.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMySpot(data)



            })

    }, [user])
    const handleDelete = (_id) => {
        console.log('Delete user with id', _id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b9a10-server-side-sayem-taher.vercel.app/addTourists/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = mySpot.filter(data => data._id !== _id)
                            setMySpot(remaining)

                        }
                    })


            }
        });
    }
    return (
        <div className="mt-10 mb-10">
            <Helmet>
                <title>EuroQuest | My List</title>
            </Helmet>
            <div className="mb-5">
                <h1 className="text-3xl ml-5 lg:ml-0 font-bold text-primaryNavy">Available Spot Data - {mySpot.length}</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="lg:font-bold lg:text-lg">
                                <th>Country</th>
                                <th>Location</th>
                                <th>Price</th>
                                <th>Yearly Visitors</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mySpot.map(spot =>

                                    <tr key={spot._id}>

                                        <td>{spot.countryName}</td>
                                        <td>{spot.spotName}</td>
                                        <td> €{spot.averageCost}</td>
                                        <td>{spot.totalVisitors}</td>

                                        <Link to={`/update/${spot._id}`}><td><button className="btn bg-primaryNavy hover:bg-primaryPurple text-xl flex items-center justify-center text-center lg:w-[80px] w-[50px] text-white font-medium rounded-xl p-2 "><FaRegPenToSquare></FaRegPenToSquare> </button></td></Link>
                                        <td><button onClick={() => handleDelete(spot._id)} className="btn hover:bg-primaryBlue bg-primaryPink text-xl flex items-center justify-center text-center lg:w-[80px] w-[50px]  text-white font-medium rounded-xl p-2"><MdDelete></MdDelete></button></td>



                                    </tr>


                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyList;