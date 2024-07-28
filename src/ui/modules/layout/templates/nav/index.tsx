"use client";

import { Component } from "react";

import "./nav.css";
import NoiztLogo from "@/ui/modules/common/components/logos/noizt-logo";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav_container">
        <header>
          <NoiztLogo />
          <nav>
            <p>TV shows</p>
            <p>Movies</p>
            <p>Account</p>
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">shopping_bag</span>
          </nav>
        </header>
      </div>
    );
  }
}
