"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import TitleBar from "./TitleBar";
import { Info, DateTime, Interval } from "luxon";
import { SetStateAction, useState } from "react";

interface DateShowPropd {
	date: DateTime<true> | null;
	weekDay: string;
}

function Schedule() {
	const today = DateTime.local();
	const [activeDay, setActiveDay] = useState(today);
	const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(
		today.startOf("month")
	);
	const weekDays = Info.weekdays("short");
	const daysOfMonth = Interval.fromDateTimes(
		firstDayOfActiveMonth.startOf("week"),
		firstDayOfActiveMonth.endOf("year").endOf("week")
	)
		.splitBy({ day: 1 })
		.map((day) => day.start);

	// ⚡ Each Date In Month
	const DateComponent = ({ date, weekDay }: DateShowPropd) => {
		const currentDate = today?.toISODate() === date?.toISODate();
		const isActive = activeDay?.toISODate() === date?.toISODate();
		return (
			<div
				onClick={() => setActiveDay(date)}
				className={`flex min-w-[60px] min-h-[80px] transition-colors rounded-[30px] flex-col items-center justify-center space-y-3 font-montserrat font-medium text-[14px] ${
					isActive ? " bg-backgroundPrimary " : "bg-transparent "
				}
						${currentDate ? "text-primary" : ""}
				`}>
				<h4 className={`font-montserrat`}>{weekDay}</h4>
				<p>{date?.day}</p>
			</div>
		);
	};

	return (
		<div className="">
			<TitleBar
				title="Schedule Reading"
				Icon={ChevronLeftIcon}
				SecondIcon={ChevronRightIcon}
			/>
			<div className="ml-[1rem] flex items-center px-3 sm:px-5 md:px-7 max-w-[500px] overflow-x-scroll overflow-y-hidden no-scrollBar">
				{daysOfMonth.map((dayOfMonth, dayOfMonthIndex) => (
					<DateComponent
						key={dayOfMonthIndex}
						date={dayOfMonth}
						weekDay={weekDays[dayOfMonth?.weekday - 1]}
					/>
				))}
			</div>
		</div>
	);
}
export default Schedule;
