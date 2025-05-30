function ipLookup() {
  const input = document.getElementById("ipInput").value;
  if (!input) return alert("Please enter an IP or domain.");
  document.getElementById("ipResult").innerText = "Simulated result for: " + input;
}

function convertKB() {
  const kb = parseFloat(document.getElementById("kbInput").value);
  if (isNaN(kb)) return alert("Enter a valid number");
  const mb = kb / 1024;
  document.getElementById("kbResult").innerText = kb + " KB = " + mb.toFixed(2) + " MB";
}

function calculateTax() {
  const income = parseFloat(document.getElementById("incomeInput").value);
  if (isNaN(income)) return alert("Enter a valid income");
  let tax = 0;
  if (income <= 50197) tax = income * 0.15;
  else if (income <= 100392) tax = 50197 * 0.15 + (income - 50197) * 0.205;
  else if (income <= 155625) tax = 50197 * 0.15 + 50295 * 0.205 + (income - 100392) * 0.26;
  else if (income <= 221708) tax = 50197 * 0.15 + 50295 * 0.205 + 55233 * 0.26 + (income - 155625) * 0.29;
  else tax = 50197 * 0.15 + 50295 * 0.205 + 55233 * 0.26 + 66083 * 0.29 + (income - 221708) * 0.33;
  document.getElementById("taxResult").innerText = "Estimated Federal Tax: $" + tax.toFixed(2);
}

function calculateBMI() {
  const height = parseFloat(document.getElementById("heightInput").value);
  const weight = parseFloat(document.getElementById("weightInput").value);
  if (isNaN(height) || isNaN(weight)) return alert("Enter valid height and weight.");
  const bmi = weight / ((height / 100) ** 2);
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";
  document.getElementById("bmiResult").innerText = "BMI: " + bmi.toFixed(1) + " (" + category + ")";
}
