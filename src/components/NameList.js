import React from "react";
import Person from "./Person";



function NameList () {

    const name = ['Suvit' , 'Deb' , 'Barma']

    const person = [
        {
            name:'Hello',
            age : 24,
            skill : 'Data' 
        },
        {
            name:'World',
            age : 25,
            skill : 'ReactJs' 
        },
        {
            name:'How',
            age : 26,
            skill : 'NodeJs' 
        },
        {
            name:'Are You',
            age : 27,
            skill : 'dotNet' 
        },
        {
            name:'Doing ! ',
            age : 28,
            skill : 'MongoDb' 
        }
    ]

    const personList = person.map(person_details => (
        <Person person_details={person_details}/>
    ))

    return (
        <div>
            {/* <h2>{name[0]}</h2>
            <h2>{name[1]}</h2>
            <h2>{name[2]}</h2> */}
            {
            name.map (names => <h2>{names}</h2>)
            }
            {personList}

        </div>
    )
}



export default NameList;