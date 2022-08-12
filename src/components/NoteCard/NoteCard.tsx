import "./NoteCard.scss";

import React from "react";

interface INoteCardProps {
  title: string;
  created_at: string;
  category: string;
  className?: string;
}

const NoteCard: React.FunctionComponent<INoteCardProps> = ({
  title,
  created_at,
  category,
  className,
}) => {
  const classNames = ["note-card", className].join(" ");
  return (
    <div className={classNames}>
      <h2 className="note-card__title">{title}</h2>
      <p className="note-card__footer">
        {created_at} ⊛ {category}
      </p>
    </div>
  );
};

export default NoteCard;
