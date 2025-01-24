// Sample search data with corresponding URLs
        const items = [
            { name: "About Me", url: "#" },
            { name: "Dev", url: "#" },
            { name: "Social", url: "#" },
            { name: "Settings", url: "#" },
            { name: "Games", url: "#" },
            { name: "Tips&quotes", url: "#" },
            { name: "Why is this full of scams", url: "#" }
        ];

        // Search function
        function performSearch() {
            const query = document.getElementById("searchInput").value.toLowerCase();
            const searchDropdown = document.getElementById("searchDropdown");
            searchDropdown.innerHTML = ""; // Clear previous results

            if (query.length === 0) {
                searchDropdown.classList.remove("show");
                return;
            }

            const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
            if (filteredItems.length > 0) {
                searchDropdown.classList.add("show");
                filteredItems.forEach(item => {
                    const link = document.createElement("a");
                    link.href = item.url; // Set URL
                    link.textContent = item.name;
                    link.target = "_blank"; // Open in a new tab (optional)
                    link.onclick = function() {
                        searchDropdown.classList.remove("show");
                    };
                    searchDropdown.appendChild(link);
                });
            } else {
                searchDropdown.classList.remove("show");
            }
        }

      // Close dropdown if clicked outside
      document.addEventListener("click", function(event) {
        if (!event.target.closest(".search-container")) {
          document.getElementById("searchDropdown").classList.remove("show");
        }
      });

      // Email validation function
      function validateEmail() {
        const input = document.getElementById('floatingInput');
        const label = input.nextElementSibling;

        if (input.validity.valid) {
          input.classList.remove('is-invalid');
          label.textContent = 'Email address';
        } else {
          input.classList.add('is-invalid');
          label.textContent = 'Invalid email';
        }
      }