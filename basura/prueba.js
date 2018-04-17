// variables
var input = document.querySelector('input');
//var people = ['john doe', 'maria', 'paul', 'george', 'jimmy'];
//var people = [];
//let datajson;
var results;




//window.onload = rellenarArray();
//console.log(datajson[0]["name"]);
console.log(datajson);
// functions
function autocomplete(val) {
   
  var people_return = [];

  for (i = 0; i < people.length; i++) {
    if (val === people[i].slice(0, val.length)) {
      people_return.push(people[i]);
    }
  }

  return people_return;
}

// events
input.onkeyup = function(e) {
  input_val = this.value; // updates the variable on each ocurrence

  if (input_val.length > 0) {
    var people_to_show = [];

    autocomplete_results = document.getElementById("autocomplete-results");
    autocomplete_results.innerHTML = '';
    people_to_show = autocomplete(input_val);
    
    for (i = 0; i < people_to_show.length; i++) {
      autocomplete_results.innerHTML += '<li>' + people_to_show[i] + '</li>';

    }
    autocomplete_results.style.display = 'block';
  } else {
    people_to_show = [];
    autocomplete_results.innerHTML = '';
  }
}