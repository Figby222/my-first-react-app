function ListItem(props) {
    return <li>{props.animal}</li>;
}

function List(props) {
    return (
        <ul>
            <h2>Starts with L</h2>
            {props.animals.map((animal) => {
                return animal.startsWith("L") ? 
                    <ListItem key={animal} animal={animal} /> :
                    null;
            })}
            <h2>Starts with L part 2</h2>
            {props.animals.map((animal) => {
                return animal.startsWith("L") && 
                    <ListItem key={animal} animal={animal} />;
                    // Returns the li if condition is true otherwise returns false
            })}
        </ul>
    );
}

function ConditionalProps() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    );
}

export default ConditionalProps;