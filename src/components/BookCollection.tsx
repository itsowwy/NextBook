import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import TitleBar from "./TitleBar";
import SideBook from "../../public/images/book9.png";
import Image from "next/image";

function BookCollection() {
	return (
		<>
			<TitleBar title="New Series Collection" Icon={EllipsisHorizontalIcon} />
			<div className="flex items-center px-3 sm:px-5 md:px-8">
				<div className="flex-1 flex items-center space-x-4">
					<div className="relative w-[80px] min-h-[130px]">
						<Image
							src={SideBook}
							alt="side-book"
							fill={true}
							className="object-cover"
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<h3 className="font-montserrat font-medium">
							Harry Potter Magic - New Collection
						</h3>
						<p className="italic font-[400] text-[13px] font-montserrat">
							8 chapters each vol
						</p>
					</div>
				</div>
				<div>
					<span className="font-montserrat font-bold">2 vol</span>
				</div>
			</div>
		</>
	);
}
export default BookCollection;
