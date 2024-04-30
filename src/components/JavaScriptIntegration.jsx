function getFavoriteFood(name) {
    if (name == "Ryan") {
        return "Cookies";
    }
}

function JavaScriptIntegration() {
    const imageSrc = "https://blahblahblahblahblahblah.jpg";
    const description = "blah blah blah blah";
    const name = "Ryan";
    const theme = {
        backgroundColor: "blue",
        color: "yellow"
    }
    return (
        <div>
            <img
                className="cookies"
                src={imageSrc}
                alt={description}
            />
            <p>Hi, I&apos;m {name}</p>
            <p>My favorite food is {getFavoriteFood(name)}</p>
            <p>My favorite object is {{ name: "This Object" }.name}</p>
            <p style={{
                backgroundColor: "blue",
                color: "yellow"
            }}>Add some styles</p>
            <p style={theme}>Styles in  one object</p>
        </div>
    )
}

export default JavaScriptIntegration;