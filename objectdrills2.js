function makeStudentsReport(data) {
	return data.map(function(grades){
		return grades.name + ": " + grades.grade;
	});
}


function makeStudentsReport(data) {
	let results = [];
	for (i=0; i<data.length;i++) {
		let item = data[i];
	results.push(item.name + ": " + item.grade);
  }
return results;
}

