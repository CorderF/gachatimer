const phase1End = new Date("February 3, 2026 18:00:00").getTime();
const phase2End = new Date("February 24, 2026 18:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    let targetDate = phase1End;

    if (now > phase1End) {
        targetDate = phase2End;
        document.getElementById('phase1-content').classList.add('hidden');
        document.getElementById('phase2-content').classList.remove('hidden');
        document.getElementById('current-title').textContent = "Current Banner: Phase 2";
    }

    const distance = targetDate - now;
    if (distance < 0) { document.getElementById("timer").innerHTML = "EXPIRED"; return; }
    
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateTimer, 1000);
updateTimer();