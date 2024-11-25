"use client";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import TitleBar from "./TitleBar";
import { data } from "../../data/data";
import Book from "./Book";

function Books() {
	return (
		<div>
			<TitleBar title="Popular Now" Icon={EllipsisHorizontalIcon} />
			<div className="flex py-[3rem] no-scrollBar overflow-x-auto space-x-[45px] px-4 sm:px-6 md:px-[50px]">
				{data?.map((book) => (
					<Book
						key={book.id}
						id={book.id}
						title={book.title}
						poster={book.poster}
					/>
				))}
			</div>
		</div>
	);
}

export default Books;
