import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({title}) => {
const onClick = () => {
    console.log('clicked')

};



    return (
      <header className="header">
        <h1 style={{}}>{title}</h1>
        <Button color="green" text="Add" onClick={onClick} />
      </header>
    );
}

//default props
Header.defaultProps = {
    title: 'Task Tracker',
}

//set type for props
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header
