import { ReactElement, useContext } from "react";
import './Modal.styles.scss'
import { IModal } from "../layout/Modal/Modal.types";
import { Context } from "@/context/context";


export function Modal(props: IModal):ReactElement {
  const { setIsActive } = useContext(Context);
  if (!props.isActive){
    return null
  }
  return (
  <div className="modal">
    <div className="modal_body">
      <div className="modal_header">
        <span className="modal_header_title">{props.title}</span>
        <span className="modal_header_close" onClick={() => setIsActive(false)}>&times;</span>
      </div>
      <div className="modal_main">
        {props.children}
      </div>
    </div>
  </div>)
}

export default Modal;