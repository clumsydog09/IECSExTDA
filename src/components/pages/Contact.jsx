import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="max-w-xl mx-auto py-8 flex justify-center text-center">
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className=" text-5xl font-bold mb-4">Contact Us</h2>
        <div className="mb-4">
          <h3 className=" text-2xl text-gray-400 font-bold mb-2">
            Mobile Numbers:
          </h3>
          <p className="text-xl ">
            +91 70508 04020
            <br /> +91 83416 11346
          </p>
        </div>
        <div className="mb-4">
          <h3 className=" text-2xl text-gray-400 font-bold mb-2">Email:</h3>
          <p className="text-xl">hello@iecsemanipal.com</p>
        </div>
        <div className="mb-4">
          <h3 className=" text-2xl text-gray-400 font-bold mb-2">Instagram:</h3>
          <a
            href="https://www.instagram.com/iecsemanipal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-xl"
          >
            @iecsemanipal
          </a>
        </div>
        <div>
          <h3 className=" text-2xl text-gray-400 font-bold mb-2">Website:</h3>
          <a
            href="https://iecsemanipal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-xl"
          >
            iecsemanipal.com
          </a>
        </div>
      </div>
    </div>
  );
};
