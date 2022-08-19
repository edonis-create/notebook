import "./LeftNavHeader.scss";

import Button from "../Button/Button";
import Input from "../SearchInput/Input";
import { ReactComponent as NoteIcon } from "../../assets/icons/new-note.svg";
import Stack from "../Stack/Stack";

interface ILeftNavHeaderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LeftNavHeader: React.FunctionComponent<ILeftNavHeaderProps> = ({
  onChange,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e);
  return (
    <Stack
      className="left-nav-header"
      justifyContent="space-between"
      alignItems="center"
    >
      <Input
        onChange={handleOnChange}
        className="search-nav"
        type="search"
        placeholder="Search notes by category"
      />
      <Button designType="icon" leftIcon={<NoteIcon />} />
    </Stack>
  );
};

export default LeftNavHeader;
