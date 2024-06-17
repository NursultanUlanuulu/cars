import PropTypes from "prop-types";

const Modal = ({ children, isOpen, onClose, className }) => {
  const modalClasses = isOpen
    ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md z-50 overflow-y-auto bg-white "
    : "hidden";

  return (
    <div className={`${modalClasses} ${className}`} onClick={() => onClose()}>
      <div
        className={`modal-content ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string, // Валидация для className
};

export default Modal;
