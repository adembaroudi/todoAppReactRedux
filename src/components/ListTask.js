import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editToDo, editCheck } from '../redux/reduxSlicer';
import { selectTodoList } from '../redux/reduxSlicer';
import Checkbox from '@material-ui/core/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table , Button } from 'react-bootstrap'
import {BsFillTrashFill} from 'react-icons/bs';
import{BiEdit} from 'react-icons/bi'

function ListTask({ item, done, id }) {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);
    const checkState = () => todoList.findIndex(el => el.id === id);
  
    const handleChange = () => {
  
  
      dispatch(
        editCheck(
          checkState(),
  
        )
      )
    }
    const breakThrough = (style) => done ?
      style = { textDecoration: 'line-through' } :
      style = { backgroundColor: 'none' };
  
    const handleDelete = () => {
      dispatch(
        deleteToDo(
          [
            todoList.findIndex(el => el.id === id), 1
          ]
        )
      )
    }
  
    const [content, setContent] = React.useState(false)
    const allowEdit = (e) => {
  
      switch (content) {
        case false: setContent(!content); break;
        case true: {
          setContent(!content);
          dispatch(
            editToDo(
              {
                newInput: e.target.
                previousSibling.previousSibling.innerHTML,
                index: todoList.findIndex(el => el.id === id)
              }
            )
          );
  
        }; break; 
        default : 
  
  
      }
    }
    return <div className="container" >
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Done/unDone</th>
      <th>Added </th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>    
      <Checkbox
      checked={done}
      onChange={handleChange}
      name="checkedB"
      color="primary"
    /></td>
      <td>  
    
    <p
      contentEditable={`${content}`}
      suppressContentEditableWarning={true}
      style={breakThrough()} >
      {item}
    </p>

  
    </td>
    <td>  
    <Button variant="danger" onClick={handleDelete}><BsFillTrashFill></BsFillTrashFill> delete task</Button>
    <Button style ={{marginLeft: 10}} variant="info" onClick={allowEdit}><BiEdit></BiEdit> {!content ? 'edit' : 'save edit'}</Button>
    </td>
 
    </tr>
  </tbody>
</Table>
 
  </div>

}

export default ListTask;
