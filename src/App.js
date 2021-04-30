import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = "데이터바인딩";
  let [good, change] = useState([0, 0, 0]);
  let [title, changeTitle] = useState([
    "오늘 한 일",
    "내일 할 일",
    "모레 할 일",
  ]);
  let [clickTitle, titleChange] = useState(0);

  // 모달창 켜고 닫는 스위치
  let [modal, modalChange] = useState(false);
  function changeTitleFunction() {
    let newArray = [...title];
    newArray.sort();
    changeTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h1>개발 Blog</h1>
      </div>
      <ul className="boardList">
        {title.map(function (title, num) {
          return (
            <ul>
              <li>
                <h3>
                  {title}
                  <span
                    onClick={() => {
                      let numCopy = [...good];
                      numCopy[num]++;
                      change(numCopy);
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
      <div className="btns">
        <button
          onClick={() => {
            titleChange(0);
          }}
        >
          버튼1
        </button>
        <button
          onClick={() => {
            titleChange(1);
          }}
        >
          버튼2
        </button>
        <button
          onClick={() => {
            titleChange(2);
          }}
        >
          버튼3
        </button>
        <button
          onClick={() => {
            modalChange(!modal);
          }}
        >
          모달 온오프 버튼
        </button>
        <button onClick={changeTitleFunction}>정렬 버튼</button>
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
      <p>상세 내용</p>
    </div>
  );
}

export default App;
