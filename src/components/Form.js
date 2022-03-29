import React, { Component } from 'react';
import { useRef, useState, useEffect } from 'react';


export function Form(props) {
    console.log('form: ====', props.itemUpdate,props.type)

    const [state, setState] = useState(false);
    var inputName = useRef(null);
    var inputStatus = useRef(null);

    // console.log('type: ', props.type);
    // console.log('inputName: ', inputName);

    function changeState() {
        props.getState(state);
        setState(true);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.type === 'add') {
            // event.preventDefault();
            // console.log("type add:", props.type);
            let id  = Math.random()*1000000000000;
            let name = inputName.current.value;
            let status =  inputStatus.current.value;
            const data = {id: id, name: name, status: status};
            if (name !== ""){
                props.addData(data)
                props.getState(state);
                setState(true);
            } else {
                alert("Nhập tên");
            }
        }
        else {
            // event.preventDefault();
            const objUpdate = { 
                id: props.itemUpdate.id, 
                name: inputName.current.value, 
                status: inputStatus.current.value
            }
            if (inputName.current.value !== ""){
                props.updateData(objUpdate);
                props.getState(state);
                setState(true);
            } else {
                alert("Nhập tên");
            }
        }
    }

    
    const initialFormState = { id: props.itemUpdate.id, name: '', status: '0' }
    const [items, setItems] = useState(initialFormState)

    useEffect(() => {
        // console.log('====here');
        if(props.type === 'update') {
            inputName.current.value = props.itemUpdate.name;
            inputStatus.current.value = props.itemUpdate.status;    
        } 
        else {
            inputName.current.value = items.name;
            inputStatus.current.value = items.status;
        }
    });

    const handleCancel = (event) => {
        // items.id = props.itemUpdate.id;
        inputName.current.value = items.name;
        inputStatus.current.value = items.status;
    }

        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {props.type=='add' ? 'Thêm công việc':'Cập nhật công việc'} 
                        <span className="fa fa-times-circle text-right" onClick={changeState}></span>
                    </h3>
                </div>

                <div className="panel-body">
                    <form >
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" name="name" ref={inputName} className="form-control"/>
                            <label>Trạng Thái :</label>
                        </div>

                        <select className="form-select" aria-label="Default select example" name="status" ref={inputStatus}>
                            <option value="1">Kích hoạt</option>
                            <option value="0">Ẩn</option>
                        </select>

                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning" onClick={handleSubmit}>
                                <span className="fa fa-plus mr-5"></span>
                                Lưu Lại
                            </button>

                            <button type="button" className="btn btn-danger" onClick={handleCancel}>
                                <span className="fa fa-close mr-5"></span>
                                Hủy bỏ
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        );
}
export default Form;
