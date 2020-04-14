import React from "react";
import PropTypes from "prop-types";

function Modal(props) {
  // Render nothing if the "show" prop is false
  if (!props.show) {
    return null;
  }

  // The gray background
  const backdropStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 50,
  };

  // The modal "window"
  const modalStyle = {
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: "0 auto",
    padding: 30,
  };

  return (
    <div className="backdrop" style={backdropStyle}>
      <div className="modal" style={modalStyle}>
        <h2>This is how much each of you pieces of shit owe:</h2>
        <ul className="modalUserList">
          {props.userData.map((item, key) => {
            return (
              <li key={key}>
                {item.userName} - {item.debt.toFixed(2)} €
              </li>
            );
          })}
        </ul>
        <div className="footer">
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default Modal;
