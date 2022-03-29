import React, { Component, useEffect, useState } from "react";

export function Sort(props) {
  const [state, setState] = useState(false);

  const [dataSort, setDataSort] = useState(props.data);

  // useEffect(props.getState(state),[dataSort])

  const handleSortAZ = (event) => {
    event.preventDefault();
    const newList = dataSort.sort(function (a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
    });
    props.getState(false);
    props.sortData(newList)

  };

  const handleSortZA = (event) => {
    event.preventDefault();
    const newList = dataSort.sort(function (a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x > y) {
        return -1;
      }
    });
    props.sortData(newList)
    props.getState(false);

  };

  const handleSortStatus1 = (event) => {
    event.preventDefault();
    const newList = dataSort.sort(function (a, b) {
      let x = a.status.toLowerCase();
      if (x === "1") {
        return -1;
      }
    });
    props.sortData(newList);
    props.getState(false);

  };

  const handleSortStatus0 = (event) => {
    event.preventDefault();
    const newList = dataSort.sort(function (a, b) {
      let x = a.status.toLowerCase();
      if (x === "0") {
        return -1;
      }
    });
    props.sortData(newList)

    props.getState(false);

  };

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sắp Xếp
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <a href="" role="button" onClick={handleSortAZ}>
              <span className="fa fa-sort-alpha-asc pr-5"></span>
              Tên A-Z
            </a>
          </li>
          <li>
            <a href="" role="button" onClick={handleSortZA}>
              <span className="fa fa-sort-alpha-desc pr-5"></span>
              Tên Z-A
            </a>
          </li>
          <li role="separator" className="divider"></li>
          <li>
            <a href="" role="button" className="" onClick={handleSortStatus1}>
              Trạng thái kích hoạt
            </a>
          </li>
          <li>
            <a href="" role="button" className="" onClick={handleSortStatus0}>
              Trạng thái ẩn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sort;
