function List(props) {
    if (!props.animals) {
        return <div>Loading...</div>
    }

    if (props.animals.length === 0) {
        return <div>There are no animals in the list!</div>;
    }

    return (
        <ul>
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>
            })}
        </ul>
    );
}

function EmptyList() {
    const animals = [];

    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    )
}

export default EmptyList;
