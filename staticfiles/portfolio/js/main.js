// Initialize AOS animations
AOS.init({ duration: 1200, once: true });

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hireBtn = document.getElementById("hireBtn");
    const hireModal = document.getElementById("hireModal");
    const closeModal = document.getElementById("closeModal");
    const hireForm = document.getElementById("hireForm");

    // Open modal
    hireBtn.addEventListener("click", () => {
        hireModal.classList.remove("hidden");
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        hireModal.classList.add("hidden");
    });

    hireModal.addEventListener("click", (e) => {
        if (e.target === hireModal) {
            hireModal.classList.add("hidden");
        }
    });

    // --- HIRE ME FORM SUBMISSION ---
    hireForm.addEventListener("submit", function (e) {
        //e.preventDefault();

        const name = hireForm.name.value.trim();
        const email = hireForm.email.value.trim();
        const number = hireForm.number.value.trim();
        const question = hireForm.question.value.trim();

        if (!name || !email || !number) {
            alert("Please fill in all required fields.");
            return;
        }

        // Initialize EmailJS (ONCE)
        emailjs.init("6uO1dkaMSQSDmeLmR");

        // 1️⃣ Send email to ADMIN
        emailjs.send("service_0ehcq19", "template_f2v2utv", {
            title: "New Hire Me Request",
            name: name,
            email: email,
            number: number,
            question: question
        }).then(() => {
            console.log("Admin email sent");
        }).catch(err => {
            console.error("Admin email failed", err);
        });

        // 2️⃣ Send AUTO-REPLY to USER
        emailjs.send("service_0ehcq19", "template_9trddco", {
            title: "Thank You for Choosing Me",
            name: name,
            email: email
        }).then(() => {
            console.log("User email sent");
        }).catch(err => {
            console.error("User email failed", err);
        });

        // 3️⃣ Auto download resume
        const link = document.createElement("a");
        link.href = "/media/resumes/KeithPelonio_Resume.pdf";
        link.download = "KeithPelonio_Resume.pdf";
        link.click();

        // 4️⃣ Success
        alert("Your request has been sent successfully!");
        hireForm.reset();
        hireModal.classList.add("hidden");
    });

    //LOADING SCRIPT 





    
});
