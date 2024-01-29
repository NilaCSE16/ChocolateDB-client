import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ChocolateShow = ({ chocolate }) => {
  const [chocolates, setChocolates] = useState(chocolate);
  // console.log("Chocolates:   ", chocolates);
  const handleDelete = (id) => {
    console.log("Id: ", id);
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
        fetch(`http://localhost:5000/chocolate/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!!!!",
                text: "Your Chocolate has been deleted.",
                icon: "success",
              });
              const remaining = chocolates.filter((cho) => cho._id !== id);
              setChocolates(remaining);
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>
        <img
          className="w-20 h-20 rounded-btn"
          src={chocolates.photo}
          alt="Avatar Tailwind CSS Component"
        />
      </th>
      <td>
        <div className="text-sm">{chocolates.name}</div>
      </td>
      <td>
        <div className="text-sm">{chocolates.country}</div>
      </td>
      <td>
        <div className="text-sm">{chocolates.category}</div>
      </td>
      <th>
        <div className="flex gap-2">
          <div>
            <Link to={`/updateChocolate/${chocolates._id}`}>
              <button className="btn  btn-sm  bg-[#77432026]">
                <DriveFileRenameOutlineIcon className="text-[#774320]"></DriveFileRenameOutlineIcon>
              </button>
            </Link>
          </div>
          <div>
            <button
              className="btn btn-sm text-[#774320] bg-[#77432026]"
              onClick={() => handleDelete(chocolates._id)}
            >
              X
            </button>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default ChocolateShow;
