import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.renderEdit = this.renderEdit.bind(this);
        this.edit = this.edit.bind(this);
        this.renderTask = this.renderTask.bind(this);
        this.checkEnter = this.checkEnter.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
        this.renderDelete = this.renderDelete.bind(this);

        this.state = {
            editing: false
        }
    }

    render() {
        const editing = this.state.editing;
        return (
            <div>
                {editing ? this.renderEdit() : this.renderTask()}
            </div>
        );
    }

    renderEdit() {
        return <input
            autoFocus={true}
            defaultValue={this.props.task}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}/>
    }

    renderTask() {
        const onDelete = this.props.onDelete;

        return (
            <div onClick={this.edit}>
            <span className='task'>{this.props.task}</span>
            {onDelete ? this.renderDelete() : null}
        </div>
        );
    }

    edit() {
        this.setState({
            editing: true
        })
    }

    checkEnter(e) {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    }

    finishEdit(e) {
        this.props.onEdit(e.target.value);
        this.setState({
            editing: false
        })
    }

    renderDelete() {
        return <button className='delete' onClick={this.props.onDelete}>X</button>;
    }
}
