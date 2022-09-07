import React from 'react'
import {useParams} from 'react-router-dom'
import ViewPerson from '../components/viewperson';

const OnePerson = () => {
    const {id} = useParams()
    return (
        <div className='container'>
            <ViewPerson id={id}/>
        </div>
    );
}
 
export default OnePerson;