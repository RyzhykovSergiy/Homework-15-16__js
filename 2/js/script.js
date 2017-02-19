$(document).ready(function() {

	var Human = {
		name: 'Serg',
		age: '33',
		gender: 'Man',
		growth: '180 см',
		weight: '82 кг'
	};

	var Worker = {
		__proto__: Human,
		job: 'engineer',
		salary: '500',
		work: 'работать',
	};


	var Student = {
		__proto__: Human,
		study: 'NTU',
		scholarship: 'scholarship',
		watchTvSeries: 'смотреть сериалы'
	};

var Student1 = Student;
var Student2 = Student;


	function consoleMy(iop) {
		for (var key in iop) {
			console.log(key + ': ' + iop[key]);
		}
		console.log('\n');
	 }

consoleMy(Worker);
consoleMy(Student);
consoleMy(Student1);
consoleMy(Student2);


});
