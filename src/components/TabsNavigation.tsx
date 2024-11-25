"use client";

import {
	BoltIcon,
	BookmarkIcon,
	ClockIcon,
	Cog6ToothIcon,
	HomeIcon,
} from "@heroicons/react/24/outline";
import NavigationButton from "./NavigationButton";

function TabsNavigation() {
	return (
		<div
			className="fixed bottom-0 z-[1100] mr:bottom-10 left-[50%] -translate-x-[50%] bg-white
        flex lg:hidden items-center justify-between w-full mr:max-w-[350px] h-[58px]
        mr:rounded-[30px] px-5 mr:px-2 shadow-md border-[0.1px]">
			<NavigationButton href="/" Icon={HomeIcon} />
			<NavigationButton href="/explore" Icon={BoltIcon} />
			<NavigationButton href="/history" Icon={ClockIcon} />
			<NavigationButton href="/saved" Icon={BookmarkIcon} />
			<NavigationButton href="/setting" Icon={Cog6ToothIcon} />
		</div>
	);
}

export default TabsNavigation;
