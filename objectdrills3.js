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





















