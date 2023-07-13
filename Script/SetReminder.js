function cancel() {
  window.open("HomePage.html");
}
function submittt() {
  var test = document.getElementById("radio-yes");
  const newReminders = [
    {
      date: document.getElementById("date").value,
      subject: document.getElementById("subject").value,
      description: document.getElementById("description").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      isEnabled: test.checked,
    },
  ];
  const prevData = JSON.parse(localStorage.getItem("reminders"));
  if (prevData === null) {
    localStorage.setItem("reminders", JSON.stringify(newReminders));
    prevData.push(newReminders[0]);
    localStorage.setItem("reminders", JSON.stringify(prevData));
  }
  alert("Data Saved Sucessfully");
  window.open("HomePage.html");
}
