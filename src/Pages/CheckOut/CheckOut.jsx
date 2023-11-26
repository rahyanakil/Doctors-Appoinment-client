import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
    const service =useLoaderData();
    const {img,title,_id,price}=service;

    //taking the user details from authContext firebase and use it in the form
    const {user} =useContext(AuthContext);

    const handleCheckOut =event =>{
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const date =form.date.value;
        const email =user?.email;
        // sending the data after decorate it 
        const checkout ={
            customerName:name,
            email,
            date,
            img,
            service:title,
            service_id:_id,
            price:price
        }
        console.log(checkout)
        
        //sending data to the server side to by using fetching method
        fetch('http://localhost:5000/checkout',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(checkout)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "<strong>Appoinment Successfully Booked</strong>",
                    icon: "success",
                    html: `
                      Your Booking is successfully added.
                    `,
                    showCloseButton: true,
                    
                    focusConfirm: false,
                    confirmButtonText: `
                      <i class="fa fa-thumbs-up"></i> Great!
                    `,
                    confirmButtonAriaLabel: "Thumbs up, great!",
                    cancelButtonText: `
                      <i class="fa fa-thumbs-down"></i>
                    `,
                    cancelButtonAriaLabel: "Thumbs down"
                  });
            }
        })
    }

    return (
        <div>
            <h2 className="font-bold text-3xl text-center">Book Service : {title}</h2>

           
      <form onSubmit={handleCheckOut} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.name} placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date"  name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" placeholder="Due Amount" defaultValue={'Tk'+price} className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary btn-block" type="submit" value="Order Confirm"></input>
        </div>
      </form>
    </div>
    );
};

export default CheckOut;