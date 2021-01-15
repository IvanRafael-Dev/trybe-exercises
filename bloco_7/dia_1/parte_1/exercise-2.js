const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function orderNumbers(array) {
	for (let i = 1; i < array.length; i += 1) {
		for (let j = 0; j < array.length; j += 1) {
			if(array[j] > array[i]) {
				let aux = array[i];
				array[i] = array[j];
				array[j] = aux;
			}
		}
	}
	return array;
}

console.log(orderNumbers(oddsAndEvens));

/////////////////////////////////////////////////////////////////

const numberSort = array => array.sort((a, b) => a - b);
console.log(numberSort(oddsAndEvens))