import React, {Component} from 'react'

export default class Ninja extends Component{
    constructor(){
        super()
        this.state = {
            editMode: false,
            name: ''
        }
    }

    handleName = (value) => {
        this.setState({name: value})
    }

    toggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleSave = () => {
        this.props.editNinja(this.props.ninja.id, this.state.name)
        this.toggleEdit()
        this.setState({name: ''})
    }
    
    render(){
        return this.state.editMode ?(
            <div className='ninja'>
                <input value={this.state.name} onChange={(e) => this.handleName(e.target.value)}/>
                <button onClick={this.handleSave}>Save</button>
            </div>
        ): (
            <div className='ninja'>
                <h2>{this.props.ninja.name}</h2>
                <p>Color: {this.props.ninja.color}</p>
                <p>Power: {this.props.ninja.power}</p>
                <img className='image' src={this.props.ninja.image} alt={this.props.ninja.name}/>
                <button onClick={() => this.props.deleteNinja(this.props.ninja.id)}>Delete Ninja</button>
                <button onClick={() => this.toggleEdit()}>Edit</button>
            </div>
        )
    }
}
