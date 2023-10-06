import React from "react";
import "./Comments.css";
import Errorbox from "../Errorbox/Errorbox";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Comments() {
  return (
    <>
      <Errorbox msg="هیچ سفارشی یافت نشد" />
      <DeleteModal />
    </>
  );
}
