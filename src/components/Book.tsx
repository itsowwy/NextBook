import Image, { StaticImageData } from "next/image";

function Book({
	id,
	title,
	poster,
}: {
	id: string;
	title: string;
	poster: string | StaticImageData;
}) {
	return (
		<div className="w-[130px] flex-[0_0_auto] space-y-5">
			<div className="relative cover w-full min-h-[200px] overflow-hidden">
				<Image src={poster} alt={`book${id}`} fill className="object-cover" />
			</div>
			<div>
				<h3 className="font-montserrat text-[13px] capitalize">{title}</h3>
			</div>
		</div>
	);
}

export default Book;
