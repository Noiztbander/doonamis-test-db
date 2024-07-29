import { ITvShow } from "@/core/movie-db/domain/tv-shows";
import {
  SET_MODAL_VISIBILITY,
  SET_SELECTED_MEDIA,
  UPDATE_SELECTED_TAB,
} from "./names";
import {
  updateSelectedtab,
  setSelectedMedia,
  setModalVisibility,
} from "./types";

export const runUpdateSelectedTab = (
  selectedTab: string | undefined
): updateSelectedtab => ({
  type: UPDATE_SELECTED_TAB,
  value: selectedTab,
});

export const runSetSelectedMedia = (tvShow: ITvShow): setSelectedMedia => ({
  type: SET_SELECTED_MEDIA,
  value: tvShow,
});

export const runSetModalVisibility = (isOpen: boolean): setModalVisibility => ({
  type: SET_MODAL_VISIBILITY,
  value: isOpen,
});
