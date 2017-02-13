$(document).ready(function () {

  // $('#submitNewEmployee').on('click', function(){ // event listener on submitNewEmployee
  //   // declaring variables and retrieving values from input boxes
  //   var name = $('#name').val();
  //   var yearsOfExperience = $('#yearsOfExperience').val();



var personArray = [{name: 'Christine', yearsOfExperience: 4 }, {name: 'Chad', yearsOfExperience: 10}];

// personArray.forEach(function(person, years){
//   console.log(person.yearsOfExperience);
// });

var sum = 0;
personArray.forEach(function (person) {

    sum += person.yearsOfExperience;

    $('#personTableBody').append(
        '<tr>' +
          '<td>' + person.name + '</td>' +
          '<td>' + person.yearsOfExperience + '</td>' +
        '</tr>'
      );
$('#yearsOfExperience').text(sum);
  });

// });

});
