import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions.js';
import NoteStore from '../stores/NoteStore.js';
import AltContainer from 'alt/AltContainer.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <button className='add-note' onClick={this.addNote}>+</button>
                <AltContainer
                    stores={{NoteStore}}
                    inject={{
                    items: () => NoteStore.getState().notes
                    }}
                >
                <Notes onEdit={this.editNote} onDelete={this.deleteNote}/>
                </AltContainer>
            </div>
        );
    }

    addNote() {
        NoteActions.create({task: 'New Tast'});
    }

    editNote(id, task) {
        NoteActions.update({id, task});
    }

    deleteNote(id) {
        NoteActions.delete(id);
    }
}