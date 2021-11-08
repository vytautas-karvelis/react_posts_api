import './App.css';
import React, { useReducer, useEffect, useState, useRef } from 'react';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import axios from 'axios'

//context for managing global state
export const APIContext = React.createContext()

//useReducer initial state

let initialAPIState = { posts:[], comments:[], todos:[], current:[]}

//useReducer function to manage initialAPI state

const apiReducer = (state, action) =>{

  console.log('apiReducerfires')
  switch(action.type){
    
    case "posts" :          
      return {...state, current: state.posts}
    case "comments" :        
      return {...state, current: state.comments}
    case  "todos" :
      return {...state, current: state.todos} 

    case "loadData":
      console.log("in load data top");

      if(action.posts && action.comments && action.todos){
        console.log("in load data");
        
        return {
          posts:   action.posts,
          comments:action.comments,
          todos:   action.todos,
          current:[]
        } 
      }
      
      return state
    default:
      return state
  }
}


function App() {  
  
//Hooks
const [state, dispatch] = useReducer(apiReducer, initialAPIState)
const [isLoading, setIsLoading] = useState(true)
const isLoaded = useRef(false)

useEffect(() => {
  let todos
  let comments
  let posts
  if(!isLoaded.current){
    console.log('useEffect fires')
    async function fetchData(){
      
      const res1 = await axios.get('https://jsonplaceholder.typicode.com/todos')
      todos = res1.data.slice(0,3)
  
      const res2 = await axios.get('https://jsonplaceholder.typicode.com/comments')
      comments = res2.data.slice(0,3)
  
      const res3 = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = res3.data.slice(0,3)  
      dispatch({type:"loadData", todos, comments, posts})       
    }  

    fetchData()  
    isLoaded.current = true
  }
  
  console.log(state.current)
}, [state])

return (
    <div className="App">
      <APIContext.Provider value={{dispatch}}>
    
     {  state.current  &&
      state.current.map(item=>{
        return Object.entries(item).map((key,val) =>(<p key={key} >{key}: {val}</p>))
      })
    } 
        <CompA/>
        <CompB/>
        <CompC/>  
      </APIContext.Provider>
    </div>
  );
}

export default App;
