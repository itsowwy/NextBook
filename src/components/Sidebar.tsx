"use client";

import React from "react";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
	BoltIcon,
	BookmarkIcon,
	ClockIcon,
	Cog6ToothIcon,
	HomeIcon,
} from "@heroicons/react/24/outline";
import NavigationButton from "./NavigationButton";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

function Sidebar() {
	return (
		<div className="hidden fixed top-0 left-0 w-[100px] xl:flex flex-col items-center justify-between py-4 h-screen">
			{/* ⚡ logo */}
			<div className="relative w-[60px] h-[60px]">
				<Link href="/">
					<Image src={Logo} alt="logo" objectFit="cover" fill />
				</Link>
			</div>
			{/* ⚡ Navigation */}
			<ul className="space-y-4">
				<NavigationButton href="/" Icon={HomeIcon} />
				<NavigationButton href="/explore" Icon={BoltIcon} />
				<NavigationButton href="/history" Icon={ClockIcon} />
				<NavigationButton href="/saved" Icon={BookmarkIcon} />
				<NavigationButton href="/setting" Icon={Cog6ToothIcon} />
			</ul>

			{/* ⚡ User */}
			<div className="bg-backgroundPrimary w-[2.8rem] h-[2.8rem] rounded-full flex items-center justify-center">
				<ArrowRightStartOnRectangleIcon className="w-7" />
			</div>
		</div>
	);
}

export default Sidebar;
