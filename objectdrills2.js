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


-------------------------------------------------------


function validateKeys(object, expectedKeys) {
  
  // if there's not the same number of object keys
  // and expected keys, then we know there are missing or
  // extra keys, so return false
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  
  // we iterate over each expected key and verify that
  // it's found in `object`.
  for (var i; i<expectedKeys.length; i++) {
    if (Object.keys(object).find(function(key) {
      return key !== expectedKeys[i];
    })) {
      return false;
    }
  }
  // if we get to this point in our code, the keys are valid
  // so we return `true`
  return true;
}


-------------------------------------------------------------

function makeToDos(owner, toDos) {
  return {
    owner: owner,
    toDos: toDos,
    generateHtml: function() {
      var html = '<ul>';
      this.toDos.forEach(function(todo) {
        html+= '<li>' + todo + '</li>';
      });
      return html + '</ul>';
    }
  }
}


------------------------------------------------------------



