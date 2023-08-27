document.addEventListener("DOMContentLoaded", function () {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>iNSPECTING Not Allowed By Nishmal 😂</title>
            <style>
                body {
                    padding: 0;
                    margin: 0;
                    background-color: black;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    color: white;
                }
                .centered-image {
                    width: 300px;
                    height: auto;
                }
            </style>
        </head>
        <body>
            <h1>Inspect not allowed by Nishmal 😂</h1>
            <p>but you are intelligent</p>
            <img src="./b3.gif" class="centered-image" alt="Centered Image" />
            <script>
                // Check for DevTools open
                let devToolsOpen = false;
                const checkDevTools = () => {
                    if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
                        devToolsOpen = true;
                    } else {
                        devToolsOpen = false;
                    }
                };

                // Check for DevTools periodically
                setInterval(checkDevTools, 1000);

                // Show alert on context menu
                document.addEventListener("contextmenu", (e) => {
                    e.preventDefault();
                    if (devToolsOpen) {
                        alert("Developer tools are not allowed!");
                    } else {
                        alert("Right-clicking is not allowed!");
                    }
                });

                // Show alert on left-click
                document.addEventListener("click", (e) => {
                    e.preventDefault();
                    if (devToolsOpen) {
                        alert("Left-clicking is not allowed!");
                    } else {
                        alert("Left-clicking is not allowed!");
                    }
                });

                // Prevent inspecting and view source shortcuts
                document.addEventListener("keydown", (event) => {
                    if (
                        (event.ctrlKey && event.key === "u" || event.key === "U") ||
                        (event.metaKey && event.key === "U") ||
                        (event.ctrlKey && event.shiftKey && event.key === "I") ||
                        (event.metaKey && event.altKey && event.key === "I") ||
                        event.key === "F12"
                    ) {
                        event.preventDefault();
                        if (devToolsOpen) {
                            alert("Inspecting or viewing source is not allowed!");
                        }
                    }
                });
            </script>
        </body>
        </html>
    `;

    document.documentElement.innerHTML = html;
});
