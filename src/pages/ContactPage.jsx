import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import toast, { Toaster } from "react-hot-toast";

import { SearchBox } from "../components/SearchBox/SearchBox";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { MyLoader } from "../components/Loader/Loader";

import { fetchCards } from "../redux/cards/operation";
import { selectError, selectLoading } from "../redux/auth/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (error && !hasErrorOccurred) {
      error("Waiting please...");
      setHasErrorOccurred(true);
    }
  }, [error, hasErrorOccurred]);
  return (
    <>
      <div>
        <div>
          <ContactForm />
          <SearchBox />
        </div>
      </div>

      {isLoading && <MyLoader />}
      <ContactList />
      {/* <Toaster /> */}
    </>
  );
}
