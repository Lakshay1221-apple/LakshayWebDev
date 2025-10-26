// import PropTypes from 'prop-types';

function Students(props) {
    return(
        <div className = "student">
            <p>Name: {props.name}<br></br>Age: {props.age}<br></br>Class: {props.class}</p>
        </div>

    )

}
  
// Students.propTypes = {
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     class: PropTypes.string.isRequired,
// }

export default Students;
