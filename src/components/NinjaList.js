import {Component} from 'react'
import axios from 'axios'
import AddNinja from './AddNinja'
import Ninja from './Ninja'

export default class NinjaList extends Component{
    constructor(){
        super()
        this.state = {
            ninjaArray: []
        }
    }

    componentDidMount(){
        axios.get('/api/ninjas')
        .then((res) => {
            this.setState({ninjaArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    deleteNinja = (id) => {
        axios.delete(`/api/ninjas/${id}`)
        .then((res) =>{
            this.setState({ninjaArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    addNinja = (name, color, power, image) => {
        axios.post('/api/ninjas', {name, color, power, image})
        .then((res) => {
            this.setState({ninjaArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    editNinja = (id, name) => {
        axios.put(`/api/ninjas/${id}`, {name})
        .then((res) => {
            this.setState({ninjaArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
        
    }
    

    render(){
        console.log(this.state.ninjaArray)
        return(
            <div>
                <AddNinja addNinja={this.addNinja}/>
                {this.state.ninjaArray.map((ninja) => {
                    return(
                        <Ninja ninja={ninja} deleteNinja={this.deleteNinja} editNinja={this.editNinja}/>
                    )
                })}
            </div>
        )
    }
}