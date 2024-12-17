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
        background: 'linear-gradient(144deg,rgb(13, 83, 44) 0%,rgb(8, 59, 31) 100%)',
        border: '1px solid rgba(2, 107, 86, 1)',
        borderRadius: '24px',
        padding: '0',
        boxShadow: '0 0 20px rgb(4, 91, 39)',
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