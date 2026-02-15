// URL ANALYSIS
function analyzeURL() {
  const url = document.getElementById("urlInput").value.toLowerCase();
  const result = document.getElementById("urlResult");
  const riskBar = document.getElementById("riskBar");

  let risk = 0;

  const suspiciousWords = ["login", "verify", "bank", "secure", "update", "free", "win"];
  const suspiciousTLD = [".xyz", ".tk", ".ru", ".top", ".gq"];

  suspiciousWords.forEach(word => {
    if (url.includes(word)) risk += 10;
  });

  suspiciousTLD.forEach(tld => {
    if (url.includes(tld)) risk += 20;
  });

  if (url.startsWith("http://")) risk += 15;
  if (url.length > 50) risk += 10;
  if ((url.match(/\d/g) || []).length > 5) risk += 10;
  if (/\d+\.\d+\.\d+\.\d+/.test(url)) risk += 25;

  if (risk > 100) risk = 100;

  riskBar.style.width = risk + "%";

  if (risk <= 30) {
    riskBar.style.background = "green";
    result.innerHTML = "✅ Safe Website (Low Risk)";
  } else if (risk <= 60) {
    riskBar.style.background = "orange";
    result.innerHTML = "⚠️ Medium Risk Website";
  } else {
    riskBar.style.background = "red";
    result.innerHTML = "🚨 High Risk Website";
  }

  saveHistory("URL Scan: " + url + " (Risk: " + risk + ")");
}


// DARK PATTERN DETECTION
function analyzeDarkPattern() {
  const input = document.getElementById("adTextInput").value.toLowerCase();
  const result = document.getElementById("darkResult");

  let risk = 0;

  const urgency = ["limited time", "act now", "hurry", "last chance"];
  const subscription = ["auto-renew", "subscription", "monthly charge", "free trial"];
  const pressure = ["100% safe", "guaranteed", "risk free", "instant access"];

  urgency.forEach(word => {
    if (input.includes(word)) risk += 20;
  });

  subscription.forEach(word => {
    if (input.includes(word)) risk += 25;
  });

  pressure.forEach(word => {
    if (input.includes(word)) risk += 15;
  });

  if (input.includes("₹1") || input.includes("$1")) risk += 25;

  if (risk > 100) risk = 100;

  if (risk === 0) {
    result.innerHTML = "✅ No dark patterns detected.";
  } else if (risk <= 50) {
    result.innerHTML = "⚠️ Mild Manipulation Detected (Risk: " + risk + ")";
  } else {
    result.innerHTML = "🚨 Strong Dark Patterns Detected (Risk: " + risk + ")";
  }

  saveHistory("Dark Pattern Scan (Risk: " + risk + ")");
}
