import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchComponent() {
  return (
		<div className="hidden sm:flex flex-1 items-center space-x-3">
			<MagnifyingGlassIcon className="w-5 h-5" />
			<input
				className="font-montserrat outline-none text-[14px] bg-backgroundSecondary border-none w-full max-w-[400px]"
				placeholder="Search book name, author, edition..."
			/>
		</div>
	);
}

export default SearchComponent
