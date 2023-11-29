const CheckoutsRow = ({ checkout, handleDelete, handleCheckoutConfirm }) => {
  const { _id, date, service, price, img, status } = checkout;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td className="text-xl">{service}</td>
      <td className="text-xl">{date}</td>
      <td className="text-xl">{price}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => {
              handleCheckoutConfirm(_id);
            }}
            className="btn btn-ghost btn-xl text text-xl">
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default CheckoutsRow;
