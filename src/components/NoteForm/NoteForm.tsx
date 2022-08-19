import "./NoteForm.scss";

import Input from "../SearchInput/Input";
import { NoteData } from "../../dummy-data/data";
import React from "react";
import Stack from "../Stack/Stack";
import TextArea from "../TextArea/TextArea";

interface INoteFormProps {
  activeNote: NoteData;
  handleUpdateNote: (note: NoteData) => void;
}

const NoteForm: React.FunctionComponent<INoteFormProps> = ({
  activeNote,
  handleUpdateNote,
}) => {
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
      created_at: `${new Date()}`,
    });
  return (
    <form className="note-form">
      <Stack direction="column">
        <Input
          type="text"
          className="note-form__input"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleOnEdit("title", e.target.value)
          }
          autoFocus
        />
        <Input
          type="text"
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
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleOnEdit("description", e.target.value)
          }
        />
      </Stack>
    </form>
  );
};

export default NoteForm;
