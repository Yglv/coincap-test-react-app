import { ReactElement, useContext } from "react";
import './Modal.styles.scss'
import { Context } from "@/context/context";
import { IModal } from "./Modal.types";


export function Modal(props: IModal):ReactElement {
  if (!props.isActive){
    return null
  }
  return (
  <div className="modal">
    <div className="modal_body">
      <div className="modal_header">
        <span className="modal_header_title">{props.title}</span>
        <span className="modal_header_close" onClick={() => props.onClose()}>&times;</span>
      </div>
      <div className="modal_main">
        {props.children}
      </div>
    </div>
  </div>)
}

export default Modal;