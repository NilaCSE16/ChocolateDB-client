import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import ChocolateShow from "./ChocolateShow";

function App() {
  const loadedChocolate = useLoaderData();
  return (
    //     border-radius: 8px;
    // background: ;
    <div className="m-10">
      <h1 className="bg-[#76453B] mx-auto rounded-btn text-center text-white font-bold text-4xl pt-4 mb-6 h-20 w-[658px]">
        Chocolate Management System
      </h1>
      <Link to="/addChocolate">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          + New Chocolate
          <img src="/src/images/bar-icon.png" className="w-6 h-7" alt="" />
        </button>
      </Link>
      <div className="overflow-x-auto mt-5">
        <table className="table text-black">
          {/* head */}
          <thead className="bg-[#CE8D66] text-black text-sm">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Country / Factory</th>
              <th>Category</th>
              <th>Action</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {loadedChocolate.map((chocolate) => (
              <ChocolateShow
                key={chocolate._id}
                chocolate={chocolate}
              ></ChocolateShow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
