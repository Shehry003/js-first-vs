const accountNo= "1234"
let accountEmail="sh2gmail.com"
/*  we not use var variables bcz its a global variables. if we change value 10 times
 then eveytime it can took everytime new vlaue */
var accountpass="4321"
accountcity="lahore"
// value is automatic undefined bcz we not initilize
let accountstate;
// accountNo="4321" //no allowed bcz we cant change const value

accountEmail="sh34gmail.com"
accountpass="1234"
accountcity="kasur"


console.table([accountEmail,accountNo,accountpass,accountstate,accountcity]);