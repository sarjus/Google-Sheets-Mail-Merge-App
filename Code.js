function sendMail() {
  var name = 0;
  var email = 1;
  var userName = 6;

  var emailTemp = HtmlService.createTemplateFromFile("email");
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("students");

  var data = ws.getRange("A2:G"+ ws.getLastRow()).getValues();
  data.forEach(function(row){
    emailTemp.name = row[name];
    emailTemp.username = row[userName];
    var htmlMessage = emailTemp.evaluate().getContent();
    GmailApp.sendEmail(row[email],"Oracle Academy SJCET - Java Programing","Your email doesn't support HTML.",
    {name:"Oracle Academy Educator",htmlBody:htmlMessage})
  });

  

  


  
}
