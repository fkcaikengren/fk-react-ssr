
import React,{useContext, useState} from 'react'
import Post from './componenets/Post'
import CommentContext from './CommentContext'

function TuseContext() {
    const [comments, setComments] = useState([])
    return (
        <div>
            <h1>This is a article title</h1>
            <p>content is ...</p>
            <br />
            <CommentContext.Provider value={{
                comments,
                addComment:comment=>{
                    setComments(comments.concat(comment))
                }
            }}>
                <Post />
            </CommentContext.Provider>
            
            
        </div>
    )
}

export default TuseContext
