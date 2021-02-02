import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({title, onAdd, showAdd}) => {




    return (
      <header className="header">
        <h1 style={{}}>{title}</h1>
        <Button color={showAdd ? 'orange': "#4BD9A9"} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
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
