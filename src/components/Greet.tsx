import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";

function Greet() {
	return (
		<div className="space-y-5 p-3 sm:p-5 md:p-7 lg:p-9 md:pb-3 lg:pb-5 max-w-[560px]">
			<h1 className="font-cormorant text-[10vw] leading-[10vw] sm:text-[7vw] sm:leading-[7vw] md:text-[4vw] md:leading-[4vw] lg:text-[3vw] lg:leading-[3vw] xl:text-[2.5vw] xl:leading-[2.5vw]">
				Happy Reading, <br /> Harvey
			</h1>
			<p className="font-montserrat text-sm sm:text-[15px]">
				Wow! You&apos;ve delved deep into the wizarding world&apos;s secrets.
				Have Harry&apos;s parents died yet? Oops, looks like you&apos;re not
				there yet. Better get reading!
			</p>
			<Button className="bg-black font-montserrat text-white rounded-full font-light transition-all duration-200 ease-in-out hover:bg-black/80 px-6 py-3 text-sm sm:text-base md:text-[15px]">
				Start Reading <ArrowUpRightIcon className="inline-block" />
			</Button>
		</div>
	);
}

export default Greet;
