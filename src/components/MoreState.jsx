import { useState } from 'react';

function SelfChangingInput() {
    const [ value, setValue ] = useState("");

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}
function MoreState() {
    const [ person, setPerson ] = useState({ age: 19, cookies: 4})
    const [ number, setNumber ] = useState(4);
    const handleIncreaseCookies = () => {
        setPerson ((prevPerson) => ({ ...prevPerson, cookies: prevPerson.cookies + 1}));
        setPerson ((prevPerson) => ({ ...prevPerson, cookies: prevPerson.cookies + 1}));
        const newNumber = number + 1;
        setNumber(newNumber);
    }

    console.log("Cookies count: ", person.cookies);
    return (
        <div>
            <button onClick={handleIncreaseCookies}>Cookies count: {person.cookies}</button>
            <SelfChangingInput />
        </div>
    )

}

export default MoreState;