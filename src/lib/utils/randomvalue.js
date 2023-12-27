function generateRandomHexString(length) {
	let result = '';
	const characters = '0123456789ABCDEF';
	const charactersLength = characters.length;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}

export const randomHexString = generateRandomHexString(16);
// console.log(randomHexString);
