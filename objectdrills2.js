function makeStudentsReport(data) {
	return data.map(function(grades){
		return grades.name + ": " + grades.grade;
	});
}


-----------------------------------------------------------

function makeStudentsReport(data) {
	let results = [];
	for (i=0; i<data.length;i++) {
		let item = data[i];
	results.push(item.name + ": " + item.grade);
    }
    return results;
}

------------------------------------------------------------


var studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

function enrollInSummerSchool(students) {
	return students.map(function(enrollment){
		return {
			name: enrollment.name,
			status: 'In Summer school',
			course: enrollment.course,
		}
	});
}



-----------------------------------------------------




function findById(items, idNum) {
 return items.find(function(item){
 	return item.id===idNum;
 });
}


