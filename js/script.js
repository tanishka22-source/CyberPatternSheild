// Show popup
function showPopup() {
    document.getElementById('popup').style.display = 'block';
    console.log('Popup shown');
}

// Hide popup
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    console.log('Popup hidden');
}

// Analyze URL (Enhanced with Better Logic)
function analyzeURL() {
    const url = document.getElementById('urlInput').value;
    const result = document.getElementById('result');
    console.log('Analyzing URL:', url);

    // Define scam keywords for detection
    const scamKeywords = ['trial', 'recurring', 'free', 'win', 'urgent', 'limited', 'offer', 'discount', 'subscribe', 'click here'];
    const foundKeywords = scamKeywords.filter(keyword => url.toLowerCase().includes(keyword));

    let riskLevel = 'Low';
    let riskColor = '🟢';
    let warning = 'This URL appears safe, but always verify manually.';
    let tips = 'Tip: Check for HTTPS and avoid sharing personal info.';

    if (foundKeywords.length > 0) {
        if (foundKeywords.length >= 3) {
            riskLevel = 'High';
            riskColor = '🔴';
            warning = 'High risk detected! Possible scam or dark pattern.';
            tips = 'Tip: Do not enter payment details. Report to authorities.';
        } else {
            riskLevel = 'Medium';
            riskColor = '🟡';
            warning = 'Medium risk detected. Watch for hidden charges.';
            tips = 'Tip: Read terms carefully and cancel if needed.';
        }
    }

    // Simulate slight randomness for realism (e.g., vary based on URL length)
    if (url.length > 50) {
        riskLevel = riskLevel === 'Low' ? 'Medium' : riskLevel;
        warning += ' (Long URLs can hide redirects.)';
    }

    // Update the result div with dynamic content
    result.innerHTML = `
        <p>${riskColor} Risk Level: ${riskLevel}</p>
        <p>⚠️ Detected Terms: ${foundKeywords.length > 0 ? foundKeywords.join(', ') : 'None'}</p>
        <div class="warning">${warning}</div>
        <p>${tips}</p>
    `;
    result.style.display = 'block';
    console.log('Result shown:', riskLevel);
}