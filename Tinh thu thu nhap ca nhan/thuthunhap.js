function calculateTax() {
  const income = parseFloat(document.getElementById("income").value);
  const dependents = parseInt(document.getElementById("dependents").value) || 0;
  const name = document.getElementById("name").value;

  // Kiểm tra dữ liệu đầu vào
  if (isNaN(income) || income <= 0) {
    alert("Vui lòng nhập tổng thu nhập hợp lệ!");
    return;
  }

  // Tính thu nhập chịu thuế
  const taxableIncome = income - 4 - dependents * 1.6;

  // Biểu thuế suất
  let tax = 0;
  if (taxableIncome > 0) {
    if (taxableIncome <= 60) {
      tax = taxableIncome * 0.05;
    } else if (taxableIncome <= 120) {
      tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 210) {
      tax = taxableIncome * 0.15;
    } else if (taxableIncome <= 384) {
      tax = taxableIncome * 0.2;
    } else if (taxableIncome <= 624) {
      tax = taxableIncome * 0.25;
    } else if (taxableIncome <= 960) {
      tax = taxableIncome * 0.3;
    } else {
      tax = taxableIncome - 960 * 0.35;
    }
  }

  // Hiển thị kết quả
  document.getElementById(
    "result"
  ).innerText = `Thu nhập sau thuế là ${taxableIncome.toFixed(2)} triệu VNĐ`;
}
