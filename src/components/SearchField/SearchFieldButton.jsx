import React, {useState} from "react";
import {Button} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {
  addAgeFilterAction,
  addGenresFilterAction,
  removeAgeFilterAction,
  removeGenresFilterAction,
  sortAgesFilterAction,
} from "../../features/modules/search/search.actions";

export const SearchFieldButton = ({ text, id, variant }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleGenres = () => {
    if (!active) {
      setActive(true);
      dispatch(addGenresFilterAction(id));
    } else {
      setActive(false);
      dispatch(removeGenresFilterAction(id));
    }
  };

  const handleAge = () => {
    if (!active) {
      const age = { order: id, value: text };
      setActive(true);
      dispatch(addAgeFilterAction(age));
      dispatch(sortAgesFilterAction());
    } else {
      setActive(false);
      dispatch(removeAgeFilterAction(text));
    }
  };

  return (
    <Button
      variant={active ? "searchFieldActive" : "searchField"}
      m={"0 5px 5px 0"}
      value={text}
      onClick={variant === "genres" ? handleGenres : handleAge}
    >
      {text}
    </Button>
  );
};
