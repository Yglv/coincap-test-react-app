import Store from "@/store/Store";
import React from "react";

export const Context = React.createContext({});

interface State{
  store: Store
}
export const store = new Store()
export const StoreContext = React.createContext<State>({ store })