alert("Dashboard JS Loaded");
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.add("hidden");
  });
  document.getElementById(tabId).classList.remove("hidden");
}

function saveHistory(entry) {
  let history = JSON.parse(localStorage.getItem("scanHistory")) || [];
  history.push(entry);
  localStorage.setItem("scanHistory", JSON.stringify(history));
  displayHistory();
}

function displayHistory() {
  const historyList = document.getElementById("historyList");
  if (!historyList) return;

  historyList.innerHTML = "";
  let history = JSON.parse(localStorage.getItem("scanHistory")) || [];

  history.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

displayHistory();
