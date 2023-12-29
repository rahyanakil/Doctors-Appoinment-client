import { Link } from "react-router-dom";


const DoctorsCard = ({ doctor }) => {
  const { img, title, price, _id} = doctor;
 
  
    return (
        <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl w-80 h-52"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-green-500 font-bold">Price:{price}</p>
          <div className="card-actions">
           <Link className="" to={`/checkout/${_id}`}>
           <button className="btn btn-outline mr-4 btn-warning">Book Now</button>
            <button className="btn btn-active btn-primary">Get More Info</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DoctorsCard;







