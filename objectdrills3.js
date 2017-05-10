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


















