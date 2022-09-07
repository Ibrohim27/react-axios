import axios from 'axios';
import React, { Component } from 'react'

class ViewPerson extends Component {
    constructor(props){
        super(props)
        this.state = { personObj: {} }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/persons/'+this.props.id)
        .then(res => {
            if(res.status === 200){
                this.setState(({ personObj: res.data }));
                console.log(this.state.personObj);
            }
        })
    }
    

    render() { 
        const {personObj} = this.state

        
        return (
            <div className="container">
                <h1 className='text-center'>{personObj.name} ning shaxsiy malumotlari</h1>
                <div className='row'>
                    <div className='col-4'>
                        <img className='img-fluid' src={personObj.img}/>
                    </div>
                    <div className='col-8'>
                        <p><b>Yoshi:</b> {personObj.age}</p>
                        <p><b>Faoliat bo'lmi:</b> {personObj.dep}</p>
                        <div dangerouslySetInnerHTML={{ __html: personObj.bio }}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ViewPerson;