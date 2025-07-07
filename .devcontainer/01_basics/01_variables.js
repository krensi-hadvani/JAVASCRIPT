const accountId = 144513
let accountEmail = "krensi@google.com"
var accountPassword = "123456"
accountCity ="Keshod"
let accounState

//accountId = 2 not allowed
accountEmail = "hkrensi@gmail.com"
accountPassword = "456789"
accountCity = "Junagadh"



console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table ([accountId , accountEmail , accountPassword , accountCity, accounState])