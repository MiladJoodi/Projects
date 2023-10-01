import React, { useEffect, useState, useMemo } from "react";
// import { useState, useEffect } from "react";
import "./Exercise.css";
import useFetch from "./../../Hooks/useFetch";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import useInput from "./../../Hooks/useInput";

export default function Exercise() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState([]);

  const addNewNote = () => {
    let newNoteObj = {
      id: notes.length + 1,
      title: newNote,
    };
    setNotes((prevNotes) => [...prevNotes, newNoteObj]);
    setNewNote("");
  };

  return (
    <div className="exersice">
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={addNewNote}>Add New Note</button>
      <hr />
      <h3>All Notes</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.id} - {note.title}
          </li>
        ))}
      </ul>
      <hr />
      <h3>js include</h3>
      {useMemo(() => {notes.filter(note=> note.title.toLowerCase().includes('js')).map(note=> (
        <div key={note.id}>
          <li>{note.id} - {note.title}</li>
        </div>
      ))}, [notes])}
    </div>
  );
}
