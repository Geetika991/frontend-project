import HomeLayout from "../Layouts/HomeLayout";
import HomePageImage from "../assets/images/HomePageImage.jfif";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find out best
            <span className="text-yellow-500 font-bold">Online Course</span>
          </h1>
          <p className="text-xl text-gray-200">
            We have a large libraray of courses by highly silled ans qualifed
            Faculties at valauable cost
          </p>

          <div className="space-x-6">
            <Link to="/courses">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer">
                Explore courses
              </button>
            </Link>

            <Link to="/contact">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img alt="homepage image" src={HomePageImage} />
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
