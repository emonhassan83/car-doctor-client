import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('https://car-doctor-server-emon83.vercel.app/services')
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])
    
    return (
        <div>
            <div className="text-center mt-12 lg:mt-28">
            <h5 className="text-xl text-orange-600 font-bold">Service</h5>
            <h2 className="text-5xl font-bold mt-5">Our Service Area</h2>
             {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-gray-500 text-lg mt-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
            <div className="text-center mt-[50px]">
            <button className="btn btn-outline text-[#FF3811] hover:bg-[#d82f0d] border-orange-600 lg:text-base font-semibold">More Services</button>
            </div>
        </div>
    );
};

export default Services;