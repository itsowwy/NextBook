import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AvatarComponent from "./Avatar";
import SearchComponent from "./SearchComponent";

function Header() {
	return (
		<header className="w-full pt-4 px-10 flex items-center">
			{/* ⚡ Search Bar */}
			<SearchComponent />
			{/* ⚡ User */}
			<AvatarComponent />
			{/* ⚡ Notification Button */}
			<div className="sm:pl-[3rem] space-x-5">
				<button className="inline-block sm:hidden">
					<MagnifyingGlassIcon className="w-6" />
				</button>
				<button>
					<BellIcon className="w-6" />
				</button>
			</div>
		</header>
	);
}

export default Header;
