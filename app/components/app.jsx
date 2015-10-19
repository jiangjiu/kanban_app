import React from 'react';
import Note from './Note.jsx';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {

            notes :[
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
    }
    render() {
        const notes = this.state.notes;
        return (
            <div>
                <Notes items={notes} />
            </div>
        );
    }
}