
import React from 'react';
import PostCard from './components/PostCard';
import image_1 from './assets/carouselImages/image_1.jpg';
import image_2 from './assets/carouselImages/image_2.jpg';
import image_3 from './assets/carouselImages/image_3.jpeg';
import profilePhoto from './assets//images/profile_pic.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginSignUp from './components/LoginSignUp'

function App() {
  return (
    <div>
       <LoginSignUp />
    </div>
    // <div className="min-h-screen flex items-center justify-center bg-gray-400">
    //   <PostCard 
    //       profilePhoto={profilePhoto}
    //       username="adityawaradkar"
    //       image1={image_1}
    //       image2={image_2}
    //       image3={image_3}
    //       postHeading="Exciting New Feature!"
    //       postDescription="Check out the latest updates to our app. We've added some amazing new features just for you.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur ea aspernatur pariatur repellendus animi reiciendis, dolores quas, nulla, voluptas quibusdam? Atque maiores repellendus dicta nemo deleniti voluptatibus, tempore sequi!"
    //       date="2024-08-25"
    //       time="14:30"
    //       likeCount="123"
    //       postCategory="Job opportunity" // Added postCategory prop
    //   />       
    // </div> 
  );
}

export default App;

