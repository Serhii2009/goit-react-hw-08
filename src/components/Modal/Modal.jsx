import Modal from "react-modal";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { deleteCard } from "../../redux/cards/operation";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(113, 106, 106, 0.5)",
  },
};

export const ModalWindow = ({ modalIsOpen, setIsOpen, contactId }) => {
  Modal.setAppElement("#root");

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCard(contactId));
    toast.success("Contact deleted successfully!");
    setIsOpen(false);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Are you sure?</h2>
        <div>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
      </Modal>
    </div>
  );
};
