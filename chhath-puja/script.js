const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


// /////////////////////

const aboutRows = document.querySelectorAll('.about-row');
window.addEventListener('scroll', () => {
    aboutRows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            row.classList.add('visible');
        }
    });
});




// Optional: gentle reveal on load for better UX
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.about-row');
    rows.forEach((r, i) => {
        r.style.opacity = 0;
        r.style.transform = 'translateY(10px)';
        setTimeout(() => {
            r.style.transition = 'opacity 400ms ease, transform 400ms ease';
            r.style.opacity = 1;
            r.style.transform = 'translateY(0)';
        }, 120 * i);
    });
});





// ///////////////////////////


// Form

   const form = document.getElementById("chhathForm");
            const popup = document.getElementById("thankYouPopup");

            form.addEventListener("submit", async function (event) {
                event.preventDefault();

                // Get values
                const schoolName = document.getElementById("schoolName").value.trim();
                const teacherName = document.getElementById("teacherName").value.trim();
                const teacherPhone = document.getElementById("teacherPhone").value.trim();
                const totalStudents = document.getElementById("totalStudents").value.trim();
                const studentNames = document.getElementById("studentNames").value.trim();

                // Date + Random No.
                const today = new Date().toLocaleDateString('en-GB');
                const randomNo = Math.floor(Math.random() * 100000);

                // Prepare data for SheetDB
                const data = {
                    data: [{
                        no: randomNo,
                        date: today,
                        "School / Institute Name:": schoolName,
                        "Teacher Name:": teacherName,
                        "Teacher Phone No.:": teacherPhone,
                        "Total Number of Students:": totalStudents,
                        "Students Name:": studentNames
                    }]
                };

                try {
                    // Send to SheetDB
                    const response = await fetch("https://sheetdb.io/api/v1/o9x6ygauy31ej", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    });

                    if (response.ok) {
                        popup.style.display = "flex";
                        form.reset();
                    } else {
                        alert("❌ कुछ गलती हुई है, कृपया दोबारा कोशिश करें!");
                    }
                } catch (error) {
                    alert("⚠️ Network Error! कृपया बाद में पुनः प्रयास करें।");
                    console.error(error);
                }
            });

            function closePopup() {
                popup.style.display = "none";
            }


  // //////////////////////////////