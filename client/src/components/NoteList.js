import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import TextBlock from './TextBlock'

const NoteList = () => {

  const [noteList,setNoteList] = useState([])
  // const [text, setText] = useState()

  useEffect(() => {
    axios.get('http://localhost:8000/api/allNotes', {withCredentials: true, credentials: 'include'})
    .then((res) => {
        console.log(res)
        setNoteList(res.data)
    }).catch((err) => {
        console.log(err)
    })
  },[])

  //DOM manipulator function that removes deleted notes from the page
  const removeFromDom = (id) => {
    setNoteList(noteList.filter(note => note._id !== id))
  }

  return (
    <div>
      {
        noteList.map((note) => (
          <div className='container mt-3' key={note._id}>
            <TextBlock id={note._id} initialText={note.text} removeFromDom={removeFromDom}/>
          </div>
        ))
      }
    </div>
  )
}

export default NoteList