import React from "react";


function Card2(props) {


    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://t4.ftcdn.net/jpg/05/88/68/59/360_F_588685904_GV8YCwcUm8wCFW4cY1HYsCqTdbV3bRVq.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.name}</h1>
          <p className="mt-2 text-sm text-gray-300">
            My name is Buddh, i have buddhi.
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div>
      
    );
}

export default Card2;
