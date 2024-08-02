"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { isDesktop } from "react-device-detect";

const defaultSceeen = 960;

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    console.log("rrrrr");
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    console.log(window);
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return {
    isMobile: screenSize.width > defaultSceeen ? false : true,
    isDesktop: screenSize.width <= defaultSceeen ? false : true,
  };
};

export default useScreenSize;
