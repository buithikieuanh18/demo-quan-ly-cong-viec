// import logo from "./logo.svg";
import "./App.css";
import "./demo.css";
import { Form } from "./components/Form";
import { ButtonAdd } from "./components/ButtonAdd";
import { Find } from "./components/Find";
import { Sort } from "./components/Sort";
import { List } from "./components/List";
import { useRef, useState } from "react";

const dataDemo = JSON.parse(localStorage.getItem("data")) || [];

function App() {
  const [type, setType] = useState("add");
  const [data, setData] = useState(dataDemo);
  const [state, setState] = useState(false);
  const [nothing, setNothing] = useState(false);
  const [itemUpdate, setItemUpdate] = useState({});

  function getState(state, value) {
    setState(state);
    setType(value);
  }
  // console.log("app type:", type)

  function addData(newData) {
    setData([...data, newData]);
    localStorage.setItem("data", JSON.stringify([...data, newData]));
    // console.log(JSON.parse(localStorage.getItem("data")));
  }

  function deleteData(id) {
    const newData = [];
    console.log(id);
    data.forEach((element) => {
      if (element.id !== id) {
        newData.push(element);
      }
    });
    setData(newData);
    // console.log(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }
  function updateItem(obj) {
    setItemUpdate({...obj});
  }

  function updateData(objUpdate) {
    const index = data.findIndex((e) => e.id == objUpdate.id);
    const newData = data;
    newData[index] = objUpdate;
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }

  function sortData(sortdata) {
    setData([...sortdata]);
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr></hr>
      </div>

      <div className="row">
        <div className={state ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
          {state ? (
            <Form
              updateData={updateData}
              addData={addData}
              setData={setData}
              getState={getState}
              itemUpdate={itemUpdate}
              type={type}
            />
          ) : (
            ""
          )}
        </div>

        <div className={state ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : ""}>
          <ButtonAdd getState={getState} />
          <div className="row mt-15">
            <Find sortData={sortData}/>

            <Sort sortData={sortData} getState={getState} data={data}/>
          </div>

          <List
            deleteData={deleteData}
            data={data}
            updateItem={updateItem}
            getState={getState}
            updateData={updateData}
            sortData={sortData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
