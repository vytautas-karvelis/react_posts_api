import React , { useContext } from 'react'
import { APIContext } from '../App'

const CompA1a = () => {

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
            <h3>CompA1a</h3>
            <button onClick={()=>clickHandler('posts')}>Posts</button>
            <button onClick={()=>clickHandler('comments')}>Comments</button>
            <button onClick={()=>clickHandler('todos')}>Todos</button>
            
        </div>
    )
}

export default CompA1a
