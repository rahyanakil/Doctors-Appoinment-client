import Banner from '../Home/Banner/Banner';
import DoctorsCard from './DoctorsCard';
import { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors,setDoctors] =useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data =>setDoctors(data))

    })

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    doctors.map(doctor =><DoctorsCard
                    key={doctor._id}
                    doctor={doctor}>

                    </DoctorsCard>)
                    //services.map(service =><ServiceCard key={service._id} service={service}>   </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Doctors;