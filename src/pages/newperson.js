import axios from 'axios';
import React, {Component} from 'react'

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

class NewPerson extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            dep: '',
            isAlert: false,
            bio: '',
            img: ''
        }
    }

    changeValue = (e) => {
        this.setState(item => {
            return {[e.target.getAttribute('name')] : e.target.value}
        });    
    }

    handleModelChange = (bio) => {
        this.setState({
          bio: bio
        });
      } 

    sendAll = (e) => {
        e.preventDefault();
        const {name, age, dep, bio, img} = this.state
        const newPerson = {name, age, dep, bio, img}
        axios.post('http://localhost:3001/persons', newPerson)
        this.setState({ name:'', age:0, dep: ''});
    }

    render(){
        return (
            <div className='container mt-5'>
                <h1 className='text-center'>Hello world</h1>
                {this.state.bio}
                <form onSubmit={this.sendAll}>
                    <div className='row'>
                        <div className='col-6'> 
                            <input type="text" value={this.state.name} name='name' onChange={this.changeValue} className="form-control mt-4"/>
                        </div>
                        <div className='col-6'>
                            <input type="number" value={this.state.age} name='age' onChange={this.changeValue} className="form-control mt-4" />
                        </div>
                        <div className='col-6'>
                            <select className="form-control mt-4 mb-4" value={this.state.dep} name='dep' onChange={this.changeValue} >
                                <option>Depratamentni tanlang</option>
                                <option value="Veb dasturlash">Veb dasturlash</option>
                                <option value="Mobil dasturlash">Mobil dasturlash</option>
                                <option value="IOS dasturlash">IOS dasturlash</option>
                            </select>
                        </div>
                        <div className='col-6'>
                        <input type="text" value={this.state.img} name='img' onChange={this.changeValue} placeholder="Rasm urlni yuklang" className="form-control mt-4" />
                        </div>
                    </div>
                    <FroalaEditorComponent tag='textarea' className="mt-4"  name="bio" bio={this.state.bio} onModelChange={this.handleModelChange} />
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewPerson