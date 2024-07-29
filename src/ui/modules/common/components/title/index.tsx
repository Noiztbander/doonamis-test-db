import { Component, ReactNode } from "react";

import "./title.scss";

interface IBasicTitleProps {
  title: string;
  icon: ReactNode;
}

export default class BasicTitle extends Component<IBasicTitleProps> {
  render(): ReactNode {
    return (
      <div className="basicTitle_container">
        <h1>{this.props.title}</h1>
        {this.props.icon && this.props.icon}
      </div>
    );
  }
}
