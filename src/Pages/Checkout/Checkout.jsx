import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import './Checkout.css'

const Checkout = () => {
    const service = useLoaderData();
    const {_id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch(`https://car-doctor-server-emon83.vercel.app/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                alert('Service book successfully updated')
            }
        })
    };
    return (
        <div>
          <div className="serviceDetails_bg rounded-md mb-12 lg:mb-32">
        <h2 className="text-5xl font-bold text-white pl-16 pt-28">Check Out</h2>
        <p className="text-lg text-red-600 font-bold mt-2 pl-16 ml-1 ">Home-Check Out</p>
      </div>
      <div className="card-body h-[700px] lg:p-24">
        <form onSubmit={handleBookService}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name"  className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="date" name="date" placeholder="Enter Date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" defaultValue={"$" + price} name="price" placeholder="Due Amount" className="input input-bordered" />
        </div>
        <div className="from-control">
            <textarea name="message" placeholder="Message" id="" cols="30" rows="10" className="w-[100%] lg:w-[1030px] lg:h-72 p-6 rounded-lg"></textarea>
        </div>
            </div>
        <div className="form-control mt-6">
          <input className="btn bg-[#FF3811] hover:bg-[#d43718] btn-block border-none lg:mt-6" type="submit" value="Order Confirm" />
        </div>
        </form>
      </div>
    </div>
    );
};

export default Checkout;