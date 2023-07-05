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

function DeleteReminder(){
    const newData = reminders.filter(reminder => JSON.stringify(reminder) !== JSON.stringify(data));
localStorage.setItem("reminders",JSON.stringify(newData));
localStorage.removeItem("selectedReminder");
alert("Reminder Deleted Sucessfully");
window.open("ViewReminder.html");
}
