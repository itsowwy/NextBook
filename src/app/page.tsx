import BookCollection from "@/components/BookCollection";
import Books from "@/components/Books";
import Greet from "@/components/Greet";
import ReaderFriends from "@/components/ReaderFriends";
import RecentRead from "@/components/RecentRead";
import Schedule from "@/components/Schedule";

export default function Home() {
	return (
		<main className="flex">
			{/* ⚡ left */}
			<div className="flex-1 overflow-hidden">
				<Greet />
				<Books />
				<BookCollection />
				<BookCollection />
				<div className="cover"></div>
			</div>
			{/* ⚡ right */}
			<div className="max-w-[500px] hidden xl:inline-block">
				<RecentRead />
				<Schedule />
				<ReaderFriends />
			</div>
		</main>
	);
}
