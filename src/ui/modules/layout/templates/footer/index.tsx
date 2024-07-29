"use client";

import { Component } from "react";

import NoiztLogo from "@/ui/modules/common/components/logos/noizt-logo";

import "./footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer_container">
        <footer>
          <NoiztLogo />
          <nav>
            <p>TV shows</p>
            <p>Movies</p>
            <p>Search</p>
            <p>Cart</p>
          </nav>
          <ul>
            <li>
              <span className="material-symbols-outlined">star</span>
            </li>
            <li>
              <span className="material-symbols-outlined">thumb_up</span>
            </li>
            <li>
              <span className="material-symbols-outlined">share</span>
            </li>
            <li>
              <span className="material-symbols-outlined">favorite</span>
            </li>
          </ul>
          <p>©2024 | NOIZTBANDER | Creative developer</p>
        </footer>
      </div>
    );
  }
}
