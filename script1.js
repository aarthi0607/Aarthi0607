const activities = [
    { name: "HTML Practice", desc: "Complete HTML basics", status: "Pending" },
    { name: "CSS Styling", desc: "Design a web page layout", status: "Pending" },
    { name: "JavaScript Basics", desc: "Learn functions and events", status: "Pending" },
    { name: "Mini Project", desc: "Build a small website", status: "Pending" }
];

function showHome() {
    document.getElementById("homeSection").style.display = "block";
    document.getElementById("activitySection").style.display = "none";
}

function showActivities() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("activitySection").style.display = "block";
    displayActivities();
}

function displayActivities() {
    let list = document.getElementById("activityList");
    list.innerHTML = "";

    activities.forEach((activity, index) => {
        list.innerHTML += `
            <div class="card">
                <h3>${activity.name}</h3>
                <p>${activity.desc}</p>
                <p>Status: 
                    <span class="${activity.status === 'Completed' ? 'completed' : 'pending'}">
                        ${activity.status}
                    </span>
                </p>
                <button onclick="markCompleted(${index})">Mark as Completed</button>
            </div>
        `;
    });

    updateProgress();
}

function markCompleted(index) {
    activities[index].status = "Completed";
    displayActivities();
}

function updateProgress() {
    let completedCount = activities.filter(a => a.status === "Completed").length;
    document.getElementById("progressSummary").innerText =
        completedCount + " out of " + activities.length + " activities completed";
}