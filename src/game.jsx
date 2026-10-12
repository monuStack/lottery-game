import { useState } from "react";
import "./Lottery.css";

export default function Lottery() {
  let [lotNum, setLotNum] = useState([0, 0, 0]);
  let [result, setResult] = useState("");
  let [sum, setSum] = useState(0);

  function tecket() {
    let firstNum = Math.floor(Math.random() * 10);
    let secoundNum = Math.floor(Math.random() * 10);
    let thirdNum = Math.floor(Math.random() * 10);
    setLotNum([firstNum,secoundNum,thirdNum]);

    let sum = firstNum +secoundNum+thirdNum
    setSum(sum);
  }

  return (
    <>
      <div>
        <h1>Lottery Game</h1>
        <div>
          <h2>Result : {sum == 15 ? 'Winner':'Loose'}</h2>
        </div>

        <div className="numDiv">
          {lotNum.map((num) =>(
            <p>{num}</p>
          ))}
        </div>

        <button
          type="button"
          className="btn-subtle theme-warning"
          onClick={tecket}
        >
          Get new ticket
        </button>
      </div>
    </>
  );
}
