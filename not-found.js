document.addEventListener("DOMContentLoaded", function () {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CATCH ME IF YOU CAN</title>
            <style>
                body {
                    padding: 0;
                    margin: 0;
                    background-color: black;
                }
                .container {
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                }
                .centered-image {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <img src="b1.gif" class="centered-image" style="width: 100px; height: auto;" />
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script>
                document.addEventListener("contextmenu", function (e) {
                    alert("Right-clicking is not allowed!");
                    e.preventDefault();
                });

                document.addEventListener("click", function (e) {
                    alert("Left-clicking is not allowed!");
                    e.preventDefault();
                });

                document.addEventListener("keydown", function (event) {
                    if (
                        (event.ctrlKey && event.key === "u" || event.key === "U") ||
                        (event.metaKey && event.key === "U") ||
                        (event.ctrlKey && event.shiftKey && event.key === "I") ||
                        (event.metaKey && event.altKey && event.key === "I") ||
                        event.key === "F12"
                    ) {
                        alert("Inspecting or viewing source is not allowed!");
                        event.preventDefault();
                    }
                });

                (function () {
                    var protectedCode = function () {
                        $(".centered-image").on({
                            mouseover: function () {
                                $(this).css({
                                    left: (Math.random() * (window.innerWidth - 100)) + "px",
                                    top: (Math.random() * (window.innerHeight - 100)) + "px",
                                });
                            }
                        });
                    };
                    protectedCode();
                })();
                let originalWidth = window.innerWidth;
                let originalHeight = window.innerHeight;

                window.addEventListener("resize", function () {
                    if (Math.abs(originalWidth - window.innerWidth) > 100 || Math.abs(originalHeight - window.innerHeight) > 100) {
                        window.location.href = window.location.href = "./not.html"; // Redirect to the same page
                    }
                });
            </script>
        </body>
        </html>
    `;

    document.open();
    document.write(html);
    document.close();
});
