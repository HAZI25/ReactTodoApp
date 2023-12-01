// Format date to {mm/hh/ AM/AP dd/MM/yyyy}

export function formatDate(date: Date): string {
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	const formattedHours = hours % 12 || 12;
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();

	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	const formattedDate: string = `${formattedHours}:${formattedMinutes} ${ampm} ${day}/${month}/${year}`;

	return formattedDate;
}
