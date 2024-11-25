import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PFP from "../../public/images/pfp.png";

function AvatarComponent() {
	const imageUrl: string = PFP.src;
	return (
		<div className="flex-1 sm:flex-none flex items-center space-x-3">
			{/* ⚡ Avatar */}
			<Avatar>
				<AvatarImage src={imageUrl} />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			{/* ⚡ Name */}
			<h3 className="hidden sm:inline-block font-montserrat font-light text-[15px]">Bella Chao</h3>
		</div>
	);
}

export default AvatarComponent;
