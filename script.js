function addData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let event = document.getElementById("event").value;
    let mode = document.getElementById("mode").value;

    let table = document.getElementById("table");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = phone;
    row.insertCell(3).innerHTML = event;
    row.insertCell(4).innerHTML = mode;
}
window.onload = function() {
    let participants = JSON.parse(localStorage.getItem("participants")) || [];
    let table = document.getElementById("table");

    participants.forEach(p => {
        let row = table.insertRow();
        row.insertCell(0).innerHTML = p.name;
        row.insertCell(1).innerHTML = p.email;
        row.insertCell(2).innerHTML = p.phone;
        row.insertCell(3).innerHTML = p.event;
        row.insertCell(4).innerHTML = p.mode;
    });
};