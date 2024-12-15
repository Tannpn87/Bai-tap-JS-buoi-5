document.getElementById("submitButton").addEventListener("click", function () {
  const diemChuan = parseFloat(document.getElementById("diemChuan").value);
  const diemMon1 = parseFloat(document.getElementById("diemMon1").value);
  const diemMon2 = parseFloat(document.getElementById("diemMon2").value);
  const diemMon3 = parseFloat(document.getElementById("diemMon3").value);
  const khuVuc = document.getElementById("khuVuc").value.toUpperCase();
  const doiTuong = parseFloat(document.getElementById("doiTuong").value);
  const khuVucDiem = { A: 2, B: 1, C: 0.5, X: 0 };
  const doiTuongDiem = { 1: 2.5, 2: 1.5, 3: 1, 0: 0 };
  const diemUuTien = (khuVucDiem[khuVuc] || 0) + (doiTuongDiem[doiTuong] || 0);
  const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTien;
  let resultText = `Tổng điểm: ${tongDiem.toFixed(2)}. `;
  if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
    resultText += "Thí sinh đã đậu.";
  } else {
    resultText += "Thí sinh đã rớt.";
  }
  document.getElementById("result").innerText = resultText;
});
