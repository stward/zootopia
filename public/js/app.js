$(document).ready(function() {
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

});
