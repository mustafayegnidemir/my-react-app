// defaultProps = default values for props in case they are not passed from the parent componenets. name ='Guest'


import PropTypes from "prop-types";


function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Yas: {props.age}</p>
            <p>Ogrenci mi? {props.isStudent ? "Evet" : "Hayir"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student