const myForm = document.getElementById('myForm');
const myUl = document.querySelector('#list');

let petName = document.getElementById('exampleFormControlInput1');
let ownerName = document.getElementById('exampleFormControlInput2');
let species = document.getElementById('exampleFormControlInput3');
let breed = document.getElementById('exampleFormControlInput4');

let reset = () => {
	petName.value = '';
	ownerName.value = '';
	species.value = '';
	breed.value = '';
};

const pets = [];

// LA MIA CLASSE
class Data {
	constructor(_petName, _ownerName, _species, _breed) {
		this.petName = _petName;
		this.ownerName = _ownerName;
		this.species = _species;
		this.breed = _breed;
	}
	checkOwner(otherPets) {
		if (this.ownerName === otherPets.ownerName) {
			return console.log(true);
		} else {
			return console.log(false);
		}
	}
}

// Evento
myForm.addEventListener('submit', function (e) {
	e.preventDefault();

	let newPet = new Data(petName.value, ownerName.value, species.value, breed.value);
	pets.push(newPet);

	const myLi = document.createElement('li');
	pets.forEach((pet, i) => {
		const petName = pet.petName;
		const ownerName = pet.ownerName;
		const species = pet.species;
		const breed = pet.breed;
		myLi.innerHTML = `
    ${petName} ${ownerName} ${species} ${breed}`;
	});
	myUl.appendChild(myLi);

	// Creazione della lista
});
