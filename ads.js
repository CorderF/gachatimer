const adToggle = document.getElementById('adToggle');
const adArea = document.getElementById('ad-area');

// 1. Initialize Ad State
const adsEnabled = localStorage.getItem('adsEnabled') !== 'false';
adToggle.checked = adsEnabled;

function loadAdSense() {
    if (adToggle.checked) {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID";
        document.head.appendChild(script);
        
        document.getElementById('ad-placeholder').innerHTML = `
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-YOUR_ID" data-ad-slot="YOUR_SLOT" data-ad-format="auto"></ins>`;
        (adsbygoogle = window.adsbygoogle || []).push({});
    } else {
        adArea.classList.add('hidden');
    }
}

// 2. Listen for Toggle changes
adToggle.addEventListener('change', () => {
    localStorage.setItem('adsEnabled', adToggle.checked);
    location.reload(); 
});

loadAdSense();