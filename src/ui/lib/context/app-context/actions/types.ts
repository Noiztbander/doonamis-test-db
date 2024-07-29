import { ITvShow } from "@/core/movie-db/domain/tv-shows";
import {
  UPDATE_SELECTED_TAB,
  SET_SELECTED_MEDIA,
  SET_MODAL_VISIBILITY,
} from "./names";

export interface updateSelectedtab {
  type: typeof UPDATE_SELECTED_TAB;
  value: string | undefined;
}

export interface setSelectedMedia {
  type: typeof SET_SELECTED_MEDIA;
  value: ITvShow;
}

export interface setModalVisibility {
  type: typeof SET_MODAL_VISIBILITY;
  value: boolean;
}
