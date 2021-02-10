const testingScope = escopo => {
	if (escopo) {
		let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
		ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
		console.log(ifScope);
	} else {
		const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
		console.log(elseScope);
	}
};
testingScope(true);

///////////////////////////////////////////////////////////////////////////////

const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const goodUse = 'ótimo, fui utilizada no escopo !';
const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
const testingScope2 = escopo => (escopo ? `${ifScope} ${goodUse}` : elseScope);
console.log(testingScope2(true));
