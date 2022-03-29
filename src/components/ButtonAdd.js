import React, { Component } from "react";
import { useState } from "react";

export function ButtonAdd(props) {
  function changeState(state,value) {
    props.getState(state,value);
    console.log(state);
  }

//   function getState(state) {
//     setState(state);
//   }
  return (
    <button type="button" className="btn btn-primary" onClick={()=>changeState(true,"add")}>
      <span className="fas fa-plus mr-5"></span>
      Thêm công việc
    </button>
  );
}
