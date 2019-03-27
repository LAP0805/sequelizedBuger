let customerId;
$("#burgerSubmit").on("submit", function(event){
    console.log(customerId)
    event.preventDefault();
let newBurger = {
    burger_name: $("#addBurger").val().trim(),
    CustomerId: customerId
}
console.log("getting burger")
$.ajax("/api/burgers",{
    type: "POST",
    data: newBurger

}).then(function(results){
    console.log(results)
    location.reload();
})
})


//create customer//
$("#submitName").on("click", function(event){
    let name=$("#customerName").val().trim();
    event.preventDefault();
    let newCustomer = {
        name: name
    }
    $.ajax("/api/customers", {
        type: "POST",
        data: newCustomer
    }).then(function(results){
        customerId= results.id;
       $(".hideName").hide();
       $(".hideHello").show()
       $(".hideBurger").show();
       $("#nameHere").append(results.name)
        
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