import Modal from 'react-modal';
Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #646cff',
        borderRadius: '24px',
        padding: '0',
        boxShadow: '0 6px 20px rgba(100, 108, 255, 0.3), 0 6px 20px rgba(100, 108, 255, 0.2)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

const ImageModal = ({ isOpen, onRequestClose, children}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}>
            {children}
        </Modal>
    )
}

export default ImageModal