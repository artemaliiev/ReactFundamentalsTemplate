export const getCourseDuration = (duration) => {
	const minutesInHour = 60;
	const hoursInCourse = Math.floor(duration / minutesInHour);
	const minutesInCourse = duration % minutesInHour;
	const hoursTitle = hoursInCourse === 1 ? 'hour' : 'hours';
	const checkTime = time => {
		return time < 10 ? `0${time}` : time;
	};

	return `${checkTime(hoursInCourse)}:${checkTime(minutesInCourse)} ${hoursTitle}`;
};
