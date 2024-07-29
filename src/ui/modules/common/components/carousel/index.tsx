import { Component, ReactNode } from "react";
import Carousel from "react-multi-carousel";

import "./carousel.css";
import ImageItemCarousel from "./image-item";
import BasicTitle from "../title";

export interface ICarouselImage {
  name: string;
  src?: string;
  id?: number;
}

interface ICarouselTemplateProps {
  items: ICarouselImage[];
  title?: string;
}

export default class BasicCarousel extends Component<ICarouselTemplateProps> {
  render(): ReactNode {
    if (this.props.items.length > 2) {
      return (
        <>
          {this.props.title && (
            <BasicTitle
              title={this.props.title}
              icon={
                <span className="material-symbols-outlined">width_normal</span>
              }
            />
          )}

          <Carousel
            additionalTransfrom={0}
            arrows={true}
            centerMode={true}
            containerClass="carousel_container"
            dotListClass="carousel_dots"
            draggable={false}
            focusOnSelect={false}
            infinite={true}
            itemClass="carousel_item"
            keyBoardControl={false}
            minimumTouchDrag={0}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
            customLeftArrow={
              <span className="material-symbols-outlined arrow_left primary_btn">
                arrow_left
              </span>
            }
            customRightArrow={
              <span className="material-symbols-outlined arrow_right primary_btn">
                arrow_right
              </span>
            }
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 2000,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 1000,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 2000,
                  min: 1000,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay={false}
            showDots={false}
            slidesToSlide={1}>
            {this.props.items.map(({ name, src, id }) => {
              return <ImageItemCarousel key={id} src={src} name={name} />;
            })}
          </Carousel>
        </>
      );
    }

    return (
      <>
        {this.props.title && (
          <BasicTitle
            title="Seasons:"
            icon={
              <span className="material-symbols-outlined">width_normal</span>
            }
          />
        )}
        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.props.items.map(({ name, src, id }) => {
            return <ImageItemCarousel key={id} src={src} name={name} />;
          })}
        </div>
      </>
    );
  }
}
