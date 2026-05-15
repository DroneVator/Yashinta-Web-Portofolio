function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Tambahan: Menutup menu hamburger otomatis saat link diklik
document.querySelectorAll(".menu-links a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        
        // Cek jika menu sedang terbuka, maka tutup
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
            icon.classList.remove("open");
        }
    });
});