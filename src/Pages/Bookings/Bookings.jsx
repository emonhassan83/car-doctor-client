import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingRow from "../BookingRow/BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const url = `https://car-doctor-server-emon83.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {      
          setBookings(data)
        }
        else {
          // logout and then navigate
          navigate('/')
        }
      });
  }, [url, navigate]);
  //console.log(bookings);

  const handleDelete = id =>{
    const proceed = confirm('Are you sure you want to delete this booking');
    if (proceed) {
        fetch(`https://car-doctor-server-emon83.vercel.app/bookings/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                alert('Deleted booking successfully');
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
        })
    }
}

const handleBookingConfirm = id => {
    fetch(`https://car-doctor-server-emon83.vercel.app/bookings/${id}`, {
        method: 'PATCH',
        headers: {
             'Content-Type': 'application/json'
            },
        body: JSON.stringify({status: 'confirm'}),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            //update state
            const remaining = bookings.filter(booking => booking._id !== id );
            const updated = bookings.find(booking => booking._id === id);
            updated.status = 'confirm';
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
        }
    })
}
 
  return (
    <div>
      <div className="serviceDetails_bg rounded-md mb-12 lg:mb-32">
        <h2 className="text-5xl font-bold text-white pl-16 pt-28">Cart Details</h2>
        <p className="text-lg text-red-600 font-bold mt-2 pl-16 ml-1 ">Home - Product Details</p>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              bookings.map(booking => <BookingRow 
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>)  
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
