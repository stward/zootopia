
function buttonDelete (id) {
  console.log(id);
  $.ajax({
    url: '/api/animals/' + id,
    method: 'DELETE'
  }).done(function (data) {
    console.log(data, 'animal deleted');
  });
}

function postButton() {
  var name = $('#name').val()
  var species = $('#species').val()
  var newAnimal = {name: name, species: species}
  $.ajax({
    url: '/api/animals',
    method: 'POST',
    data: newAnimal
  }).done(function (data) {
      console.log(data, 'created animal');
    });
  }

function updateButton(id) {
  var name = $('#Name').val()
  var species = $('#Species').val()
  $.ajax({
    url:'/api/animals/' + id,
    method: 'PUT',
    data: {name: name, species: species}
  }).done(function (data) {
    console.log(data, 'animal updated');
  });
}
