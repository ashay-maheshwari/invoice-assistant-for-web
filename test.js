function stringToDate(_date,_format,_delimiter)
{
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            return formatedDate;
}


date1 = stringToDate("9/9/2024","mm/dd/yyyy","/")


//var timeDiff = Math.abs(date2.getTime() - date1.getTime());
//var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
//console.log(diffDays)

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
date_today = mm + "/" + dd + "/" + yyyy
console.log(date_today)

date2 = stringToDate(date_today,"mm/dd/yyyy","/")

var timeDiff  = Math.abs(date1.getTime() - date2.getTime())
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log(diffDays);


var compare_dates = function(date1,date2){
    if (date1>date2) return ("Date1 > Date2");
  else if (date1<date2) return ("Date2 > Date1");
  else return ("Date1 = Date2"); 
 }

console.log(compare_dates(date1, date2));
