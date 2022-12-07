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

  //Deleted notes.
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
    .then((res) => {
        console.log(`The note with ID ${id} was deleted`)
    }).catch((err) => {
        console.log(err)
    })
  }

  //DOM manipulator function that removes deleted notes from the page
  const removeFromDom = (id) => {
    setNoteList(noteList.filter(note => note._id !== id))
  }

  return (
    <div>

        {/* Users notes and other related data will go here */}

    </div>
  )
}

export default NoteList