$(document).ready(function () {
  var personArray = [{name: 'Christine', yearsOfExperience: 4 }, {name: 'Chad', yearsOfExperience: 10}];

  $('#submitNewEmployee').on('click', function(){ // event listener on submitNewEmployee
    // declaring variables and retrieving values from input boxes
    var name = $('#name').val();
    var yearsOfExperience = parseInt($('#yearsOfExperience').val());
    personArray.push({name: name, yearsOfExperience: yearsOfExperience});

    var sum = 0;
    personArray.forEach(function (person) {

      sum += person.yearsOfExperience;

      $('#personTableBody').append(
        '<tr>' +
        '<td>' + person.name + '</td>' +
        '<td>' + person.yearsOfExperience + '</td>' +
        '</tr>'
      );

    });
    console.log(sum);
    $('#yearsOfLukesTime').text(sum);
    // var sum = 0;
    // personArray.forEach(function (person) {
    //
    //     sum += person.yearsOfExperience;
    //
    //     $('#personTableBody').append(
    //         '<tr>' +
    //           '<td>' + person.name + '</td>' +
    //           '<td>' + person.yearsOfExperience + '</td>' +
    //         '</tr>'
    //       );
    //     var totalYearsOfExperience = sum;
    // $('#yearsOfExperience').text(sum);
  });





  // personArray.forEach(function(person, years){
  //   console.log(person.yearsOfExperience);
  // });

  // var sum = 0;
  // personArray.forEach(function (person) {
  //
  //     sum += person.yearsOfExperience;
  //
  //     $('#personTableBody').append(
  //         '<tr>' +
  //           '<td>' + person.name + '</td>' +
  //           '<td>' + person.yearsOfExperience + '</td>' +
  //         '</tr>'
  //       );
  // $('#yearsOfExperience').text(sum);
  //   });

  // });

});
