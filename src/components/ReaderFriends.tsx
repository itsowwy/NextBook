import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import TitleBar from "./TitleBar";
import { friendsFeedbackData } from "../../data/data";
import FriendFeedback from "./FriendFeedback";

function ReaderFriends() {
	return (
		<div className="relative">
			<TitleBar title="Reader Friends" Icon={EllipsisHorizontalIcon} />
			<div className="">
				{friendsFeedbackData.map((data) => (
					<FriendFeedback
						key={data.id}
						name={data.name}
						avatar={data.avatar.src}
						feedback={data.feedback}
						timestamp={data.timestamp}
					/>
				))}
			</div>
		</div>
	);
}
export default ReaderFriends;
