import React from 'react'
import NoteForm from '../components/NoteForm'
import NoteList from '../components/NoteList'
import Navigator from '../components/Navigator'

const Main = () => {
  return (
    <div>
        <Navigator />
        <NoteForm />
        <NoteList />
    </div>
  )
}

export default Main