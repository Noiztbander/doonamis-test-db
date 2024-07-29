import { Component, ReactNode } from "react";
import Image from "next/image";

import "./image-item-carousel.css";
import { ICarouselImage } from "..";
import { IAppContext } from "@/ui/lib/context/app-context/types";
import { runSetSelectedMedia } from "@/ui/lib/context/app-context/actions/runs";
import { AppContext } from "@/ui/lib/context/app-context/app-context";

export default class ImageItemCarousel extends Component<ICarouselImage> {
  static contextType = AppContext;

  render(): ReactNode {
    const context = this.context;
    const { dispatch } = context as unknown as IAppContext;

    return (
      <div className="imageCarousel_container">
        <div
          className="image_container"
          onClick={() => {
            const item = { ...this.props, id: this.props.id as number };
            dispatch(runSetSelectedMedia(item));
          }}>
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
