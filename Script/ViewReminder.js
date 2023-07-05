const data = JSON.parse(localStorage.getItem("reminders"));
if (data===null){
    alert("No Reminder To View");
}
else
{
        data.map((reminder,index) => { 
         const table = document.getElementById("reminders");
         var row = table.insertRow();
         var date = row.insertCell();
         var subject = row.insertCell();
         var description = row.insertCell();
         var email = row.insertCell();
         var phone = row.insertCell();
         var isEnabled = row.insertCell();
         var isSelected = row.insertCell();
         isEnabled.innerHTML = reminder.isEnabled;
         phone.innerHTML = reminder.phone;
         email.innerHTML = reminder.email;
         description.innerHTML = reminder.description;
         subject.innerHTML = reminder.subject;
         date.innerHTML = reminder.date; 
         var x = document.createElement("INPUT");
         x.setAttribute("for",index)
        x.setAttribute("type", "radio");
        x.setAttribute("name","select");
        isSelected.appendChild(x);
    });
}
function selected(){
    var element = document.getElementsByName("select");
    var index = 0;
    var result = false;
    element.forEach(reminder => {
        if(reminder.checked === true){
            localStorage.setItem("selectedReminder",JSON.stringify(data[index]));
            result = true;
        }
        index++;
        });
        if(result===false){
    alert("Please Select A Reminder");
        return false;
        }
        return true;
}



function cancel() {
    window.open("HomePage.html");
}
function enable() {
var result =  selected();
if(result){

    window.open("EnableReminder.html");
}
}
function disable() {
    var result =  selected();
if(result){
    window.open("DisableReminder.html");
}}
function modify() {
    var result =  selected();
if(result){
    window.open("ModifyReminder.html");
}}
function remove() {
    var result =  selected();
if(result){
    window.open("DeleteReminder.html");
}}
