/**
 * Update Waktu Real-time
 */
function updateClock() {
    const now = new Date();
    
    // Ambil Jam, Menit, Detik
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    
    // Format 00 (tambah nol di depan jika < 10)
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    // Update ke DOM
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
    
    // Update Tanggal
    updateDate(now);
}

/**
 * Update Tanggal Format Indonesia
 */
function updateDate(now) {
    const days = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
    const months = [
        "JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", 
        "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"
    ];
    
    const dayName = days[now.getDay()];
    const dayDate = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    const dateString = `${dayName}, ${dayDate} ${monthName} ${year}`;
    document.getElementById("date-display").innerText = dateString;
}

/**
 * Fitur Ganti Warna Neon
 */
function changeColor(color) {
    // Hapus kelas tema sebelumnya
    document.body.classList.remove('theme-cyan', 'theme-green', 'theme-purple');
    
    // Tambah kelas tema baru
    document.body.classList.add(`theme-${color}`);
    
    // Update status aktif pada tombol
    const buttons = document.querySelectorAll('.btn-color');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.btn-color.${color}`).classList.add('active');
}

/**
 * Fitur Fullscreen
 */
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Jalankan updateClock setiap detik
setInterval(updateClock, 1000);

// Panggil sekali saat load agar tidak menunggu 1 detik pertama
updateClock();