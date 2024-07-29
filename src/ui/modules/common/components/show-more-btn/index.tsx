import { MOVIE_DB_PATHS } from "@/ui/constants";
import Link from "next/link";
import { Component, ReactNode } from "react";

interface IShowMoreBtnProps {
  id: number;
}

export default class ShowMoreBtn extends Component<IShowMoreBtnProps> {
  render(): ReactNode {
    return (
      <Link
        className="primary_btn"
        passHref={true}
        prefetch={true}
        key={this.props.id}
        scroll={true}
        href={`${MOVIE_DB_PATHS.TV_DETAIL}/${this.props.id}`}>
        More about
      </Link>
    );
  }
}
