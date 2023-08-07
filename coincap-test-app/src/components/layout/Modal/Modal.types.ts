import { MouseEventHandler, ReactElement } from "react";

export interface IModal{
  title: string,
  children?: ReactElement,
  isActive?: boolean,
  onClose?: MouseEventHandler<HTMLSpanElement> | undefined
}