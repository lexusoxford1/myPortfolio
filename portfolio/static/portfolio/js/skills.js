document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll('.skill-card');
    const infoPanel = document.getElementById('skillInfoPanel');
    const skillTitle = document.getElementById('skillTitle');
    const skillDescription = document.getElementById('skillDescription');

    // Skill levels + percentage (reference)
    const skillLevels = {
        "C#": { level: "Intermediate", percent: 70 },
        "Java": { level: "Beginner", percent: 30 },
        "Python": { level: "Average", percent: 50 },
        "PHP": { level: "Intermediate", percent: 70 },
        "JavaScript": { level: "Average", percent: 50 },
        "C++": { level: "Beginner", percent: 30 },
        ".NET MAUI": { level: "Average", percent: 50 },
        "ASP.NET Web API": { level: "Average", percent: 50 },
        "Android Studio": { level: "Beginner", percent: 30 },
        "Bootstrap": { level: "Average", percent: 50 },
        "Tailwind CSS": { level: "Average", percent: 50 },
        "HTML5": { level: "Advanced", percent: 90 },
        "CSS3": { level: "Average", percent: 50 },
        "RESTful APIs": { level: "Beginner", percent: 30 },
        "SQL Server": { level: "Intermediate", percent: 70 },
        "MySQL": { level: "Intermediate", percent: 70 },
        "Networking": { level: "Beginner", percent: 30 },
        "IT Support": { level: "Beginner", percent: 30 },
    };

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skillName = card.dataset.title;
            const data = skillLevels[skillName] || { level: "Average", percent: 50 };

            skillTitle.textContent = skillName;

            // Build skill bar UI dynamically
            skillDescription.innerHTML = `
                <span class="font-semibold text-white">${data.level}</span>
                <div class="w-full bg-white/10 rounded-full mt-2 h-4 overflow-hidden">
                    <div class="bg-blue-500 h-4 rounded-full" style="width:0%; transition: width 1s;"></div>
                </div>
            `;

            infoPanel.classList.remove('hidden');

            // Animate bar
            const bar = skillDescription.querySelector('div > div');
            setTimeout(() => {
                bar.style.width = data.percent + '%';
            }, 50);
        });
    });
});
