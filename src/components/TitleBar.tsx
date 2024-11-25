import { ComponentProps, ComponentType } from "react";

function TitleBar({
	title,
	Icon,
	SecondIcon,
}: {
	title: string;
	Icon: ComponentType<ComponentProps<"svg">>;
	SecondIcon?: ComponentType<ComponentProps<"svg">>;
}) {
	return (
		<div className="flex items-center justify-between p-4 sm:p-6 md:p-7">
			<div className="flex-1">
				<h3 className="text-[20px] font-cormorant font-semibold sm:text-xl md:text-2xl">
					{title}
				</h3>
			</div>
			<div className="ml-4 flex items-center space-x-4">
				<Icon className="w-8" />
				{SecondIcon && <SecondIcon className="w-8" />}
			</div>
		</div>
	);
}
export default TitleBar;
