import "./LeftNavHeader.scss";

import { useDispatch, useSelector } from "react-redux";

import Button from "../Button/Button";
import Input from "../SearchInput/Input";
import { ReactComponent as NoteIcon } from "../../assets/icons/new-note.svg";
import Stack from "../Stack/Stack";
import { addNotesData } from "../../redux/slices/NotesDataSlice";

interface ILeftNavHeaderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LeftNavHeader: React.FunctionComponent<ILeftNavHeaderProps> = ({
  onChange,
}) => {
  const dispatch = useDispatch();
  const notes = useSelector((state: any) => state.notesData.notesData);
  /**
   * We're using the React.ChangeEvent<HTMLInputElement> type to tell TypeScript that the event is a
   * change event and that the target of the event is an HTML input element
   * @param e - React.ChangeEvent<HTMLInputElement>
   */
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e);

  console.log(notes, "notes");

  const createNewNote = () =>
    dispatch(
      addNotesData([
        ...notes,
        {
          id: notes.length + 1,
          title: "",
          description: "",
          category: "",
          created_at: `${new Date()}`,
        },
      ])
    );
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
      <Button
        onClick={createNewNote}
        designType="icon"
        leftIcon={<NoteIcon />}
      />
    </Stack>
  );
};

export default LeftNavHeader;
