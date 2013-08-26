$(document).ready(function() {    

	COIAdmin = [
		PD = {
			title: "Program Director",
			firstName: "Brandon",
			lastName: "Miller",
			age: 25,
			yearsOfStaff: 10,
			lastDepartment: "Scoucraft"
			
		},

		CD = {
			title: "Camp Director",
			firstName: "Brad",
			lastName: "Walbridge",
			age: 35,
			yearsOfStaff: 18,
			lastDepartment: "Range"

		},

		APD = {
			title: "Assistant Program Director",
			firstName: "Paul",
			lastName: "Best",
			age: 25,
			yearsOfStaff: 10,
			lastDepartment: "CDD",
		},

		Comm = {
			title: "Commissioner",
			firstName: "Patrick",
			lastName: "Buchanan",
			age: 20,
			yearsOfStaff: 7,
			lastDepartment: "Handicraft",
		},

		MO = {
			title: "Medical Officer",
			firstName: "David",
			lastName: "Andrews",
			age: 22,
			yearsOfStaff: 3,
			lastDepartment: "First Aid",
		},

		Ranger = {
			title: "Ranger",
			firstName: "James",
			lastName: "Holscher",
			age: 28,
			yearsOfStaff: 4,
			lastDepartment: "Ranger",
		}

	]


	COIAdmin.forEach (function(item) {
		
		document.write ('Your ' + item.title + ' is ' + item.firstName + ' ' + item.lastName + '. They are ' + item.age + ' years old and have ' + item.yearsOfStaff + ' prior years of experience.  They last worked in the ' + item.lastDepartment + ' department. <BR>');
		document.write ('<BR>');
		console.log(item.age);

		
	})

})