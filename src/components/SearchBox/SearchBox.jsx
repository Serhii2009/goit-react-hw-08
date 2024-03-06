import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkFilter } from "../../redux/cards/filtersSlice";
import { selectStatusFilter } from "../../redux/auth/selectors";

export const SearchBox = () => {
  const id = useId();
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(checkFilter(value));
  };
  return (
    <>
      <input
        placeholder="Find contacts by name"
        id={id}
        value={filter}
        type="text"
        onChange={handleChange}
      />
    </>
  );
};
