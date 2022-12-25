import React, { useState } from "react";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


const TrixEditor = (props) => {

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

    let element = document.querySelector("trix-editor")
    console.log("This is the element",element)

    return (

        <form className='container mt-3' onSubmit={submitHandler}>
            <div>
                <input type="hidden" id="trix" value={props.value}  />
                <trix-editor input="trix" onChange={(e) => {setText(JSON.stringify(element.editor))}} style={{'min-height': "400px"}} />
            </div>
            <button type='submit' className='btn btn-success mt-2 py-1'>Save Note</button>
        </form>
    );
}

export default TrixEditor;

//Trix editor 
//https://www.npmjs.com/package/trix