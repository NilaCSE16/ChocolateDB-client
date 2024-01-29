import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolate = () => {
  const chocolate = useLoaderData();
  //   const [chocolate, setChocolate] = useState(loadedChocolates);
  const handleAddChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const updateChocolate = { name, country, category, photo };
    console.log(updateChocolate);
    fetch(`http://localhost:5000/chocolate/${chocolate._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Chocolate Updated successfully!!!!!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          //   setChocolate(updateChocolate);
          form.reset();
        }
      });
  };
  return (
    <div className="m-10">
      <h1 className="bg-[#76453B] mx-auto rounded-btn text-center text-white font-bold text-4xl pt-4 mb-6 h-20 w-[658px]">
        Chocolate Management System
      </h1>
      <Link to="/">
        <button className="mt-5 mb-5">
          {/* <FaArrowLeft /> */}
          <ArrowBackIcon></ArrowBackIcon>
          All Chocolates
        </button>
      </Link>
      <hr />
      <div className="bg-[#F7F4E9] p-10 mt-10">
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">Update Chocolates</h2>
          <p>Use the below form to update an existing product</p>
        </div>
        <div className="w-[60%] mx-auto mt-6">
          <form onSubmit={handleAddChocolate}>
            <label htmlFor="">Name</label>
            <br />
            <input
              type="text"
              defaultValue={chocolate.name}
              className="mt-2 mb-3 input w-full input-bordered"
              name="name"
            />
            <br />
            <label htmlFor="">Country</label>
            <br />
            <input
              type="text"
              defaultValue={chocolate.country}
              className="mt-2 mb-3 input w-full input-bordered"
              name="country"
            />
            <br />
            <label htmlFor="">Category</label>
            <br />
            <select
              name="category"
              className="w-full p-3 mt-2 mb-3 rounded-btn input-bordered"
              defaultValue={chocolate.category}
            >
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
              <option value="free">Free</option>
            </select>
            <br></br>
            <label htmlFor="">Photo URL</label>
            <br />
            <input
              type="text"
              name="photo"
              defaultValue={chocolate.photo}
              className="input input-bordered w-full mt-2 mb-3"
            />
            <input
              type="submit"
              value="Update"
              className="btn btn-block mt-6 bg-[#76453B] text-white"
            />
            {/* <button className="btn btn-block mt-6 bg-[#76453B] text-white">
              Save
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateChocolate;
