document.addEventListener("DOMContentLoaded", function () {
    // อ้างอิงปุ่มและ element ที่เกี่ยวข้อง
    const toggleBtn = document.getElementById("toggle-btn");
    const homeBtn = document.getElementById("home-btn");
    const sidebar = document.querySelector(".sidebar");
    const menuDisplay = document.querySelector(".menu-display");
    const menuTitles = document.querySelectorAll(".menu-title");
    const menuItems = document.querySelectorAll(".submenu li");
  
    // ซ่อนส่วนแสดงเมนูอาหาร (menu-display) เมื่อโหลดหน้าแรก
    if (menuDisplay) {
      menuDisplay.style.display = "none";
    }
  
    // เมื่อคลิกปุ่ม "☰ เมนู" ให้สลับแสดง/ซ่อน Sidebar
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("active");
    });
  
    // เมื่อคลิกปุ่ม "🏠 หน้าแรก" ให้ซ่อน Sidebar และส่วนแสดงเมนูอาหาร
    homeBtn.addEventListener("click", function () {
      sidebar.classList.remove("active");
      if (menuDisplay) {
        menuDisplay.style.display = "none";
      }
      // รีเซ็ตสถานะของ submenu (ซ่อนทั้งหมด)
      const submenus = document.querySelectorAll(".sidebar .submenu");
      submenus.forEach(submenu => {
        submenu.classList.remove("active");
      });
    });
  
    // เมื่อคลิกที่เมนูหลักใน Sidebar ให้สลับแสดง/ซ่อนเมนูย่อย
    menuTitles.forEach(function (title) {
      title.addEventListener("click", function () {
        const submenu = this.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle("active");
        }
      });
    });
  
    // เมื่อคลิกที่รายการใน submenu (เช่น "เมนูตำ", "เมนูยำ", "เมนูต้ม")
    menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const menuName = this.textContent.trim();
        loadMenu(menuName);
      });
    });
  
    // ฟังก์ชันโหลดเนื้อหาเมนูตามชื่อที่เลือก
    function loadMenu(menuName) {
      let menuHTML = `<h2>${menuName}</h2><div class="menu-list">`;
      if (menuName === "เมนูตำ") {
        menuHTML += `
          <div class="menu-card">
            <img src="ตำหมูยอด.JPG" alt="ส้มตำไทย">
            <div class="menu-info">
              <h3>ส้มตำไทย</h3>
              <p>ส้มตำไทยรสเด็ด เผ็ด เปรี้ยว หวาน กำลังดี</p>
              <p><strong>ราคา:</strong> 50 บาท</p>
            </div>
          </div>
          <div class="menu-card">
            <img src="ตำปูนา.JPG" alt="ส้มตำปู">
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
      // โหลดเนื้อหาลงในส่วนแสดงเมนูและแสดงออกมา
      menuDisplay.innerHTML = menuHTML;
      menuDisplay.style.display = "block";
    }
  });
  
