import { ReactElement } from "react";

export interface IModal{
  title: string,
  isActive: boolean,
  children: ReactElement
  onClose(): void
}