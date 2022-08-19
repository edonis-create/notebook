import "./NotePreview.scss";

import Breakpoints from "../../foundation/Breakpoints";
import Button from "../Button/Button";
import { NoteData } from "../../dummy-data/data";
import React from "react";
import Stack from "../Stack/Stack";
import { setShowMobileContent } from "../../redux/slices/showMobileContentSlice";
import { useDispatch } from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";

interface INotePreviewProps {
  note: NoteData;
  setEditNote: (editNote: boolean) => void;
}

const NotePreview: React.FunctionComponent<INotePreviewProps> = ({
  note,
  setEditNote,
}) => {
  const { title, created_at, category, description } = note;
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const isTablet = width <= Breakpoints["md"];
  return (
    <Stack className="note-form" direction="column">
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
            label="Return"
            onClick={() => dispatch(setShowMobileContent(false))}
          />
        )}
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
