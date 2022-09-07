import axios from "axios";
import React, {Component} from "react";
import {Link} from 'react-router-dom'

class Persons extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            persons: []
        }
    }

    componentDidMount(){
        this.getPersons()
    }

    getPersons = () => {
        axios.get('http://localhost:3001/persons')
        .then(res => {
            if(res.status === 200){
                this.setState({ persons: res.data });
            }
        })
    }

    deletePerson = (id) =>{
        axios.delete(`http://localhost:3001/persons/${id}`)
        .then(res => {
            console.log(res.status);
            if (res.status === 200){
                // this.componentDidMount()
            }
            const {persons} = this.state
            const index = persons.findIndex(person => person.id === id)
            const before = persons.slice(0, index);
            const after = persons.slice(index+1)
            const newPersons = [...before, ...after]
            this.setState({ persons: newPersons });
        })
    }

    render(){
        const personsArr = this.state.persons.map(person => {
            return (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.dep}</td>
                    <td>
                        <Link className="btn btn-primary mr-3" to={'/persons/'+person.id}>Batafsil</Link>
                        <button onClick={() => this.deletePerson(person.id)} className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between mt-5 align-items-center col-9">
                    <h1>
                        Persons
                    </h1>
                    <Link to='/newpersons' className="btn btn-success">New Person</Link>
                </div>
                <table className="table">
                    <thead align="center">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Dep</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {personsArr}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Persons