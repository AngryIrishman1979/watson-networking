
function toggle(element) {
  const content = element.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function ipLookup() {
  const input = document.getElementById("ipInput").value;
  document.getElementById("ipResult").innerText = "IP Lookup: " + input + " [simulated]";
}

function dnsLookup() {
  const input = document.getElementById("ipInput").value;
  document.getElementById("ipResult").innerText = "DNS Lookup: " + input + " [simulated]";
}

function whoisLookup() {
  const input = document.getElementById("ipInput").value;
  document.getElementById("ipResult").innerText = "WHOIS Info: Owner of " + input + " [simulated]";
}

function convertKB() {
  const kb = parseFloat(document.getElementById("kbInput").value);
  document.getElementById("convertResults").innerText = `${kb} KB = ${(kb / 1024).toFixed(2)} MB`;
}

function convertSpeed() {
  const mbps = parseFloat(document.getElementById("speedInput").value);
  document.getElementById("convertResults").innerText = `${mbps} Mbps = ${(mbps / 1000).toFixed(3)} Gbps`;
}

function convertTemp() {
  const c = parseFloat(document.getElementById("tempInput").value);
  const f = (c * 9/5 + 32).toFixed(1);
  const k = (c + 273.15).toFixed(1);
  document.getElementById("convertResults").innerText = `${c}°C = ${f}°F = ${k}K`;
}

function convertDistance() {
  const km = parseFloat(document.getElementById("kmInput").value);
  document.getElementById("convertResults").innerText = `${km} km = ${(km * 0.621371).toFixed(2)} miles`;
}

function convertWeight() {
  const kg = parseFloat(document.getElementById("kgInput").value);
  document.getElementById("convertResults").innerText = `${kg} kg = ${(kg * 2.20462).toFixed(2)} lbs`;
}

function calculateFullTax() {
  const income = parseFloat(document.getElementById("incomeInput").value);
  const province = document.getElementById("provinceInput").value;
  if (isNaN(income)) return alert("Enter valid income");

  let federal = 0;
  if (income <= 50197) federal = income * 0.15;
  else if (income <= 100392) federal = 50197 * 0.15 + (income - 50197) * 0.205;
  else if (income <= 155625) federal = 50197 * 0.15 + 50295 * 0.205 + (income - 100392) * 0.26;
  else if (income <= 221708) federal = 50197 * 0.15 + 50295 * 0.205 + 55233 * 0.26 + (income - 155625) * 0.29;
  else federal = 50197 * 0.15 + 50295 * 0.205 + 55233 * 0.26 + 66083 * 0.29 + (income - 221708) * 0.33;

  const provincialRates = {
    ON: 0.1316, QC: 0.15, BC: 0.105, AB: 0.1, MB: 0.108,
    SK: 0.105, NS: 0.1495, NB: 0.14, NL: 0.087, PE: 0.098,
    NT: 0.059, YT: 0.064, NU: 0.04
  };
  const provTax = income * (provincialRates[province] || 0.1);
  const totalTax = federal + provTax;

  document.getElementById("taxResult").innerText =
    `Federal: $${federal.toFixed(2)} | Provincial: $${provTax.toFixed(2)} | Total: $${totalTax.toFixed(2)}`;
}

function calculateBMI() {
  const height = parseFloat(document.getElementById("heightInput").value);
  const weight = parseFloat(document.getElementById("weightInput").value);
  if (!height || !weight) return alert("Enter height and weight.");
  const bmi = weight / ((height / 100) ** 2);
  let category = "Normal";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";
  document.getElementById("bmiResult").innerText = `BMI: ${bmi.toFixed(1)} (${category})`;
}
