import { Dispatch, SetStateAction } from "react";
import { IInitialAppState } from "./app-provider-state";

export interface IAction {
  type: string;
  value: any;
}

export interface IAppContext {
  state: IInitialAppState;
  dispatch: Dispatch<SetStateAction<IAction>>;
}
