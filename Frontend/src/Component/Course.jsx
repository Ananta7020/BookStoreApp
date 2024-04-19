import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2x1 mx-auto md:px-20 ">
        <div className="items-center justify-center text-center">
          <h1 className="pt-28 text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero
            magnam, nam explicabo repudiandae voluptatem tempore impedit sunt
            culpa eos incidunt nobis cupiditate assumenda quasi commodi ipsam
            aliquam voluptatibus architecto laborum eius. Sequi ipsa qui tempore
            quas esse tempora? Consequatur placeat incidunt voluptas doloribus?
            Cumque?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
