/* eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  console.log("*** START ***** ");

  const [num, setNum] = useState(0);
  const [showFlg, setShowFlg] = useState(false);

  const onClickCountUp = () => {
    // alert(`num:${num}`);
    setNum(num + 1);
  };

  const onClickShow = () => {
    // alert(`num:${num}`);
    setShowFlg(!showFlg);
  };

  useEffect(() => {
    console.log("eeeeefect!");

    if (num % 3 === 0) {
      showFlg || setShowFlg(true);
    } else {
      showFlg && setShowFlg(false);
    }
  }, [num]);

  // const contentStyle = {
  //   color: `blue`,
  //   font: `bold`,
  //   fontSize: `18px`
  // };
  return (
    <>
      <h1 style={{ color: `red` }}>Hello です。</h1>

      <ColorfulMessage color="tomato">How are You?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です ? </ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>

      <button onClick={onClickShow}>on/off</button>
      {showFlg && <p>( 一一)</p>}
    </>
  );
};

export default App;
