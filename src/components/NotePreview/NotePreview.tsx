import Button from "../Button/Button";
import { NoteData } from "../../dummy-data/data";
import React from "react";
import Stack from "../Stack/Stack";

interface INotePreviewProps {
  note: NoteData;
  setEditNote: (editNote: boolean) => void;
}

const NotePreview: React.FunctionComponent<INotePreviewProps> = ({
  note,
  setEditNote,
}) => {
  const { title, created_at, category, description } = note;
  return (
    <Stack className="note-form" direction="column">
      <Stack className="full_width" justifyContent="flex-end">
        <Button
          height="lg"
          width="xxl"
          fontSize="base"
          label="Edit"
          onClick={() => setEditNote(true)}
        />
      </Stack>
      <h1 className="note-preview__title">{title}</h1>
      <p className="note-preview__sub-title">
        {created_at} ⊛ {category}
      </p>
      <p className="note-preview__description">{description}</p>
    </Stack>
  );
};

export default NotePreview;
