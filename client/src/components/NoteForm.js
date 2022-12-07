import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const NoteForm = () => {

    const [text,setText] = useState('')
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addNote',{
            text: text
        }).then((res) => {
            console.log(res)
            navigate('/main')
        }).catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <form className='container mt-3' onSubmit={submitHandler}>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Add a note here" id="note-text" style={{height: "200px"}} onChange={(e) => setText(e.target.value)} value={text}></textarea>
            </div>
            <button type='button' className='btn btn-secondary mt-2 py-1 col-12'>Submit</button>
        </form>
    )
}

export default NoteForm