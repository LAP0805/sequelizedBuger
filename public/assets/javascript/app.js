$("#burgerSubmit").on("submit", function(event){
    event.preventDefault();
let newBurger = {
    burger_name: $("#addBurger").val().trim()
}
console.log("getting burger")
console.log(newBurger)
$.ajax("/api/burgers",{
    type: "POST",
    data: newBurger

}).then(function(){
    location.reload();
})
})

$(".devourButton").on("click", function(){
    let id = $(this).attr("id");
    let devouredBurger = {
        devoured: true
    }
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
    }).then(function(){
        location.reload();
    })
})