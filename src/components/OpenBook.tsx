function OpenBook() {
	return (
		<div className="relative right-[180px] flex items-center justify-center gap-[10px]">
			{/* ⚡ Book */}
			<div className="flex perspective-1600 w-[330px] h-[250px] relative bg-[#f5f1e3] overflow-hidden rounded-[12px] shadow-[0px_20px_30px_rgba(0,0,0,0.5)]">
				{/* ⚡ Left Page */}
				<div className="relative w-1/2 h-full p-5 bg-white transform-style-3d origin-[center_left] -rotate-y-[6deg]">
					<canvas className="w-full h-full object-contain rounded-[8px]"></canvas>
				</div>
				{/* ⚡ Right Page */}
				<div className="relative w-1/2 h-full p-5 bg-white transform-style-3d origin-[right] rotate-y-[6deg]">
					<canvas className="w-full h-full object-contain radius-[8px]"></canvas>
				</div>
			</div>
		</div>
	);
}
export default OpenBook;
