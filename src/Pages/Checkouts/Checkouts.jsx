import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import CheckoutsRow from "./CheckoutsRow";
import Swal from "sweetalert2";

const Checkouts = () => {
  const { user } = useContext(AuthContext);
  const [checkouts, setCheckouts] = useState([]);

  const url = `http://localhost:5000/checkout?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCheckouts(data));
  }, [url]);

  //event handler for delete option(state jeikhane event handler sei khane to show the state shange after deletation)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/checkout/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = checkouts.filter(
                (checkout) => checkout._id !== id
              );
              setCheckouts(remaining);
            }
          });
      }
    });
  };

  const handleCheckoutConfirm = (id) => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update state
          const remaining = checkouts.filter(
            (checkouts) => checkouts._id !== id
          );
          const updated = checkouts.find((checkouts) => checkouts._id === id);
          updated.status = "confirm";
          const newCheckouts = [updated, ...remaining];
          setCheckouts(newCheckouts);
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center p-6">
        {" "}
        Your Booking: {checkouts.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                </label>
              </th>
              <th className="text-xl font-bold">Images</th>
              <th className="text-xl font-bold">Services</th>
              <th className="text-xl font-bold">Date</th>
              <th className="text-xl font-bold">Price</th>
              <th className="text-xl font-bold">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {checkouts.map((checkout) => (
              <CheckoutsRow
                key={checkout._id}
                checkout={checkout}
                handleDelete={handleDelete}
                handleCheckoutConfirm={handleCheckoutConfirm}></CheckoutsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checkouts;
