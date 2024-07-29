"use client";

import { Component } from "react";

import NoiztLogo from "@/ui/modules/common/components/logos/noizt-logo";
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";

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
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaWhatsapp />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
          <p>©2024 | NOIZTBANDER | Creative developer</p>
        </footer>
      </div>
    );
  }
}
