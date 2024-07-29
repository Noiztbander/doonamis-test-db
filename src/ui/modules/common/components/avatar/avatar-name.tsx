import { Component, ReactNode } from "react";
import Image from "next/image";

import "./avatar-name.scss";

interface IAvatarProps {
  name: string;
  src?: string;
}

export default class AvatarName extends Component<IAvatarProps> {
  render(): ReactNode {
    return (
      <div className="avatarName_container">
        {this.props.src && (
          <div className="image_container">
            <Image
              width={600}
              height={900}
              src={this.props.src}
              alt={this.props.name}
              loading="lazy"
            />
          </div>
        )}

        <p>{this.props.name}</p>
      </div>
    );
  }
}
