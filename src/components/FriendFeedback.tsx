import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StaticImageData } from "next/image";

interface Props {
	name: string;
	feedback: string;
	timestamp: string;
	avatar: string;
}

const FriendFeedback: React.FC<Props> = ({
	name,
	feedback,
	timestamp,
	avatar,
}) => {
	return (
		<div className="relative indicator flex space-x-4 px-3 sm:px-6 md:px-8 pb-6">
			<div className="w-2 h-2 mt-4 rounded-full bg-textTertiary" />
			<Avatar className="cursor-pointer transition-all duration-300 ease-in-out hover:opacity-60">
				<AvatarImage src={avatar} />
				<AvatarFallback>{name}</AvatarFallback>
			</Avatar>
			<div className="mt-2 space-y-3">
				<h3 className="font-montserrat font-medium cursor-pointer transition-all duration-300 ease-in-out hover:text-textTertiary">
					{name}
				</h3>
				<p className="font-montserrat italic text-[14px]">{feedback}</p>
				<div className="flex items-center justify-between">
					<p className="font-montserrat cursor-pointer text-primary line-through font-medium text-[13px]">
						Chapter Five: Dialog Alive
					</p>
					<p className="font-montserrat text-[13px] text-textTertiary">
						{timestamp}
					</p>
				</div>
			</div>
		</div>
	);
};
export default FriendFeedback;
