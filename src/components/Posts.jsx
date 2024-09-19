import React from "react";
import Postcard from "./Postcard";
import image_1 from "../assets/carouselImages/image_1.jpg";
import image_3 from "../assets/carouselImages/image_3.jpeg";
import image_2 from "../assets/carouselImages/image_2.jpg";
import profilePhoto from "../assets/carouselImages/image_1.jpg";
const Posts = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center bg-slate-300  flex-col align-middle items-center">
        <Postcard
          profilePhoto={profilePhoto}
          username="adityawaradkar"
          image1={image_1}
          image2={image_2}
          image3={image_3}
          postHeading="Exciting New Feature!"
          postDescription="Check out the latest updates to our app. We've added some amazing new features just for you.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur ea aspernatur pariatur repellendus animi reiciendis, dolores quas, nulla, voluptas quibusdam? Atque maiores repellendus dicta nemo deleniti voluptatibus, tempore sequi!"
          date="2024-08-25"
          time="14:30"
          likeCount="123"
          postCategory="Job opportunity" // Added postCategory prop
        />
        <Postcard
          profilePhoto={profilePhoto}
          username="Pauras More"
          image1={image_1}
          image2={image_2}
          image3={image_3}
          postHeading="Exciting New Feature!"
          postDescription="Check out the latest updates to our app. We've added some amazing new features just for you.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur ea aspernatur pariatur repellendus animi reiciendis, dolores quas, nulla, voluptas quibusdam? Atque maiores repellendus dicta nemo deleniti voluptatibus, tempore sequi!"
          date="2024-08-25"
          time="14:30"
          likeCount="60K"
          postCategory="Job Switch" // Added postCategory prop
        />
        <Postcard
          profilePhoto={profilePhoto}
          username="MR X"
          image1={image_1}
          image2={image_2}
          image3={image_3}
          postHeading="Exciting New Feature!"
          postDescription="Check out the latest updates to our app. We've added some amazing new features just for you.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur ea aspernatur pariatur repellendus animi reiciendis, dolores quas, nulla, voluptas quibusdam? Atque maiores repellendus dicta nemo deleniti voluptatibus, tempore sequi!"
          date="2024-08-25"
          time="14:30"
          likeCount="200"
          postCategory="Job opportunity" // Added postCategory prop
        />
      </div>
    </div>
  );
};

export default Posts;
