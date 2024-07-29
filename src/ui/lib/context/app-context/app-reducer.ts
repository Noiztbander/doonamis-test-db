import {
  SET_MODAL_VISIBILITY,
  SET_SELECTED_MEDIA,
  UPDATE_SELECTED_TAB,
} from "./actions/names";
import {
  setModalVisibility,
  setSelectedMedia,
  updateSelectedtab,
} from "./actions/types";
import { IInitialAppState as State } from "./app-provider-state";

export const AppReducerHandler = {
  [UPDATE_SELECTED_TAB]: (state: State, action: updateSelectedtab): State => ({
    ...state,
    selectedTab: action.value,
  }),
  [SET_SELECTED_MEDIA]: (state: State, action: setSelectedMedia): State => ({
    ...state,
    selectedMedia: action.value,
  }),
  [SET_MODAL_VISIBILITY]: (
    state: State,
    action: setModalVisibility
  ): State => ({
    ...state,
    isOpen: action.value,
  }),
};
