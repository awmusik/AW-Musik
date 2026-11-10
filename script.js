const JIOSAAVN_BASE_URL = "https://c.saavncdn.com/";

const awReleases = [
    { title: "Life 3: Rise Again", artist: "Anup Wasave", label: "AW Musik", coverPath: "674/Life-3-Rise-Again-Unknown-2026-20260417135222-500x500.jpg" },
    { title: "Pahilyandach", artist: "Anup Wasave", label: "AW Musik", coverPath: "364/Pahilyandach-Marathi-2026-20260301171753-500x500.jpg" },
    { title: "Pehli Pehli Baar", artist: "Anup Wasave", label: "AW Musik", coverPath: "445/Pehli-Pehli-Baar-Hindi-2025-20251012183819-500x500.jpg" },
    { title: "Energetic Embrace 3", artist: "Anup Wasave & Karan Art DMT", label: "AW Musik", coverPath: "250/Energetic-Embrace-3-Unknown-2025-20250506213758-500x500.jpg" }
];

const clientReleases = [
    { title: "Kon Halave Limbadi", artist: "Sanskar Balas", label: "Sanskar.b Music", coverPath: "620/Kon-Halave-Limbadi-Gujarati-2026-20260915203801-500x500.jpg" },
    { title: "Raam Dhun", artist: "Sanskar Balas", label: "Sanskar.b Music", coverPath: "997/Raam-Dhun-Gujarati-2026-20260612001409-500x500.jpg" },
    { title: "Mera Re Sam Manojee", artist: "Sanskar Balas", label: "Sanskar.b Music", coverPath: "672/Mara-Re-Sam-Manojee-Unknown-2026-20260405065952-500x500.jpg" },
    { title: "Halat", artist: "Jasraj Gill", label: "78 Recordss", coverPath: "385/Halat-Punjabi-2025-20260310095133-500x500.jpg" }
];

function renderReleases() {
    const awGrid = document.getElementById('awReleaseGrid');
    const clientGrid = document.getElementById('clientReleaseGrid');
    
    if (awGrid) {
        let html = '';
        awReleases.forEach(rel => {
            html += `
                <div class="release-card">
                    <img src="${JIOSAAVN_BASE_URL + rel.coverPath}" alt="${rel.title}" class="release-cover">
                    <div class="release-info">
                        <div class="release-title">${rel.title}</div>
                        <div class="release-artist">${rel.artist}</div>
                        <div class="release-label-badge">${rel.label}</div>
                    </div>
                </div>
            `;
        });
        awGrid.innerHTML = html;
    }

    if (clientGrid) {
        let html = '';
        clientReleases.forEach(rel => {
            html += `
                <div class="release-card">
                    <img src="${JIOSAAVN_BASE_URL + rel.coverPath}" alt="${rel.title}" class="release-cover">
                    <div class="release-info">
                        <div class="release-title">${rel.title}</div>
                        <div class="release-artist">${rel.artist}</div>
                        <div class="release-label-badge">${rel.label}</div>
                    </div>
                </div>
            `;
        });
        clientGrid.innerHTML = html;
    }
}

// Mobile Hamburger Menu Toggle Function (Global scope me honi chahiye)
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    // Footer Fetch & Dynamic Year
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('site-footer');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
                const yearSpan = document.getElementById('currentYear');
                if (yearSpan) {
                    yearSpan.textContent = new Date().getFullYear();
                }
            }
        });

    // Render Releases on load
    renderReleases();
});