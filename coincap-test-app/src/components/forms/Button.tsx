import { IButton } from "./Button.types";

function Button(props: IButton) {
  return 
  <button className={props.className} disabled={props.disabled} onClick={props.onClick}>
    {props.children}
  </button>
}

export default Button;