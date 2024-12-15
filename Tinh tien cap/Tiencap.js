function toggleConnectionsInput() {
  const customerType = document.getElementById("customerType").value;
  const connectionsDiv = document.getElementById("connectionsDiv");
  if (customerType === "business") {
    connectionsDiv.classList.remove("hidden");
  } else {
    connectionsDiv.classList.add("hidden");
    document.getElementById("connections").value = "";
  }
}

function calculateBill() {
  const customerType = document.getElementById("customerType").value;
  const premiumChannels = document.getElementById("premiumChannels").value * 1;
  const connections = document.getElementById("connections").value * 1;
  let bill = 0;

  if (customerType === "residential") {
    // Nhà dân
    const processingFee = 4.5;
    const basicServiceFee = 20.5;
    const premiumChannelFee = 7.5 * premiumChannels;

    bill = processingFee + basicServiceFee + premiumChannelFee;
  } else if (customerType === "business") {
    // Doanh nghiệp
    const processingFee = 15;
    let basicServiceFee = 75;
    const premiumChannelFee = 50 * premiumChannels;

    if (connections > 10) {
      basicServiceFee += (connections - 10) * 5;
    }

    bill = processingFee + basicServiceFee + premiumChannelFee;
  } else {
    alert("Vui lòng chọn loại khách hàng!");
    return;
  }

  document.getElementById("result").innerText = `Tổng tiền hóa đơn: $ ${bill
    .toFixed(2)
    .toLocaleString(3)}`;
}
