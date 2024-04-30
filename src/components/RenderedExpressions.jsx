function RenderedExpressions() {
    const animals = ["lion", "Cow", "Snake", "Lizard"]
    return (
        <div>
            <h1>Animals: </h1>
            <ul>
                {animals.map((animal) => {
                    return <li key={animal}>{animal}</li>;
                })}
                {/* JSX can automatically render arrays  */}
            </ul>
        </div>
    );
}

export default RenderedExpressions;