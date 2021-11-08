import CompB1a from "./CompB1a"
import React , { useContext } from 'react'
import { APIContext } from '../App'

const CompB1 = () => {

    const apiContext = useContext(APIContext)
    const { dispatch } = apiContext
    
    const clickHandler = (category) => {

        if(category === 'posts'){
            dispatch({type:"posts"})
        } else if (category ==='comments'){
            dispatch({type:"comments"})
        } else {
            dispatch({type:"todos"})
        }
    }

    return (
        <div>
            <h2>CompB1</h2>
            <button onClick={()=>clickHandler('posts')}>Posts</button>
            <button onClick={()=>clickHandler('comments')}>Comments</button>
            <button onClick={()=>clickHandler('todos')}>Todos</button>
            
            <CompB1a/>
        </div>
    )
}

export default CompB1
