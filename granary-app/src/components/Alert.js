// import styles
import './Alert.css'

const Alert = ({ type, message }) => {

  return (
    <div className={type}>
      {message}
    </div>
  );
};

export default Alert;