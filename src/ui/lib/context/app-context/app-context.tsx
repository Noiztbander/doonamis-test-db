"use client";

import {
  useReducer,
  useMemo,
  useContext,
  ReactNode,
  Component,
  createContext,
  useEffect,
} from "react";

import { initialAppState } from "./app-provider-state";
import { IAction, IAppContext } from "./types";
import reducerFactory from "../utils/reducerFactory";
import { AppReducerHandler } from "./app-reducer";
import { ITvShowEntity } from "@/core/movie-db/domain/tv-shows";

export const AppContext = createContext<IAppContext | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
  tvShows?: ITvShowEntity;
}

export const AppProvider = ({ children, tvShows }: AppProviderProps) => {
  const AppReducer = (state = initialAppState, action: IAction) =>
    reducerFactory(state, action, { ...AppReducerHandler });

  const [state, dispatch] = useReducer(AppReducer, {
    ...initialAppState,
    selectedMedia: tvShows?.results[0],
  });

  const contextValue = useMemo(() => {
    return { state, dispatch } as IAppContext;
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
