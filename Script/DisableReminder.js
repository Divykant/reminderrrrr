function cancel() {
    window.open("ViewReminder.html");
}
const reminders = JSON.parse(localStorage.getItem("reminders"));
const data = JSON.parse(localStorage.getItem("selectedReminder"));
document.getElementById("subject").innerHTML = data.subject;
document.getElementById("date").innerHTML = data.date;
document.getElementById("email").innerHTML = data.email;
document.getElementById("description").innerHTML = data.description;
document.getElementById("phone").innerHTML = data.phone;
document.getElementById("IsEnable").innerHTML = data.isEnabled;

function disable(e){
reminders.forEach(reminder => {
    console.log(JSON.stringify(reminder));
    if(JSON.stringify(reminder) ===JSON.stringify(data)){
        reminder.isEnabled = false;
    }});
data.isEnabled = false;
localStorage.setItem("reminders",JSON.stringify(reminders));
localStorage.setItem("selectedReminder",JSON.stringify(data));
alert("Reminder Disabled Sucessfully");
window.open("ViewReminder.html");
}
