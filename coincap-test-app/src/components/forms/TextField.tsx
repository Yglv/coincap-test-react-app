import { ITextField } from "./TextField.types";

function TextField(props: ITextField) {
  return 
  <input className={props.className} disabled={props.disabled} onClick={props.onClick}>
    {props.children}
  </input>
}

export default TextField;