import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { saveToDo } from '../redux/reduxSlicer';
import {Form , Button , Navbar , Container} from 'react-bootstrap'
import{AiOutlinePlus} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';
const AddTask = () => {
  const styleObject = {display:"flex" , marginRight:"50px"}
  const styleBtn = {borderRadius : "50%" , width:"40%" ,height:"40%"}
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const addTodo = () => {
        dispatch(saveToDo({
            item: input,
            done: false,
            id: Math.random()
        }));

    }
  return <div className='container'>
  
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
    Todos using Redux 
      </Navbar.Brand>
    </Container>
      <Form style={styleObject} onSubmit={(e) => e.preventDefault()}>
      <Button style={{marginRight:"50px"}}  type="submit" onClick={(e) => { 
                          addTodo();
                          setInput("");
  
                          console.log(e.target.previousSibling.innerHTML)
  
                      }
                      }> <AiOutlinePlus></AiOutlinePlus>Submit</Button>

    <Form.Group className="mb-3" >
     
      <Form.Control   
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
    </Form.Group>
                        
  
</Form>
  </Navbar>


  </div>;
};

export default AddTask;
