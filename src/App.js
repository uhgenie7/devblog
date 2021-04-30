import React, { useState } from "react";
import "./App.css";

function App() {
  // useState
  let [title, changeTitle] = useState([
    "오늘 한 일",
    "내일 할 일",
    "모레 할 일",
  ]);
  let [good, goodChange] = useState([0, 0, 0]);
  let [clickTitle, titleChange] = useState(0);
  let [inputValue, inputChange] = useState("");
  let [modal, modalChange] = useState(false);

  // deep copy
  function changeTitleFunction() {
    let newArray = [...title];
    newArray.sort();
    changeTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h1>리액트 연습 공간</h1>
      </div>
      {/* 모달창 버튼 */}
      <div className="btns">
        <button
          onClick={() => {
            modalChange(!modal);
          }}
        >
          모달 버튼
        </button>
        <button onClick={changeTitleFunction}>정렬 버튼</button>
      </div>
      <ul className="boardList">
        {title.map(function (title, num) {
          return (
            <ul key={num}>
              <li>
                <h3
                  onClick={() => {
                    titleChange(num);
                  }}
                >
                  {title}
                  <span
                    onClick={() => {
                      let numCopy = [...good];
                      numCopy[num]++;
                      // console.log(numCopy);
                      // let pushNumCopy = numCopy[num]++;
                      // console.log(pushNumCopy);
                      // let resultNumCopy = numCopy.unshift(pushNumCopy);
                      // goodChange(resultNumCopy);
                      goodChange(numCopy);
                    }}
                  >
                    👍
                  </span>
                  {good[num]}
                </h3>
              </li>
              <li>
                <p>2월 17일 발행</p>
                <hr />
              </li>
            </ul>
          );
        })}
      </ul>
      <div>
        {/* 글제목 추가 */}
        <div className="publish">
          <input
            type="text"
            onChange={(e) => {
              inputChange(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let pushTitleArray = [...title];
              pushTitleArray.unshift(inputValue);
              changeTitle(pushTitleArray);
              let pushNumCopy = [...good];
              pushNumCopy.unshift(0);
              goodChange(pushNumCopy);
            }}
          >
            저장
          </button>
        </div>
      </div>
      {modal === true ? <Modal titles={title} clickTitle={clickTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.titles[props.clickTitle]}</h2>
      <p>날짜</p>
    </div>
  );
}

export default App;
