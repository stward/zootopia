$(document).ready(function() {

  console.log("APPJS FOUND");

  function delAnimal(e) {
    e.preventDefault();
    var animalId = $(this).closest('li').attr('id')
    if(confirm("Are you sure you want to delete?")){
      $.ajax({
        url: '/api/animals/' + animalId,
        method: 'DELETE'
      }).done(function(data) {
        console.log(data, "ANIMAL DELETED");
        window.location = "/view";
      })
    }
  }

  $(".deleteAnimal").on('click', delAnimal);

  function editAnimal(e) {
    e.preventDefault();
    var animalId = window.location.pathname.slice(6);
    var data = {
      name: $("#animalName").val(),
      species: $("#animalSpecies").val()
    };
    console.log(data);
    $.ajax({
      url: '/api/animals/' + animalId,
      method: 'PUT',
      data: data,
    }).done(function(d){
      console.log(d, "SUCCESS EDITING ANIMAL")
    })
  }

  $("#submitEdit").on('click', editAnimal);

});
