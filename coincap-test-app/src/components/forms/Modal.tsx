import { ReactElement } from "react";
import './Modal.styles.scss'
import { IModal } from "./Modal.types";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

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
      <div className="modal_main data-simplebar">    
        <SimpleBar style={{maxHeight: 400}}>
          {props.children}
        </SimpleBar>
      </div>
    </div>
  </div>)
}

export default Modal;