function calculateBill() {
  const name = document.getElementById("name").value;
  const SoKwSudung = parseInt(document.getElementById("consumedKw").value);
  let ChiPhi = 0;

  if (isNaN(SoKwSudung) || SoKwSudung < 0) {
    alert("Vui lòng nhập số kW hợp lệ!");
    return;
  }

  // Quy tắc tính tiền điện
  const rates = [
    { limit: 50, price: 500 },
    { limit: 50, price: 650 },
    { limit: 100, price: 850 },
    { limit: 150, price: 1100 },
    { limit: Infinity, price: 1300 },
  ];

  let SoKwchuaTinhtien = SoKwSudung;

  for (let rate of rates) {
    if (SoKwchuaTinhtien > 0) {
      const kw = Math.min(SoKwchuaTinhtien, rate.limit);
      ChiPhi += kw * rate.price;
      SoKwchuaTinhtien -= kw;
    }
  }

  document.getElementById(
    "result"
  ).innerText = `Khách hàng ${name} phải trả: ${ChiPhi.toLocaleString()} VNĐ`;
}
