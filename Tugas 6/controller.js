import users from "./data.js";

const index = () => {
    const userTableBody = document.getElementById("user-table-body");
    userTableBody.innerHTML = ""; 

    users.map((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.nama}</td>
            <td>${user.umur}</td>
            <td>${user.alamat}</td>
            <td><button class="delete-btn" onclick="destroy(${index})">Hapus</button></td>
        `;

        userTableBody.appendChild(row);
    });
};

const store = (event) => {
    event.preventDefault(); 

    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const alamat = document.getElementById("alamat").value;

    if (!nama || !umur || !alamat) {
        alert("Harap isi semua data!");
        return;
    }

    users.push({ nama, umur: parseInt(umur), alamat });

    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("alamat").value = "";

    index();
};

const destroy = (userIndex) => {
    users.splice(userIndex, 1); 
    index();
};

window.destroy = destroy; 

export { index, store };
