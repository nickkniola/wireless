function tax(planCost) {
    let planTax = planCost * 0.19;
    return planTax;
}

function total(planCost) {
    let planTax = planCost * 0.19;
    let planTotal = planTax + planCost;
    return planTotal;
}

// //If (alltextonpage1, 2 ,or 3) includes (searchedInput) then go to that page
const homePage = "Welcome to Wireless The only plan which offers free roaming around the world, so you can go anywhere, do anything, without the hassle of roaming fees. Choose from one of our three affordable plans for the future! Get A Free Phone With a purchase of a new plan. Switch Plans And get your first year free!";

const plansPage = "Find Your Plan Wireless is the only mobile provider to include free international roaming. You’ll also get unlimited texts and calls on all of our plans. Basic $29 / mo Free International Roaming 15GB LTE Hotspot per line Unlimited Texting, Calls SD Streaming Elite $39 / mo Free International Roaming 30GB LTE Hotspot per line Unlimited Texting, Calls HD Streaming Unlimited $49 / mo Free International Roaming 100GB LTE Hotspot per line Unlimited Texting, Calls Full HD Streaming";

const supportPage = "Wireless Support First Name Last Name Email Address What device are you using? Type of Issue Description of Issue";

// let searchInp = document.getElementById(".searchInput");
// let searchBu = document.getElementById(".searchButton")
// searchBu.addEventListener("click", checkInput);

// function checkInput() {
//     window.open("https://nickkniola.github.io/wireless/index.html");
//     if (homePage.includes("to")) {
//         window.location = "https://nickkniola.github.io/wireless/index.html";

// };
// };

$(function(){
    $(".searchButton").on('click', function(){
        window.location='http://www.google.com/';
    });

    $("#submitButton").click(function(){
        $("#thankModal").modal("show");
    });
    
    $("#buyBasic").click(function(){
        $(".planCost").html(29);
        $(".planTax").html(tax(29));
        $(".planTotal").html(total(29));
        $("#buyModal").modal("show");
    });
    
    $("#buyElite").click(function(){
        $(".planCost").html(39);
        $(".planTax").html(tax(39));
        $(".planTotal").html(total(39));
        $("#buyModal").modal("show");
    });

    $("#buyUnlimited").click(function(){
        $(".planCost").html(49);
        $(".planTax").html(tax(49));
        $(".planTotal").html(total(49));
        $("#buyModal").modal("show");
    });


});