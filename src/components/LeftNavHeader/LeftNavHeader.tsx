import "./LeftNavHeader.scss";

import { useDispatch, useSelector } from "react-redux";

import Breakpoints from "../../foundation/Breakpoints";
import Button from "../Button/Button";
import Input from "../SearchInput/Input";
import { ReactComponent as NoteIcon } from "../../assets/icons/new-note.svg";
import Stack from "../Stack/Stack";
import { addNotesData } from "../../redux/slices/NotesDataSlice";
import { setShowMobileContent } from "../../redux/slices/showMobileContentSlice";
import useWindowSize from "../../hooks/useWindowSize";

interface ILeftNavHeaderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEditNote: (editNote: boolean) => void;
}

const LeftNavHeader: React.FunctionComponent<ILeftNavHeaderProps> = ({
  onChange,
  setEditNote,
}) => {
  const dispatch = useDispatch();
  const notes = useSelector((state: any) => state.notesData.notesData);
  const { width } = useWindowSize();
  const isTablet = width <= Breakpoints["md"];
  /**
   * We're using the React.ChangeEvent<HTMLInputElement> type to tell TypeScript that the event is a
   * change event and that the target of the event is an HTML input element
   * @param e - React.ChangeEvent<HTMLInputElement>
   */
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e);

  console.log(notes, "notes");

  const createNewNote = () => {
    dispatch(
      addNotesData([
        ...notes,
        {
          id: notes.length + 1,
          title: "",
          description: "",
          category: "",
          created_at: `${new Date().getDate()}.${
            new Date().getMonth() + 1
          }.${new Date().getFullYear()}`,
        },
      ])
    );
    setEditNote(true);
    isTablet && dispatch(setShowMobileContent(true));
  };
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
