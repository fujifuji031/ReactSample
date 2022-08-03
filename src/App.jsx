import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  //配列の分割代入。numが変数でsetStateが関数。()内はnumの初期値
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffectの第2引数に対象のstateの引数を定義？することで
  //それが変更されたときだけ作動する処理にできる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslintの設定で注意がでている。offにもできる
  }, [num]);

  return (
    <>
      {/*スタイルを指定するときは{}内にjavascript構文でオブジェクト書く */}
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      {/*ボタンが押されたときにonClickButtonを呼び出している */}
      <button onClick={onClickCountUp}>ボタン</button>
      <br />
      <button onClick={onClickSwichShowFlag}>on.off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(*^_^*)</p>}
      {/**faceShowFlagがtrueの場合は左を返す */}
    </>
  );
};

export default App;
