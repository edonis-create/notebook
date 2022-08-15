import "./NoteCard.scss";

import React from "react";

interface INoteCardProps {
  title: string;
  created_at: string;
  category: string;
  className?: string;
  onClick?: () => void;
}

const NoteCard: React.FunctionComponent<INoteCardProps> = ({
  title,
  created_at,
  category,
  className,
  onClick,
}) => {
  const classNames = ["note-card", className].join(" ");
  return (
    <div onClick={onClick} className={classNames}>
      <h2 className="note-card__title">{title}</h2>
      <p className="note-card__footer">
        {created_at} ⊛ {category}
      </p>
    </div>
  );
};

export default NoteCard;
