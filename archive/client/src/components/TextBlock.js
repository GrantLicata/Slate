import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize';


const TextBlock = (props) => {

    const {id, initialText, removeFromDom} = props
    const [text, setText] = useState(initialText)

    //Delete note
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/delete/${id}`, {withCredentials: true, credentials: 'include'})
        .then((res) => {
            console.log(`The note with ID ${id} was deleted`)
            removeFromDom(id)
        }).catch((err) => {
            console.log(err)
        })
    }

    //Edit note
    const editHandler = () => {
        axios.put(`http://localhost:8000/api/update/${id}`, {text: text}, {withCredentials: true, credentials: 'include'})
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
            // setErrors(err.response.data.errors)
        })
    }

    const textBlockStyle = {
        padding: '10px'
    }
    
    return (
        <div> 
            <div className="form-floating">
                <TextareaAutosize className="form-control" id="note-text" value={text} style={textBlockStyle} onChange={(e) => {setText(e.target.value)}}/>
            </div>
            <div>
                <button className='btn btn-danger py-1 mt-2' onClick={deleteHandler}>Delete Note</button>
                <button className='btn btn-secondary py-1 ms-2 mt-2' onClick={editHandler}>Edit Note</button>
            </div>
        </div>
    )
}

export default TextBlock


//Note: The block of withCredentials and credentials is where the token is being evaluated. Without that no token will be in a request to the server.