const longestWord = phrase => {
	const array = phrase.split(' ');
	let longest = array[0];
	for (let index = 0; index < array.length; index += 1) {
		if (array[index].length > longest.length) {
			longest = array[index];
		}
	}
	return longest;
};
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//////////////////////////////////////////////////////////////

const maiorPalavra = frase => frase.split(' ').sort((b, a) => a.length - b.length)[0];
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));
