//My searchbar moves around depending how big the recommendation list is.

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const lower = str.toLowerCase();
	const match = fruit.filter(fruit => fruit.toLowerCase().includes(lower));
//WE CREATE THE LI ELEMENTS THAT WILL BE ADDED TO SUGGESTIONS HERE
	match.forEach(fruit => {
		const fruitComplete = document.createElement('li');
		fruitComplete.textContent = fruit;
		fruitComplete.addEventListener('mouseover', liHover);
		fruitComplete.addEventListener('click', useSuggestion);
		results.push(fruitComplete);
	});
	


	return results;
}

function searchHandler(e) {
	//WE SAVE THE RESULTS ARRAY OF W/E THE USER INPUTS IN A VARIABLE
	const searchResults = search(e.target.value);
	//PASS THE RESULTS AND USER INPUT AS ARGUMENTS
	showSuggestions(searchResults, e.target.value);
}
function showSuggestions(results, inputVal) {
	//CLEAR SUGGESTIONS LIST BEFORE UPDATING.
	suggestions.innerHTML = '';
	//ADD ELEMENTS TO SUGGESTIONS IF INPUT IS NOT EMPTY
	if(inputVal !== ''){
		results.forEach(results => {
			suggestions.appendChild(results);
		})
	}
	
}

function useSuggestion(e) {
	//ADDING VALUE OF CLICKED LI TO INPUT BAR
	input.value = e.target.textContent;
}

function liHover(event){
	const liHoverResult = event.target;

//CODE TO REMOVE THE CLASS FOR HIGHLIGHT WHEN MOUSING OVER NEW LI
	const allResults = document.querySelectorAll('.suggestions ul li');
	allResults.forEach(result => {
	  result.classList.remove('highlight');
	});

	liHoverResult.classList.add('highlight');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
