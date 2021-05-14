import React, {Component} from 'react'

export default class AddNinja extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            color: '',
            power: '',
            image: ''
        }
    }

    handleName = (value) => {
        this.setState({name: value})
    }

    handleColor = (value) => {
        this.setState({color: value})
    }

    handlePower = (value) => {
        this.setState({power: value})
    }
    handleImage = (value) => {
        this.setState({power: value})
    }

    render(){
        return(
            <div className='add'>
                <h2>Add Ninja</h2>
                <input value={this.state.name} onChange={(e) => this.handleName(e.target.value)} placeholder='Name'/>
                <input value={this.state.color} onChange={(e) => this.handleColor(e.target.value)} placeholder='Color'/>
                <input value={this.state.power} onChange={(e) => this.handlePower(e.target.value)} placeholder='Power'/>
                <input value={this.state.image} onChange={(e) => this.handleImage(e.target.value)} placeholder='Image'/>
                <button onClick={() => {
                    this.props.addNinja(this.state.name, this.state.color, this.state.power, this.state.image)
                    this.setState({
                    name: '',
                    color: '',
                    power: '',
                    image: ''
                })}}>Spin!</button>
            </div>
        )
    }
}