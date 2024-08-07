import { Component, ReactNode } from "react";
import Carousel from "react-multi-carousel";

import ImageItemCarousel from "./image-item";
import BasicTitle from "../title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiSlideshowLight } from "react-icons/pi";

import "./carousel.scss";

export interface ICarouselImage {
  name: string;
  src?: string;
  id?: number;
  overview?: string;
  popularity?: number;
  vote_count?: number;
  first_air_date?: string;
  backdrop_path?: string;
  showBtn?: boolean;
}

interface ICarouselTemplateProps {
  items: ICarouselImage[];
  title?: string;
  showBtn: boolean;
}

export default class BasicCarousel extends Component<ICarouselTemplateProps> {
  render(): ReactNode {
    if (this.props.items.length > 2) {
      return (
        <>
          {this.props.title && (
            <BasicTitle title={this.props.title} icon={<PiSlideshowLight />} />
          )}

          <Carousel
            additionalTransfrom={0}
            arrows={true}
            centerMode={true}
            containerClass="carousel_container"
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
              <div className="arrow_left primary_btn">
                <IoIosArrowBack />
              </div>
            }
            customRightArrow={
              <div className="arrow_right primary_btn">
                <IoIosArrowForward />
              </div>
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
            {this.props.items.map((props) => {
              return (
                <ImageItemCarousel
                  key={props.id}
                  {...props}
                  showBtn={this.props.showBtn}
                />
              );
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
          {this.props.items.map((props) => {
            return (
              <ImageItemCarousel
                key={props.id}
                {...props}
                showBtn={this.props.showBtn}
              />
            );
          })}
        </div>
      </>
    );
  }
}
