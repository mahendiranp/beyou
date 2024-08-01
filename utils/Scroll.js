"use client";

import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const option = {
  dumping: 0.1,
  thumbMinSize: 1,
  renderByPixels: true,
  alwaysShowTracks: true,
};

const Scroll = (props) => {
  useEffect(() => {
    Scrollbar.init(document.body, option);
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);
  return <>{props.children}</>;
};

export default Scroll;
