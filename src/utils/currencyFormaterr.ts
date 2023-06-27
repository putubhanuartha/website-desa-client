function formatCurrency(number: number): string {
	// Convert the number to a string and remove any existing formatting
	let formattedNumber: string = String(number).replace(/\D/g, "");

	// Split the number into two parts: the whole number and the decimal part
	let wholeNumber = formattedNumber.slice(0, -2);
	let decimalPart = formattedNumber.slice(-2);

	// Add thousands separators to the whole number part
	wholeNumber = wholeNumber.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

	// Combine the whole number and decimal part with the currency symbol
	formattedNumber = "Rp " + wholeNumber + "." + decimalPart;

	return formattedNumber;
}
export default formatCurrency;

