$(document).ready(function () {
  // var personArray = [{name: 'Christine', yearsOfExperience: 4 }, {name: 'Chad', yearsOfExperience: 10}];
  var sum = 0;
  $('form').on('submit', function(event){ // event listener on submitNewEmployee
    // declaring variables and retrieving values from input boxes
    event.preventDefault();

    var submissionArray = $(this).serializeArray();
    var newEmployeeObject = {};
    // console.log(sum);

    submissionArray.forEach(function(inputFieldObject){
      newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;

    });

    sum = parseFloat(sum) + parseFloat(newEmployeeObject.yearsOfExperience);

    $('#personTableBody').append(
      '<tr>' +
      '<td>' + newEmployeeObject.name + '</td>' +
      '<td>' + newEmployeeObject.yearsOfExperience + '</td>' +
      '</tr>'
    );

    $('#yearsOfLukesTime').text(sum);
  });

});
