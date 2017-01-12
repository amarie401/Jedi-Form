var today = new Date();
var formattedDay = getFormattedDate(today)
document.getElementById('application-date').value = formattedDay;

function getFormattedDate(date) {
  var yyy = today.getFullYear().toString();
  var mm = (today.getMonth() +1).toString(); // getMonth method starts at 0 for January
  var dd = today.getDate().toString();

  //pads earlier day and months with a 0
  if (parseInt(dd) < 10) {
    dd = "0" + dd;
  }
  if (parseInt(mm) <10 ) {
    mm = "0" + mm;
  }
  return yyy + "-" + mm + "-" + dd;
}
