import React, { useState } from "react";
import ReactDOM from "react-dom";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //配列の分割代入。numが変数でsetStateが関数。()内はnumの初期値
  const [num, setNum] = useState(0);
  return (
    <>
      {/*スタイルを指定するときは{}内にjavascript構文でオブジェクト書く */}
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      {/*ボタンが押されたときにonClickButtonを呼び出している */}
      <button onClick={onClickCountUp}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

export default App;
