import { ModalWindow } from "../Modal/Modal";
import { useState } from "react";

export const Contact = ({ name, number, contactId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const onButtonClick = () => {
    openModal();
  };

  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button type="button" onClick={onButtonClick}>
        Delete
      </button>
      <ModalWindow
        modalIsOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contactId={contactId}
      />
    </div>
  );
};
