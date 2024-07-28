"use client";

import { Component } from "react";
import Link from "next/link";
import Image from "next/image";

import "./noizt-logo.css";
import { MOVIE_DB_PATHS } from "@/ui/constants";

export default class NoiztLogo extends Component {
  render() {
    return (
      <div className="noiztLogo_container">
        <Link
          passHref={true}
          prefetch={true}
          href={MOVIE_DB_PATHS.HOME}
          className="">
          <Image
            width={256}
            height={76}
            src="/images/logos/2024_logo_name.png"
            alt="noizt-logo"
            color="white"
          />
          <h1>| Movie Test</h1>
        </Link>
      </div>
    );
  }
}
