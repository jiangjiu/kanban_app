import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';
import 'array.prototype.findindex';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            notes: [
                {
                    id: uuid.v4(),
                    task: 'learn webpvasdfck'
                },
                {
                    id: uuid.v4(),
                    task: 'learn hasdfsdha'
                },
                {
                    id: uuid.v4(),
                    task: 'learn jin'
                }
            ]
        };
        this.addNote = this.addNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.findNote = this.findNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    render() {
        const notes = this.state.notes;

        return (
            <div>
                <button className='add-note' onClick={this.addNote}>+</button>
                <Notes
                    items={notes}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote}/>
            </div>
        );
    }

    addNote() {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'new task'
            }])
        })
    }

    editNote(noteId, task) {
        let notes = this.state.notes;
        const noteIndex = this.findNote(noteId);

        if (noteIndex < 0) {
            return;
        }

        notes[noteIndex].task = task;

        this.setState({notes});
    }

    findNote(noteId) {
        const notes = this.state.notes;
        const noteIndex = notes.findIndex((note) => note.id === noteId);

        if (noteIndex < 0) {
            console.warn('failed to find note', notes, noteId)
        }

        return noteIndex;
    }

    deleteNote(noteId) {
        const notes = this.state.notes;
        const noteIndex = this.findNote(noteId);

        if (noteIndex < 0) {
            return;
        }

        this.setState({
            notes: notes.slice(0,noteIndex).concat(notes.slice(noteIndex+1))
        })
    }
}