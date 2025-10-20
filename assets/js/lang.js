   // Add event listeners for language switcher buttons
        document.addEventListener('DOMContentLoaded', function () {
            // Get current page path
            const currentPath = window.location.pathname;

            // Add click event listeners to all language buttons
            document.querySelectorAll('.language-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    const lang = this.getAttribute('data-lang');
                    switchLanguage(lang);
                });
            });

            // Set active button based on current path
            const currentPathParts = currentPath.split('/');
            if (currentPathParts.includes('ar')) {
                document.querySelector('[data-lang="ar"]').classList.add('active');
            } else if (currentPathParts.includes('en')) {
                document.querySelector('[data-lang="en"]').classList.add('active');
            }
        });

        // Function to switch language and redirect to appropriate folder
        function switchLanguage(lang) {
            // Get current page file name
            const currentPath = window.location.pathname;
            const fileName = currentPath.split('/').pop();

            // Build new path based on selected language
            let newPath;
            if (lang === 'ar') {
                newPath = `/ar/${fileName}`;
            } else {
                newPath = `/en/${fileName}`;
            }

            // Redirect user to new path
            window.location.href = newPath;
        }