const EMAIL = "shreeyasuresh76@gmail.com", GH = "https://github.com/shreeyasuresh", LI = "https://www.linkedin.com/in/shreeya-suresh-663589388/";
const PHOTO = "";      // About-section photo, e.g. "me.jpg" (a cut-out with no background looks best)
const HERO_PHOTO = ""; // Hero photo (leave empty to reuse PHOTO)
const $ = s => document.querySelector(s) || { addEventListener() { }, classList: { toggle() { } } }, list = a => `<ul>${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
const skills = [["⌨️", "Programming Languages", "Python, C Programming, HTML, CSS, JavaScript, Prompt Engineering"], ["🛠️", "Tools & Platforms", "VS Code, GitHub, Canva, React, ChatGPT, Claude, Gemini"], ["🌐", "Domains", "Web Development, UI/UX Design, Front-End Development, Back-End Development, Problem Solving"]];
const edu = [["2025 – Present", "REVA University", "B.Tech in Computer Science Engineering", "🎓"], ["2022 – 2024", "Sri Sapthagiri PU College, Tumkur", "Science Stream", "📘"], ["Completed in 2022", "Karnataka Public School, Huliyar – Tumkur", "Schooling", "🏫"]];
const projects = [["HEALTHIFY IQ", "A consumer safety rating platform that analyzes ingredients in food, cosmetic, and wellness products.", ["Product Safety Score", "Ingredient Analysis", "Harmful Ingredient Detection", "Alternative Product Recommendations"], "", "Web AI"], ["VANI – Voice Driven Smart Living", "A voice-controlled smart home automation system using ESP32.", ["Voice Control", "Smart Automation", "ESP32 Integration", "Energy-Efficient Design"], "", "IoT"], ["Startup Project", "Currently working on an innovative startup and funding-oriented technology project.", [], "Coming Soon", "Startup"]];
const ach = [["💻", "Front-End Development Projects"], ["🎤", "Academic Presentations"], ["🚀", "Startup Venture Development"], ["🤖", "AI and Technology Exploration"], ["🎨", "Portfolio and Product Design Projects"]];

document.querySelectorAll("[data-photo]").forEach(b => b.innerHTML = PHOTO ? `<img src="${PHOTO}" alt="Shreeya S">` : "<b>SS</b>");
const hp = HERO_PHOTO || PHOTO; $("[data-hero]").innerHTML = hp ? `<img src="${hp}" alt="">` : "<b>SS</b>";
$("#skillList").innerHTML = skills.map(s => `<div><div class="ring">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join("");
$("#eduList").innerHTML = edu.map(e => `<div class="card"><div class="panel">${e[3]}</div><div class="body"><h3>${e[1]}</h3><small>${e[0]}</small><p>${e[2]}</p></div></div>`).join("");
$("#achList").innerHTML = ach.map(a => `<div><div class="ring">${a[0]}</div><h3>${a[1]}</h3></div>`).join("");
function showProjects(f) { $("#pjList").innerHTML = projects.filter(p => f === "All" || p[4].includes(f)).map(p => `<div class="tile" tabindex="0">${p[0].split(" ").slice(0, 2).map(w => w[0]).join("")}<div class="ov"><h3>${p[0]}</h3><p>${p[1]}</p>${p[2].length ? list(p[2]) : ""}${p[3] ? `<span class="soon">Status: ${p[3]}</span>` : ""}</div></div>`).join("") }
$("#tabs").innerHTML = ["All", "Web", "AI", "IoT", "Startup"].map((t, i) => `<button class="${i ? "" : "on"}">${t}</button>`).join("");
$("#tabs").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; document.querySelectorAll("#tabs button").forEach(x => x.classList.toggle("on", x === b)); showProjects(b.textContent) });
showProjects("All");
$("#info").innerHTML = `<li><i>📍</i><span>Bangalore, Karnataka</span></li><li><i>✉️</i><a href="mailto:${EMAIL}">${EMAIL}</a></li><li><i>💻</i><a href="${GH}" target="_blank" rel="noopener">${GH}</a></li><li><i>🔗</i><a href="${LI}" target="_blank" rel="noopener">${LI}</a></li>`;
$("#soc").innerHTML = `<a href="${GH}" target="_blank" rel="noopener">GitHub</a><a href="${LI}" target="_blank" rel="noopener">LinkedIn</a><a href="mailto:${EMAIL}">Email</a>`;

$("#form").addEventListener("submit", e => {
    e.preventDefault(); const d = new FormData(e.target);
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(d.get("s"))}&body=${encodeURIComponent(d.get("m") + "\n\n— " + d.get("n") + " (" + d.get("e") + ")")}`
});
const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
const setNav = () => nav.classList.toggle("solid", scrollY > 60); setNav(); addEventListener("scroll", setNav, { passive: true });
burger.onclick = () => { nav.classList.toggle("open", menu.classList.toggle("open")); burger.setAttribute("aria-expanded", menu.classList.contains("open")) };
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false") } });
const links = [...menu.querySelectorAll("a")];
const page = location.pathname.split("/").pop() || "home.html";
links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === page));