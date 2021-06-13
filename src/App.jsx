import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // numが変更された場合のみ作動する。関心の分離
  useEffect(() => {
    console.log("useEffect");
    // stateが変更されると、関数が頭から動いてしまう（そのため普通に書くとエラーとなる）
    if (num > 0) {
      if (num % 3 === 0) {
        // flagがfalseの場合だけ、trueに変更する
        // trueの場合はtrueに更新する必要がない
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // flagがtrueの場合だけ、falseに変更する
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^o^)</p>}
    </>
  );
};

export default App;
