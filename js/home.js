
//for feature boxes and tabs
document.addEventListener("DOMContentLoaded", function () {
                  const featureBoxes = document.querySelectorAll(".feature-box");
                  const tabs = document.querySelectorAll(".content-tab");
              
                  featureBoxes.forEach((box) => {
                    box.addEventListener("click", function () {
                      // Remove active class from all boxes and tabs
                      featureBoxes.forEach((b) => b.classList.remove("active"));
                      tabs.forEach((tab) => tab.classList.remove("active"));
              
                      // Add active class to clicked box and corresponding tab
                      this.classList.add("active");
                      const tabId = this.getAttribute("data-id");
                      document.getElementById("tab-" + tabId).classList.add("active");
                    });
                  });
                });


//for preloader
                 window.addEventListener('load', function() {
                  const preloader = document.getElementById('preloader');
                  const minTime = 1000; // 1 seconds
                  const start = performance.timing.navigationStart;
                  const now = Date.now();
                  const elapsed = now - start;
                  const delay = Math.max(minTime - elapsed, 0);
              
                  setTimeout(() => {
                    if (preloader) {
                      preloader.style.opacity = '0';
                      setTimeout(() => preloader.style.display = 'none', 400);
                    }
                  }, delay);
                });