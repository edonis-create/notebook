import "./LeftNav.scss";

import HorizontalLine from "../HorizontalLine/HorizontalLine";
import LeftNavHeader from "../LeftNavHeader/LeftNavHeader";
import NotesCardList from "../NotesCardList/NotesCardList";
import React from "react";
import { notesData } from "../../dummy-data/data";

interface ILeftNavProps {}

const LeftNav: React.FunctionComponent<ILeftNavProps> = (props) => {
  return (
    <div className="left-nav">
      <LeftNavHeader />
      <HorizontalLine />
      <NotesCardList notesData={notesData} />
    </div>
  );
};

export default LeftNav;
