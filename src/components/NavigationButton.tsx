import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ComponentType } from "react";

function NavigationButton({
	href,
	Icon,
}: {
	href: string;
	Icon: ComponentType<ComponentProps<"svg">>;
}) {
	const pathName = usePathname();
	const isActive = pathName === href;
	return (
		<li
			className={`flex items-center justify-center w-[2.8rem] h-[2.8rem] rounded-full transition-all ease-in-out duration-200 ${
				isActive ? 'text-white bg-primary' : 'text-black bg-transparent'
			}`}>
			<Link href={href}>
				<Icon className="w-7" />
			</Link>
		</li>
	);
}

export default NavigationButton;
