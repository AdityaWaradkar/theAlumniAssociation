import React, { useState } from "react";

const Postcard = ({
  profilePhoto,
  username,
  image1,
  image2,
  image3,
  postHeading,
  postDescription,
  date,
  time,
  likeCount,
  postCategory,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="parent-container bg-white text-white rounded-2xl flex flex-col relative my-[50px] w-[700px] align-middle ">
      <div className="head bg-white h-[70px] rounded-t-2xl flex justify-start items-center pl-3">
        <div className="pfp rounded-full bg-cyan-600 h-12 w-12 border border-white border-2">
          <img
            src={profilePhoto}
            alt={`${username}'s profile`}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="username ml-4 text-black">{username}</div>
        <div className="postCategory flex items-center justify-center h-8 w-[200px] bg-gray-200 rounded-full text-black ml-[230px] p-2">
          {postCategory}
        </div>
        <div className="menu ml-auto text-gray-600 cursor-pointer relative">
          <i
            className="fas fa-ellipsis-h text-3xl pr-6"
            onClick={toggleDropdown}
          ></i>
          {isDropdownOpen && (
            <div className="dropdown-menu absolute top-full right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded-lg shadow-lg z-50">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                  Save
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                  Share
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                  Report
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="carousel-container w-full overflow-hidden relative h-72">
        <div
          className="carousel-track flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <img
            src={image1}
            className="w-full flex-shrink-0"
            alt="Carousel Image 1"
          />
          <img
            src={image2}
            className="w-full flex-shrink-0"
            alt="Carousel Image 2"
          />
          <img
            src={image3}
            className="w-full flex-shrink-0"
            alt="Carousel Image 3"
          />
        </div>
        <button
          id="prev"
          className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-transparent text-white p-6"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button
          id="next"
          className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent text-white p-6"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
      <div className="post-content flex flex-col flex-grow p-4">
        <div className="flex-grow">
          <h2 className="text-xl font-bold mb-2 text-black">{postHeading}</h2>
          <p className="text-gray-800 mb-2">{postDescription}</p>
        </div>
        <div className="footer flex justify-between items-center text-gray-600 text-sm mt-4">
          <div className="like-count flex items-center text-lg">
            <i className="fa-regular fa-heart pr-2"></i>
            <span>{likeCount} likes</span>
          </div>
          <div className="text-center text-lg">
            <span>{date}</span> • <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
