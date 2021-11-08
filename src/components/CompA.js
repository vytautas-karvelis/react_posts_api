import CompA1 from './CompA1'
import React , { useContext } from 'react'
import { APIContext } from '../App'

const CompA = () => {


    const apiContext = useContext(APIContext)
    const { dispatch } = apiContext

    const clickHandler = (category) => {

        // if(category === 'posts'){
        //     dispatch({type:"posts"})
        // } else if (category ==='comments'){
        //     dispatch({type:"comments"})
        // } else {
        //     dispatch({type:"todos"})
        // }
        dispatch({type:category})
    }


    return (
        <div>
            <h1>CompA</h1>
            <button onClick={()=>clickHandler('posts')}>Posts</button>
            <button onClick={()=>clickHandler('comments')}>Comments</button>
            <button onClick={()=>clickHandler('todos')}>Todos</button>
            <CompA1 />
        </div>
    )
}

export default CompA
