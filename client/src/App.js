import { useDispatch } from 'react-redux';
import './App.css';
import {getPosts} from "./actions/posts"
import memories from "./images/memories.png"
import Posts from "./components/Posts/Posts"
import Form from "./components/forms/Form"
import { useEffect, useState } from 'react';

function App() {
  const [currentId, setCrtId] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts()) 
  }, [dispatch])
  return (
  
    <div className="App">
      <div className="section1">
      <h1>Memories</h1> 
      <img className="icon" src={memories} alt="memories"/>
      </div>
      <div className="section2">
        <div>
          <Posts></Posts>
        </div>
        <div>
          <Form currentId={currentId}></Form>
        </div>
      </div>
    </div>
    
  );
}

export default App;
