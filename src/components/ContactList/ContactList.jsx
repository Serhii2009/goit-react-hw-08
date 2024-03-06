import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectVisibleCard } from "../../redux/auth/selectors";

export const ContactList = () => {
  const selectCard = useSelector(selectVisibleCard);
  return (
    <ul>
      {selectCard.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            contactId={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};
