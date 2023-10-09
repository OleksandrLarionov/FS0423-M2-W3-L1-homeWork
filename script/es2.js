const myForm = document.getElementById("myForm");
const pets = [];
myForm.addEventListener("submit", function (e) {
	e.preventDefault();

	const petNameValue = document.getElementById(
		"exampleFormControlInput1"
	).value;
	const ownerNameValue = document.getElementById(
		"exampleFormControlInput2"
	).value;
	const speciesValue = document.getElementById(
		"exampleFormControlInput3"
	).value;
	const breedValue = document.getElementById("exampleFormControlInput4").value;

	// animalOwner(animal1, animal2) {
	// 	if ((animal1.petName && animal2.petName) === this.ownerName) {
	// 		console.log(true);
	// 	}
	// }

	const dataPet = {
		petName: petNameValue,
		ownerName: ownerNameValue,
		species: speciesValue,
		breed: breedValue,
	};

	pets.push(dataPet);
	console.log(pets);

	class Data {
		constructor(_petName, _ownerName, _species, _breed) {
			this.petName = _petName;
			this.ownerName = _ownerName;
			this.species = _species;
			this.breed = _breed;
		}
		sameOwner(animal1, animal2) {
			animal1 = pets[0].petName;
			animal2 = pets[1].petName;
			if ((animal1 && pets[0].ownerName) !== (animal2 && pets[1].ownerName)) {
				console.log("Hanno due padroni differenti", false);
			} else {
				console.log("Hanno lo stesso padrone", true);
			}
		}
	}

	for (let i = 0; i < pets.length; i++) {
		if (pets.length > 1) {
			const pet1 = new Data(
				pets[0].petName,
				pets[0].ownerName,
				pets[0].species,
				pets[0].breed
			);

			const pet2 = new Data(
				pets[1].petName,
				pets[1].ownerName,
				pets[1].species,
				pets[1].breed
			);
			pet1.sameOwner(pet1, pet2);
		}
	}
});
