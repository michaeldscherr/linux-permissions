export function transforms(toTransform){
	let toBinaryFromInt = () => {
		return Number(toTransform).toString(2);
	};
	let toIntFromBinary = () => {
		return parseInt(toTransform, 2);
	};
	return {
		toBinaryFromInt,
		toIntFromBinary
	};
}
