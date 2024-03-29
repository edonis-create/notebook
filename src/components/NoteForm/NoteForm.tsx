import "./NoteForm.scss";

import Breakpoints from "../../foundation/Breakpoints";
import Button from "../Button/Button";
import Input from "../SearchInput/Input";
import { NoteData } from "../../dummy-data/data";
import React from "react";
import Stack from "../Stack/Stack";
import TextArea from "../TextArea/TextArea";
import { setShowMobileContent } from "../../redux/slices/showMobileContentSlice";
import { useDispatch } from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";

interface INoteFormProps {
  activeNote: NoteData;
  handleUpdateNote: (note: NoteData) => void;
  setEditNote: (editNote: boolean) => void;
}

const NoteForm: React.FunctionComponent<INoteFormProps> = ({
  activeNote,
  handleUpdateNote,
  setEditNote,
}) => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  /**
   * We're taking in a field and a value, and then we're updating the activeNote with the new value,
   * and then we're updating the note in the database
   * @param {string} field - string - The field that is being edited.
   * @param {string} value - string - the value of the field that was edited
   */
  const handleOnEdit = (field: string, value: string) =>
    handleUpdateNote({
      ...activeNote,
      [field]: value,
      created_at: `${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()}`,
    });
  const isTablet = width <= Breakpoints["md"];
  return (
    <form className="note-form">
      <Stack direction="column">
        <Stack
          className="full_width mb_10"
          justifyContent={isTablet ? "space-between" : "flex-end"}
        >
          {isTablet && (
            <Button
              designType="secondary"
              height="lg"
              width="xxl"
              fontSize="base"
              label="Back"
              onClick={() => dispatch(setShowMobileContent(false))}
            />
          )}
          <Button
            height="lg"
            width="xxl"
            fontSize="base"
            label="Preview"
            onClick={() => setEditNote(false)}
          />
        </Stack>
        <label className="mb_10" htmlFor="title-input">
          Title:
        </label>
        <Input
          type="text"
          id="title-input"
          className="note-form__input"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleOnEdit("title", e.target.value)
          }
          autoFocus
        />
        <label className="mb_10" htmlFor="title-category">
          Category:
        </label>
        <Input
          type="text"
          id="title-category"
          placeholder="Note Category"
          className="note-form__input"
          value={activeNote.category}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleOnEdit("category", e.target.value)
          }
        />
        <TextArea
          className="note-form__text-area"
          placeholder="Your thoughts..."
          value={activeNote.description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleOnEdit("description", e.target.value)
          }
        />
      </Stack>
    </form>
  );
};

export default NoteForm;
