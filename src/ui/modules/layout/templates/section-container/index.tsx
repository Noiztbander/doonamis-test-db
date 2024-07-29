import { Component, ReactNode } from "react";

import "./section-container.scss";

export default class SectionContainer extends Component<{
  children: ReactNode;
  background?: ReactNode;
}> {
  render() {
    return (
      <section className="section_ontainer">
        <div className="row_container">{this.props.children}</div>
        {this.props.background}
      </section>
    );
  }
}
