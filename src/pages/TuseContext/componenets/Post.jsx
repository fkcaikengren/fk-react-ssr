import React,{useState, useContext} from 'react'
import CommentContext from '../CommentContext'
import Comment from './Comment'

function Post() {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const {addComment} = useContext(CommentContext)
    return (
        <div>
            <Comment></Comment>
            <br />
            <h1>请评论</h1>
            <form method='post' >
                <label for="name">姓名</label>
                <input type="text" name="name" id='name' value={name}
                    onChange={e=>setName(e.target.value)}
                />
                <br />
                <label for="comment">评论</label>
                <input type="text" name="comment" id='comment' value={comment}
                    onChange={e=>setComment(e.target.value)}
                />
            </form>
            <button onClick={e=>{
                addComment({name,comment})
            }}>提交</button>
        </div>
    )
}

export default Post
