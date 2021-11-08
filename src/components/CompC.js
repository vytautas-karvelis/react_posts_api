import React , { useContext } from 'react'
import { APIContext } from '../App'

const CompC = () => {
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
            <h1>CompC</h1>
            <button onClick={()=>clickHandler('posts')}>Posts</button>
            <button onClick={()=>clickHandler('comments')}>Comments</button>
            <button onClick={()=>clickHandler('todos')}>Todos</button>
            
        </div>
    )
}

export default CompC
