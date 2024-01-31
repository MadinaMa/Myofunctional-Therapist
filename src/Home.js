import { useState } from "react";
import React from "react";
import ThemeBG from "./ThemeBG";
import Icons from "./Icons";
import DateTime from "./DateTime";
import Top from "./Top";
import './App.css';
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";



export const ColorContext = React.createContext()

function Home() {

  const {t} = useTranslation();

  const handAlert = () => {
    Swal.fire({
        title: "Hi there!",
        text: "This page is about to change color!",
        imageUrl: "https://media.istockphoto.com/id/1291208207/photo/are-you-serious.jpg?s=612x612&w=0&k=20&c=buBcpDh9HukYeQUzJSK63eW5xTECnkll6f8V9a9D5vQ=",
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Custom image"
      });
    }

  function bothbtn () {
    handAlert()
    changeColor()
  }
  const [myColor, setMyColor] = useState(true);

  function changeColor() {
    setMyColor ((myFirstColor) => !myFirstColor)
  }

  return ( <div>
    <ColorContext.Provider value={myColor}>
      <button  className="theme"  onClick={bothbtn}>
      { t ('Color') } 
      </button>
      <ThemeBG/>
    </ColorContext.Provider>

    <div>
      <Icons/>
    </div>

    <div>
      <DateTime/>
    </div>
 
    <div>
      <Top/>
    </div>

  </div>
  );
}

export default Home;
