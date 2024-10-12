let aajKaDate = new Date()
// console.log(typeof aajKaDate); //object 

// console.log(aajKaDate); //2024-08-14T19:58:01.863Z
// console.log(aajKaDate.toString()) //Thu Aug 15 2024 01:28:32 GMT+0530 (India Standard Time)

// *********** IMP *********** 
// console.log(aajKaDate.toDateString); //[Function: toDateString]

// *********** *********** 
// console.log(aajKaDate.toISOString()) //2024-08-14T20:02:08.242Z
// console.log(aajKaDate.toLocaleDateString()) // 8/15/2024
// console.log(aajKaDate.toLocaleString()) // 8/15/2024, 1:32:08 AM
// console.log(aajKaDate.toLocaleTimeString()) // 1:32:08 AM
// console.log(aajKaDate.toJSON()) //2024-08-14T20:02:08.242Z

// *********** CUSTOM DATES *********** 
// let apnaDate = new Date(2028,0,13,5,8,13) //Here month starts from 0

// let apnaDate2 = new Date(2028,24,13,5,8,13) //Date Overflow : 24 months after Jan 2028, same for other values(ie days,time)

// console.log(apnaDate.toLocaleString()); //1/12/2024, 5:08:13 AM

// let apnaDatex = new Date("02-21-2028") //'2/21/2028, 12:00:00 AM'
// let apnaDateY = new Date("2024-02-26") //'2/26/2024, 5:30:00 AM'
// console.table([apnaDatex.toLocaleString(),apnaDateY.toLocaleString()])


let TimeStamp = Date.now()
// console.log(TimeStamp); //1723667562434 - time in milisec from 1 Jan 1970 to now

// ********* Date object to milisecond : 
// console.log(aajKaDate.getTime());

// ********* To convert to sec :
// console.log(Math.floor(aajKaDate.getTime()/1000));

// ****************** To get only day,month etc : 
console.log(aajKaDate.getMonth() + 1); //we use +1 in month cuz it starts from 0 

// console.log(aajKaDate.getDate());
// console.log(aajKaDate.getDay()); //etc for all


// *********** More Customization
aajKaDate.toLocaleString('default',{
    weekday: "long",
    hour:"2-digit",
})

