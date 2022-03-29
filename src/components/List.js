import React, { Component, useRef, useState } from "react";
import { ListItem } from "./ListItem";

export function List(props) {
  const findStatus = useRef('-1');
  const keyword = useRef('');
  const defaultData = JSON.parse(localStorage.getItem("data")) || []
  // const [keyword, setKeyWord] = useState('');

  function handleFilter(event) {

    if(event === '-1') {
      const newList = defaultData;
      props.sortData(newList);
    } 
    else if (event === '0') {
      const newList = defaultData.filter(item => 
         item.status == '0'
      );
      props.sortData(newList);
    }
    else {
      const newList = defaultData.filter(item => 
        item.status == '1'
     );
     props.sortData(newList);
    }
  }

  function handleSearch() {
    const searchData = defaultData.filter(item => 
      item.name.includes(keyword.current.value)
    );
    props.sortData(searchData);
    console.log(keyword.current.value);
  }

  return (
    <div className="row mt-15">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng thái</th>
              <th className="text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" name="filterName" className="form-control" ref={keyword} onChange={handleSearch}/>
              </td>
              <td>
                <select name="filterStatus" className="form-select" ref={findStatus} onClick={()=> handleFilter(findStatus.current.value)}>
                  <option value="-1">Tất cả</option>
                  <option value="0" >Ẩn</option>
                  <option value="1">Kích hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {props.data &&
              props.data.map((item, index) => {
                return <ListItem updateData={props.updateData} getState={props.getState} updateItem={props.updateItem} deleteData={props.deleteData} key={item.id} item={item} index={index} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
