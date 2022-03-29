export const ListItem = (props) => {
  // console.log(props.item);
  
  function handleUpdate(state,value){
    props.getState(state,value);
    // console.log('====',props.item);
    props.updateItem(props.item);

  }
  
  // console.log("status", props.item.status);
  function handleChange() { 
    if(props.item.status === '0') {
      props.item.status = '1';
    }
    else {
      props.item.status = '0';
    }
    const statusUpdate = { 
      id: props.item.id, 
      name: props.item.name, 
      status: props.item.status
    }
    props.updateData(statusUpdate);
    
    //props.getState(props.item.status);
    props.updateItem(props.item);
    console.log("status", props.item.status);
    console.log(props.item.id);
  }

  return (
    <tr>
      <td>{props.index+1}</td>
      <td>{props.item.name}</td>
      <td className="text-center">
        <span className="label label-info" onClick={handleChange}>{props.item.status==0 ? 'Ẩn':'Kích hoạt'}</span>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning" onClick={()=>handleUpdate(true,"update")}>
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger"  onClick={()=>props.deleteData(props.item.id)}>
        <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
};
