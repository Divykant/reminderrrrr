function cancel() {
    window.open("ViewReminder.html");
}
let reminders = JSON.parse(localStorage.getItem("reminders"));
const data = JSON.parse(localStorage.getItem("selectedReminder"));
document.getElementById("subject").value = data.subject;
document.getElementById("date").value = data.date;
document.getElementById("email").value = data.email;
document.getElementById("description").innerHTML = data.description;
document.getElementById("phone").value = data.phone;

function modify(){
reminders.forEach(function(reminder,index ){
    if(JSON.stringify(reminder) ===JSON.stringify(data)){
        reminders[index] = {
            date:document.getElementById("date").value,
					subject: document.getElementById("subject").value,
					description: document.getElementById("description").value,
					email: document.getElementById("email").value,
					phone: document.getElementById("phone").value,
                    isEnabled: data.isEnabled
        };
}});
let modifyData = data;
modifyData.subject = document.getElementById("subject").value;
modifyData.date= document.getElementById("date").value;
modifyData.email= document.getElementById("email").value;
modifyData.description= document.getElementById("description").value;
modifyData.phone= document.getElementById("phone").value;

localStorage.setItem("reminders",JSON.stringify(reminders));
localStorage.setItem("selectedReminder",JSON.stringify(modifyData));
alert("Reminder Modified Sucessfully");
window.open("ViewReminder.html");
}
