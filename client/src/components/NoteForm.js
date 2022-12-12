import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const NoteForm = () => {

    const [text,setText] = useState('')
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        axios.post('http://localhost:8000/api/addNote',{ text: text }, {withCredentials: true, credentials: 'include'})
        .then((res) => {
            console.log("The following has been imported to the DB", res)
        }).catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    // function auto_grow(element) {
    //     element.style.height = "5px";
    //     element.style.height = (element.scrollHeight)+"px";
    // }

    //Previous issue summary: The data being entered in the axios post request needs to immediately follow the address. (Address, request body, credentials)

    return (
        <form className='container mt-3' onSubmit={submitHandler}>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Add a note here" id="note-text" style={{height: "200px"}} onChange={(e) => setText(e.target.value)} value={text}></textarea>
            </div>
            <button type='submit' className='btn btn-success mt-2 py-1'>Save Note</button>
            <trix-editor className=""></trix-editor>
        </form>
    )
}

export default NoteForm

//Trix editor 
//https://www.npmjs.com/package/trix