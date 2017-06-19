$(document).ready(function () {
  var personArray = [{name: 'Christine', yearsOfExperience: 4 }, {name: 'Chad', yearsOfExperience: 10}];
  var sum = 0;

  personArray.forEach(function (person) {
    sum += person.yearsOfExperience;

  $('#personTableBody').append(
    '<tr>' +
          '<td>' + person.name + '</td>' +
          '<td>' + person.yearsOfExperience + '</td>' +
          '</tr>'
        );
        $('#yearsOfLukesTime').text(sum);
      });

  $('form').on('submit', function(event){ // event listener on submitNewEmployee
    // declaring variables and retrieving values from input boxes
    event.preventDefault();

    var submissionArray = $(this).serializeArray();
    var newEmployeeObject = {};
  
    submissionArray.forEach(function(newPerson){
      newEmployeeObject[newPerson.name] = newPerson.value;

      document.getElementById('form').reset(); // resets form inputs upon submit

    });

    sum = parseFloat(sum) + parseFloat(newEmployeeObject.yearsOfExperience);  // converts a string to a number value
    


    $('#personTableBody').append( // appends the name and years of experience to the table
      '<tr>' +
      '<td>' + newEmployeeObject.name + '</td>' +
      '<td>' + newEmployeeObject.yearsOfExperience + '</td>' +
      '</tr>'
    );

    $('#yearsOfLukesTime').text(sum);
  });

});
