document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.querySelector(".sidebar");
    const menuTitles = document.querySelectorAll(".menu-title");

    // เปิด-ปิด Sidebar
    toggleBtn.addEventListener("click", function () {
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-260px";
        } else {
            sidebar.style.left = "0px";
        }
    });

    // เปิด-ปิดเมนูย่อย
    menuTitles.forEach(title => {
        title.addEventListener("click", function () {
            const submenu = this.nextElementSibling;
            submenu.classList.toggle("open");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".submenu li");
    const menuDisplay = document.querySelector(".menu-display");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const menuName = this.textContent;
            loadMenu(menuName);
        });
    });

    function loadMenu(menuName) {
        let menuHTML = `<h2>${menuName}</h2><div class="menu-list">`;

        if (menuName === "เมนูตำ") {
            menuHTML += `
                <div class="menu-card">
                    <img src="somtam.jpg" alt="ส้มตำไทย">
                    <div class="menu-info">
                        <h3>ส้มตำไทย</h3>
                        <p>ส้มตำไทยรสเด็ด เผ็ด เปรี้ยว หวาน กำลังดี</p>
                        <p><strong>ราคา:</strong> 50 บาท</p>
                    </div>
                </div>
                <div class="menu-card">
                    <img src="somtam_poo.jpg" alt="ส้มตำปู">
                    <div class="menu-info">
                        <h3>ส้มตำปู</h3>
                        <p>ส้มตำรสแซ่บพร้อมปูดองสด</p>
                        <p><strong>ราคา:</strong> 60 บาท</p>
                    </div>
                </div>
            `;
        } else if (menuName === "เมนูยำ") {
            menuHTML += `
                <div class="menu-card">
                    <img src="yum_seafood.jpg" alt="ยำทะเล">
                    <div class="menu-info">
                        <h3>ยำทะเล</h3>
                        <p>ยำรวมทะเลรสแซ่บ เผ็ด เปรี้ยว กลมกล่อม</p>
                        <p><strong>ราคา:</strong> 80 บาท</p>
                    </div>
                </div>
                <div class="menu-card">
                    <img src="yum_wun_sen.jpg" alt="ยำวุ้นเส้น">
                    <div class="menu-info">
                        <h3>ยำวุ้นเส้น</h3>
                        <p>ยำวุ้นเส้นหมูสับ กุ้งสด ครบรสชาติ</p>
                        <p><strong>ราคา:</strong> 70 บาท</p>
                    </div>
                </div>
            `;
        } else if (menuName === "เมนูต้ม") {
            menuHTML += `
                <div class="menu-card">
                    <img src="tom_yum.jpg" alt="ต้มยำกุ้ง">
                    <div class="menu-info">
                        <h3>ต้มยำกุ้ง</h3>
                        <p>ต้มยำกุ้งน้ำข้น หอมมัน กุ้งสดเนื้อแน่น</p>
                        <p><strong>ราคา:</strong> 120 บาท</p>
                    </div>
                </div>
                <div class="menu-card">
                    <img src="tom_kha_gai.jpg" alt="ต้มข่าไก่">
                    <div class="menu-info">
                        <h3>ต้มข่าไก่</h3>
                        <p>ต้มข่าไก่ หอมกะทิ รสชาติกลมกล่อม</p>
                        <p><strong>ราคา:</strong> 100 บาท</p>
                    </div>
                </div>
            `;
        }

        menuHTML += `</div>`;
        menuDisplay.innerHTML = menuHTML;
    }
});
