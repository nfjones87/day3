let loaf = {
	flour: 300,
	water: 210,
	hydration: function(){
		return (this.water/this.flour)*100;
	}
}

console.log(loaf);

loaf.hydration();

-------------------------------------------------

const stuff = {
	foo: 1,
	bar: 2,
	fum: 3,
	quux: 4,
	spam: 5
};

for (let key in stuff) {
	console.log(key, stuff[key]);
}

---------------------------------------------------

const hobbit = {
	meals: ["breakfast", "second breakfast", "lunch", "tea", "dinner", "supper"]
}
console.log(hobbit.meals[3]);

--------------------------------------------------------

let array = [

{name: "Nick", job: "developer"},

{name: "Bob", job: "writer" },

{name: "carl", job: "cook"}

];

for (i=0;i<array.length;i++) {
	let employer = array[i]
	console.log(employer.name + " is the " + employer.job);
};

-------------------------------------

let array = [

{name: "Nick", job: "developer"},

{name: "Bob", job: "writer", boss: "Nick"},

{name: "carl", job: "cook", boss: "Nick"}

];

for (i=0;i<array.length;i++) {
	let employer = array[i]
	if (employer.boss === undefined) {
		console.log(employer.job + " " + employer.name + " doesn't report to anybody.");
	};
	else if {
	console.log(employer.job + " " + employer.name + " reports to " + employer.boss);
};
}

--------------------------------------------------------------

function decode(words){
    const cipher = {
        a: 2,
        b: 3,
        c: 4,
        d: 5  
    };
    
    const wordsArray = words.split(' ');
    const decodedChars = wordsArray.map(word => {
        let offset;
        if (cipher[word[0]]){
     offset = cipher[word[0]] - 1;
 }

        //return offset ? word[offset] : ' ';
    if (offset !== undefined){
            return word[offset];
        } else {
            return ' ';
        }
    }
    });
    
    return decodedChars.join('');
}

decode("craft block argon meter bells brown croon droop");

--------------------------------------------------------------------

function createCharacter (name, nickname, race, origin, attack, defense) {

	return {
	 name, nickname, race, origin, attack, defense,

	 describe () {
	 	console.log(`${name} is a ${race} from ${origin}`);
	 },

	  describe2 () {
	 	console.log(`${name} is a Hobbit`);
	 },

	  describe3 () {
	 	console.log(`${name} has high attack`);
	 },
	 
	 evaluateFight(character) {
	 	let dmgDealt = 0, dmgReceived = 0;

	 	if(this.attack > character.defense) {
	 		dmgDealt = this.attack - character.defense
	 	}

	 	if(this.defense < character.attack) {
	 		dmgReceived = character.attack - this.defense;
	 	}

	 	console.log(`Your opponent takes ${dmgDealt} damage and you receive ${dmgReceived} damage.`);


		 }

	};
}

// I just copy/pasted the below array block

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen U', 'Arwen', 'Half-Elf', 'Rivendell', 15, 20));

characters.find(function(hero){
	if(hero.nickname ==='aragorn'){
		hero.describe();
	}
});

	const onlyHobbits = characters.filter(function(char){
		if(char.race === 'Hobbit') {
			char.describe2();
		}
	});
	const onlyHighAttack = characters.filter(function(char){
		if(char.attack > 5) {
			char.describe3();
		}
	});


















