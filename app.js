const deliveries = [
  { id: 1, address: "123 Main St", status: "Pending" },
  { id: 2, address: "456 Oak Ave", status: "Pending" }
];

function login() {
  window.location.href = "deliveries.html";
}

if (document.getElementById("deliveryList")) {
  const list = document.getElementById("deliveryList");
  deliveries.forEach(d => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <strong>${d.address}</strong><br>
      Status: ${d.status}
    `;
    div.onclick = () => {
      localStorage.setItem("currentDelivery", JSON.stringify(d));
      window.location.href = "delivery.html";
    };
    list.appendChild(div);
  });
}

function saveDelivery() {
  alert("Delivery updated");
  window.location.href = "deliveries.html";
}

if (document.getElementById("address")) {
  const d = JSON.parse(localStorage.getItem("currentDelivery"));
  document.getElementById("address").innerText = d.address;
}
