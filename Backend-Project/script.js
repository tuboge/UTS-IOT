// URL backend
const url = 'http://localhost:3000/data';

// Fungsi untuk mengambil data dari backend
async function fetchData() {
  try {
    // Kirim request GET ke backend
    const response = await fetch(url);
    
    // Parsing data JSON dari respons
    const data = await response.json();
    
    // Tampilkan data di browser
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Fungsi untuk menampilkan data JSON di halaman web
function displayData(data) {
  const outputDiv = document.getElementById('output');

  // Membuat tampilan JSON dalam format yang terbaca
  const jsonData = `
    <h2>Hasil Data JSON</h2>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;

  outputDiv.innerHTML = jsonData;
}

// Panggil fungsi fetchData saat halaman dimuat
fetchData();

