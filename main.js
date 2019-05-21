const baseURL = 'https://ghibliapi.herokuapp.com';
const filmURL = 'https://ghibliapi.herokuapp.com/films';
const movieList = document.querySelector('.movieList');

fetch(filmURL)
	.then(function(result){
		// console.log(result);
		return result.json();
	})
	.then(function(json){
		// console.log(json);
		displayResults(json);
	})

function displayResults(json) {
	let item = 1;
	json.forEach(val => {	
		
		let bgId = 'movie' + item;
		item++;
		let name = document.createElement('h2');
		let box = document.createElement('div');
		box.setAttribute('class', 'col-12 col-md-3 box');
		box.setAttribute('data-toggle', 'modal');
		box.setAttribute('data-target', '#modalDef');
		box.setAttribute('id', bgId)
		let year = document.createElement('p');

		
		name.innerText = val.title;
		year.innerText = 'release year: ' + val.release_date;
		box.appendChild(name);
		box.appendChild(year);
		movieList.appendChild(box);
		box.addEventListener('click', () => modalFiller(val, json));
	});
}

function modalFiller(val, json) {
	let modalTitle = document.getElementById('modalHead');
	let modalPara = document.getElementById('modalPar');
	json.forEach(movie => {
		if(val.title === movie.title){
			modalTitle.innerText = val.title;
			modalPara.innerText = val.description + '\n\n\n Rating: ' + val.rt_score;
			
			console.log(val.url);
		}
	})
}
