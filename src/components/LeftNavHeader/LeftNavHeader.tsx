import "./LeftNavHeader.scss";

import Button from "../Button/Button";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { ReactComponent as NoteIcon } from "../../assets/icons/new-note.svg";
import SearchInput from "../SearchInput/SearchInput";
import Stack from "../Stack/Stack";

const LeftNavHeader = () => {
  return (
    <Stack
      className="left-nav-header"
      justifyContent="space-between"
      alignItems="center"
    >
      <SearchInput className="search-nav" placeholder="Search notes" />
      <Button designType="icon" leftIcon={<NoteIcon />} />
    </Stack>
  );
};

export default LeftNavHeader;
