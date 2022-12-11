import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const NoteList = () => {

  const [noteList,setNoteList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/allNotes', {withCredentials: true, credentials: 'include'})
    .then((res) => {
        console.log(res)
        setNoteList(res.data)
    }).catch((err) => {
        console.log(err)
    })
  },[])

  //Delete note
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
    .then((res) => {
        console.log(`The note with ID ${id} was deleted`)
    }).catch((err) => {
        console.log(err)
    })
  }

//   //Edit note
//   const editHandler = (e) => {
//     e.preventDefault()
//     axios.put(`http://localhost:8000/api/update/${id}`,{
//         text: text
//     }).then((res) => {
//         console.log(res)
//         navigate('/')
//     }).catch((err) => {
//         console.log(err)
//         setErrors(err.response.data.errors)
//     })
// }

  //DOM manipulator function that removes deleted notes from the page
  const removeFromDom = (id) => {
    setNoteList(noteList.filter(note => note._id !== id))
  }

  return (
    <div>
      {
        noteList.map((note,index) => (
          <div className='container mt-3' key={index}>
            <div className="form-floating">
              <textarea className="form-control" id="note-text" style={{height: "200px"}} defaultValue={note.text} />
            </div>
            <div className=''>
              <button className='btn btn-danger py-1 mt-2' onClick={(e) => {
                  deleteHandler(note._id)
                  removeFromDom(note._id)
              }}>Delete Note</button>
              {/* <button className='btn btn-secondary py-1 ms-2 mt-2' onClick={(e) => {
                  editHandler(note._id, note.text)
              }}>Edit Note</button> */}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default NoteList