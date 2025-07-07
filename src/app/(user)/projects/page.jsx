import ProjectContet from "@/app/Components/ProjectContet";
import Title from "@/app/Components/Title";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#1e1e1f] 2xl:w-226 xl:w-161  ml-118 xs:px-5 ">
        <div className="animation-fadeIn">
          <Title MainTitle={"Projects"} />
          {/* IMAGES */}
          <div className="grid 2xl:grid-cols-2 xl:grid-cols-1 xs:pt-38 xxs:pt-20 pb-5 xl:ml-20 2xl:ml-0 lg:ml-30 md:ml-23 sm:ml-12 xs:ml-4.5 xxs:ml-4">
            <ProjectContet
              img={"/assets/gymProject.png"}
              name={"Gym Website"}
              info={
                "Transform your fitness journey with expert guidance, cutting-edge equipment, and a supportive community that keeps you motivated. Whether you're looking to build strength, achieve peak performance, our gym is designed to help you reach your goals."
              }
              url={"https://gym-website-beta-ten.vercel.app/"}
            />
            <ProjectContet
              img={"/assets/travelProject.png"}
              name={"Travel Website"}
              info={
                "Embark on unforgettable journeys with ease. Discover breathtaking destinations, personalized itineraries crafted just for you. Whether you're craving adventure, relaxation, or cultural immersion, our platform connects you to the world's best experiences."
              }
              url={"https://travel-website-drab-theta.vercel.app/"}
            />
            <ProjectContet
              img={"/assets/collegeProject.png"}
              name={"College Website"}
              info={
                "Empower your future with world-class education, cutting-edge research, and a vibrant campus community. At College, we cultivate innovation, foster leadership, and provide the tools to excel in an ever-evolving world. From expert faculty to state-of-the-art facilities."
              }
              url={
                "https://website-git-main-abhay-gaudanis-projects.vercel.app"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
