import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';

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
    }

    render() {
        const notes = this.state.notes;


        return (
            <div>
                <button className='add-note' onClick={this.addNote}>+</button>
                <Notes items={notes} onEdit={this.editNote}/>
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

    editNote(noteId,task) {
        console.log('node edit',noteId,task)
    }
}