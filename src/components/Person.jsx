import { useState } from 'react';

function Input({
    text,
    handleChange
}) {
    return(
        <>
        <input 
            type="text"
            value={text}
            onChange={handleChange}
        />
        </>
    )
}
function Person() {
    const [person, setPerson] = useState({ firstName: "Figby", lastName: "Posey", age: 100 });
  
    const handleIncreaseAge = () => {
      console.log("in handleIncreaseAge (before setPerson call): ", person);
      setPerson({ ...person, age: person.age + 1 });
      // we've called setPerson, surely person has updated?
      console.log("in handleIncreaseAge (after setPerson call): ", person);
    };
    
    const handleFirstNameChange = (e) => {
        setPerson({...person, firstName: e.target.value});
    }

    const handleLastNameChange = (e) => {
        setPerson({...person, lastName: e.target.value});
    }
  
    // this console.log runs every time the component renders
    // what do you think this will print?
    console.log("during render: ", person);
  
    return (
      <>
        <Input 
            // key="firstNameInput" 
            text={person.firstName}
            handleChange={handleFirstNameChange}
        />
        <Input 
            // key="lastNameInput"
            text={person.lastName}
            handleChange={handleLastNameChange}
        />
        <h1>{person.firstName + ' ' + person.lastName}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }

  export default Person;