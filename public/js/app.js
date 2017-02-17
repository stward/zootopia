function buttonPost() {
  var name = $('#name').val()
  var species = $('#species').val()
  var newAnimal = {name: name, species, species}
  $.ajax({
    url: '/api/animals',
    method: 'POST',
    data: newAnimal
  }).done(function() {
    console.log('new animal posted');
  })
}
function buttonDelete(id) {
  $.ajax({
    url: '/api/animals/' + id,
    method: 'DELETE'
  }).done(function(data) {
    console.log('deleted animal with id: ' + id);
  })
}
function buttonUpdate(id) {
  var name = $('#name').val()
  var species = $('#species').val()
  var updateAnimal = {name: name, species: species}
  $.ajax({
    url: '/api/animals/' + id,
    method: 'PUT',
    data: updateAnimal
  }).done(function(data) {
    console.log('updated animal with id: ' + id);
  })
}
