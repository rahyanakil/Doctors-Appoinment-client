import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard/";

const Services = () => {
    const [services,setServices] =useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-red-500">Exclusive Health Packages</h3>
                <p className="font-bold text-xl">Now you can grab exclusive health packages from our partnered hospitals and clinics.</p> 
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service =><ServiceCard
                    key={service._id}
                    service={service}
                    >  
                    </ServiceCard>)
                }
            </div>
        </div>
        
    );
};

export default Services;