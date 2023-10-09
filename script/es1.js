class User {
	constructor(_fitstName, _lastName, _age, _location) {
		this.firstName = _fitstName;
		this.lastName = _lastName;
		this.age = _age;
		this.location = _location;
	}
	compareAge(user1, user2) {
		if (user1.age < user2.age) {
			const differenceOfAge = user2.age - user1.age;
			console.log(
				`${this.firstName} ${this.lastName} è più piccolo di ${differenceOfAge} anni`
			);
		} else if (user1.age > user2.age) {
			const differenceOfAge = user1.age - user2.age;
			console.log(
				`${this.firstName} ${this.lastName} è più grande di ${user2.firstName} ${differenceOfAge} anni`
			);
		} else {
			console.log(
				`${this.firstName} ${this.lastName} e ${user2.firstName} ${user2.lastName} hanno la stessa età`
			);
		}
	}
}

// dati di Alex
const alex = new User("Alex", "Larionov", "32", "Roma");

console.log(alex);

// dati di Peppa
const peppa = new User("Peppa", "Villager", "32", "Minecraft");

console.log(peppa);

// Compare
alex.compareAge(alex, peppa);
