import React,{useContext} from 'react'
import CommentContext from '../CommentContext'

function Comment() {
    const {comments} = useContext(CommentContext)
    return (
        <div>
            {
                comments.map((item,i)=>{
                    return <div key={i}>
                        <p>{i}</p>
                        <p>{item.name}</p>
                        <p>{item.comment}</p>
                        <hr />
                    </div>
                })
            }
        </div>
    )
}

export default Comment
