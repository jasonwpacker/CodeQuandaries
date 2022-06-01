var den = {"dollars":100, "quarters":25, "dimes":10, "nickels":5, "pennies":1};
document.getElementById("demo").onclick = function() {makeChange()};

function makeChange() {
    var ret = "";
    var dollars = document.getElementById("inputval").value;
    if (isNaN(dollars) || dollars < 0 || ((dollars * 100) % 1 > 0)) {
        ret = "Not a valid input " + ((dollars * 100) % 1);
    } else {
        var cents = 100*parseFloat(dollars);
        ret += `$ ${dollars}:<br>`;
        for (var denom in den) {
            var coinCount = parseInt(cents / den[denom]);
            cents = cents % den[denom];
            ret += `${denom}: ${coinCount}<br>`;
        }
    }
    document.getElementById("bodytext").innerHTML = ret;
}