"use client";

import { NavbarSimple } from "./nav-bar";
import { MegaMenuWithHover } from "./nav-links";

export function Header() {
	return (
		<>
			<NavbarSimple></NavbarSimple>
			<MegaMenuWithHover></MegaMenuWithHover>
		</>
	);
}
