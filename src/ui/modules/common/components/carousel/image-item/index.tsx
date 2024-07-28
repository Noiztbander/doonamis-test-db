import { Component, ReactNode } from "react";
import Image from "next/image";

import "./image-item-carousel.css";

interface IImageItemCarouselprops {
  name: string;
  src?: string;
}

export default class ImageItemCarousel extends Component<IImageItemCarouselprops> {
  render(): ReactNode {
    return (
      <div className="imageCarousel_container">
        <div className="image_container">
          {this.props.src ? (
            <Image
              width={600}
              height={900}
              src={this.props.src}
              alt={this.props.name}
            />
          ) : (
            <div
              style={{
                backgroundColor: "white",
                backgroundImage:
                  "radial-gradient(rgb(60, 60, 60) 2px, transparent 2px), radial-gradient(rgb(60, 60, 60) 2px, transparent 2px)",
                backgroundSize: "13px 13px",
                backgroundPosition: "0 0, 6.5px 6.5px",
                width: "300px",
                position: "absolute",
                aspectRatio: "auto 600 / 900",
              }}
            />
          )}
        </div>

        <p>{this.props.name}</p>
      </div>
    );
  }
}
