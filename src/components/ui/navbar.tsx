"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "transition flex flex-col fixed w-full bg-none text-customCeleste z-40",
        scrollPosition > 0 && "bg-customBlack text-white"
      )}
    >
      <section className="flex flex-row px-16 py-2 justify-between items-center">
        <figure className="flex flex-col items-center">
          <h1 className="text-xl font-bold">JETOUR</h1>
          <p className="text-md font-normal">--Drive Your Future--</p>
        </figure>
        <div className="flex flex-row gap-10 text-xs ">
          <Link href={"/"}>MODELOS</Link>
          <Link href={"/"}>SOLICITA UNA COTIZACIÓN</Link>
          <Link href={"/"}>POSTVENTA</Link>
          <Link href={"/"}>NOSOTROS</Link>
          <Link href={"/"}>NOVEDADES</Link>
          <Link href={"/"}>BLOG</Link>
          <Link href={"/"}>CONTÁCTANOS</Link>
        </div>
      </section>
      <div className="bg-primaryBlue h-2" />
    </nav>
  );
}

export { NavBar };
