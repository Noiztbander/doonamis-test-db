"use client";

import { Component } from "react";

import NoiztLogo from "@/ui/modules/common/components/logos/noizt-logo";
import AvatarName from "@/ui/modules/common/components/avatar/avatar-name";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

import "./nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav_container">
        <header>
          <NoiztLogo />
          <nav>
            <p>TV shows</p>
            <p>Movies</p>
            <AvatarName
              name="Erick N"
              src="/images/profile/profile_picture.png"
            />
            <FaSearch />
            <FaShoppingBag />
          </nav>
        </header>
      </div>
    );
  }
}
