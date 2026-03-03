// props = read only properties that are shared between components. They are immutable and cannot be changed by the component that receives them. Props are used to pass data from a parent component to a child component. <component key = value />

// propTypes = a mechanism that ensures that the props passed to a component are of the correct type. It is used to validate the props and to provide a warning if the props are of the wrong type. PropTypes is a built-in library in React that provides a set of validators for different types of props.    age: PropTypes.number.isRequired, name: PropTypes.string.isRequired, isStudent: PropTypes.bool.isRequired

import Student from "./Student.jsx";

function App() {
    return (
        <>
         <Student name="Mustafa" age={25} isStudent={true} />
         <Student name="Aysenur" age={26} isStudent={false} />
         <Student name="Ayca" age={3} isStudent={true} />
         <Student name="Gokce" age={0} isStudent={false} />
        <Student name="Larry"/>
        </>
    );
}

export default App
