    
    
    document.addEventListener("DOMContentLoaded", () => {

    const projectsData = [
        {
            title: "Thesis Project: Energy Management System",
            description: "The User-Centric Energy Management System is a mobile application designed to help users monitor their real-time electricity consumption and understand their energy costs. It uses an Arduino Uno R4 WiFi to measure appliance-level energy usage and presents the data in a simple and user-friendly interface.",
            overview: "The system collects real-time and historical energy data from household appliances and displays it through a mobile app. It includes cost estimation based on local electricity rates, data logging for usage analysis, and alert notifications for abnormal consumption. The system helps users make informed decisions to reduce energy costs and promote sustainable energy practices.",
            features: [
                "Real-time appliance-level energy monitoring",
                "Custom alerts for high consumption",
                "Historical analytics & charts",
                "Dashboard for visualizing energy trends",
                "User-friendly mobile interface"
            ],
            images: ["/static/images/energy-system-01.png","/static/images/energy-system-02.png","/static/images/energy-system-03.png"],
            languages: ["C#", "Arduino C++", "SQL Server", "Meter API", "Node.js", "ASP.NET", ".net MAUI", "xml", "HTML", "CSS", "JavaScript"],
            tools: ["VS Code", "Arduino IDE", "Figma", "SMSS", "Visual Studio", "Postman" ],
            journey: "During the creation of this project, I faced challenges integrating real-time data from Arduino sensors with a mobile app, connecting it to remote databases, and optimizing data visualization. I experimented with multiple approaches, tested various sensors, and learned to optimize data visualization for the mobile app. Completing this project taught me patience, problem-solving skills, and the importance of iterative testing."
        },
        {
            title: "Web Project: Inventory Management System",
            description: "The Inventory Management and Monitoring System is a stand-alone application developed to manage product inventory and track sales efficiently. It provides secure access to ensure that only authorized users can manage inventory data.",
            overview: "The system features a dashboard that displays key inventory and sales information such as product counts, categories, total sales, and best-selling items. It allows users to manage products, record sales transactions, update stock levels automatically, and generate reports. All data is stored locally using a MySQL Workbench database for reliable and organized record management.",
            features: [
                "Real-time stock tracking",
                "Automated sales & purchase logging",
                "Low stock alerts",
                "Transaction history & reporting",
                "Admin dashboard for easy management"
            ],
            images: ["/static/images/inventory-01.png","/static/images/inventory-02.png","/static/images/inventory-03.png"],
            languages: ["PHP", "MySQL ", "Bootstraps", "HTML5", "CSS3", "JavaScript"],
            tools: ["VS Code", "MySQL Workbench", "Xampp", "Figma"],
            journey: "Building this system involved understanding complex database relationships and creating a user-friendly interface. I overcame challenges in automating stock updates and generating reports, gaining strong experience in full-stack web development and user interface design."
        },
        {
            title: "Android Project: NutriGo Mobile App",
            description: "The NutriGo System is a web-based administrative platform and an Android-based mobile application prototype created in Figma, designed to demonstrate nutrition management, content control, and user interaction through a clean and user-friendly interface.",
            overview: "The system consists of a web-based admin dashboard for organizing nutrition content and visual analytics, and an Android Figma prototype for users that simulates food tracking, diet summaries, AI-assisted meal suggestions, and access to nutrition professionals, focusing only on UI and UX design without backend functionality.",
            features: [
                "Daily meal logging",
                "Calorie & nutrient tracking",
                "Personalized diet recommendations",
                "Analytics dashboard for nutrition trends",
                "Reminders & alerts for meal tracking"
            ],
            images: ["/static/images/nutrigo-01.png","/static/images/nutrigo-02.png","/static/images/nutrigo-03.png"],
            languages: ["React", "Figma AI", "Bootraps", "HTML5", "CSS3", "JavaScript"],
            tools: ["Vs Code", "Figma", "Supabase"],
            journey: "During development, I learned to manage local and cloud databases while implementing personalized nutrition recommendations. Testing with real users helped me refine the UI and notifications system, providing valuable lessons in mobile app development and user experience."
        },
        {
            title: "System Project: Employee Monitoring Desktop App",
            description: "The Employee Monitoring Desktop App is a C# GUI-based application designed to monitor and manage employee activity through a simple and user-friendly desktop interface.",
            overview: "The system allows administrators to view and monitor employee records using a C# GUI desktop interface. It presents employee information through simple, organized screens and forms. The application focuses on basic monitoring and clear data display without complex backend processing.",
            features: [
                "Attendance logging & reporting",
                "Activity monitoring",
                "Automated performance reports",
                "User role management",
                "Exportable logs and analytics"
            ],
            images: ["/static/images/attendace-01.png","/static/images/attendance-02.png","/static/images/attendance-03.png"],
            languages: ["C#", "MySQL"],
            tools: ["Visual Studio", "SQL Server Management Studio", "C# GUI"],
            journey: "Creating this desktop system involved designing robust user roles and activity tracking. Debugging complex logic for attendance and performance reports taught me meticulous planning and effective problem-solving, culminating in a fully functional monitoring application."
        }
    ];

    // OPEN MODAL
    window.openProjectDetail = function(index) {
        const overlay = document.getElementById("projectDetailOverlay");
        const title = document.getElementById("projectDetailTitle");
        const desc = document.getElementById("projectDetailDesc");
        const over = document.getElementById("projectDetailOverview");
        const imagesContainer = document.getElementById("projectDetailImages");
        const featuresContainer = document.getElementById("projectDetailFeatures");
        const languagesContainer = document.getElementById("projectDetailLanguages");
        const toolsContainer = document.getElementById("projectDetailTools");
        const journey = document.getElementById("projectDetailJourney");

    // Hide navbar
        const navbar = document.querySelector("nav");
        if(navbar) navbar.classList.add("hidden");

    // CLEAR old content
        while (imagesContainer.firstChild) imagesContainer.removeChild(imagesContainer.firstChild);
        while (featuresContainer.firstChild) featuresContainer.removeChild(featuresContainer.firstChild);
        while (languagesContainer.firstChild) languagesContainer.removeChild(languagesContainer.firstChild);
        while (toolsContainer.firstChild) toolsContainer.removeChild(toolsContainer.firstChild); 

        const project = projectsData[index];
        if (!project) return;

        title.textContent = project.title;
        desc.textContent = project.description;
        over.textContent = project.overview;
        journey.textContent = project.journey;

        // DYNAMIC FEATURES
        project.features.forEach((feature) => {
            const li = document.createElement("li");
            li.textContent = feature;
            featuresContainer.appendChild(li);
        });

        // DYNAMIC LANGUAGES
        project.languages.forEach(lang => {
        const span = document.createElement("span");
        span.textContent = lang;
        span.className = "px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium";
        languagesContainer.appendChild(span);
    });

    project.tools.forEach(tool => {
        const span = document.createElement("span");
        span.textContent = tool;
        span.className = "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium";
        toolsContainer.appendChild(span);
    });

            // Add project images 
        project.images.forEach(src => {
            const img = document.createElement("img");
            img.src = src; 
            img.className =
                "w-64 h-40 object-contain bg-black/80 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition";
            img.onclick = () => openFullImage(src);
            imagesContainer.appendChild(img);
        });

        // Show overlay 
        overlay.classList.remove("hidden");

    }




const overlay = document.getElementById("projectDetailOverlay");
if(overlay) {
    // Create big white X icon dynamically
    const closeBtn = document.createElement("a");
    closeBtn.href = "#"; // para parang link
    closeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
    `;
    closeBtn.className = "absolute top-4 right-4 z-50 cursor-pointer";
    closeBtn.onclick = (e) => {
        e.preventDefault(); // para hindi mag-jump sa top
        window.closeProjectDetail(); // tawagin yung existing close function
    };
    overlay.appendChild(closeBtn);
}


    // CLOSE MODAL
    window.closeProjectDetail = function() {
        document.getElementById("projectDetailOverlay").classList.add("hidden");

        // Show navbar again
        const navbar = document.querySelector("nav");
        if(navbar) navbar.classList.remove("hidden");
    };

 

    

    // FULL IMAGE
    window.openFullImage = function(src){
        let overlay = document.getElementById("fullImageOverlay");
        if(!overlay) {
            overlay = document.createElement("div");
            overlay.id = "fullImageOverlay";
            overlay.className = "fixed inset-0 bg-black/70 flex items-center justify-center z-50";
            overlay.innerHTML = `<img id="fullImage" class="max-h-full max-w-full rounded-xl shadow-lg"/>`;
            overlay.onclick = () => overlay.classList.add("hidden");
            document.body.appendChild(overlay);
        }
        document.getElementById("fullImage").src = src;
        overlay.classList.remove("hidden");
    };

    // Close full image overlay
    window.closeFullImage = function () {
        document.getElementById("fullImageOverlay").classList.add("hidden");
    };

        // 🔥 GUARD: pag walang project, stop agad
        if (!projectsData[index]) {
            console.warn("Project data not found for index:", index);
            return;
        }

    });
