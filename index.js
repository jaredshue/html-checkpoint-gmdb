document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("navbar-links-home").addEventListener("click", function() {
        this.setAttribute("class", "navbar-link active");
        document.getElementById("navbar-links-login").setAttribute("class", "navbar-link");
        document.getElementById("login-view").setAttribute("class", "login-view");
        document.getElementById("movies-view").setAttribute("class", "movies-view active");
    });

    document.getElementById("navbar-links-login").addEventListener("click", function() {
        this.setAttribute("class", "navbar-link active");
        document.getElementById("navbar-links-home").setAttribute("class", "navbar-link");
        document.getElementById("movies-view").setAttribute("class", "movies-view");
        document.getElementById("login-view").setAttribute("class", "login-view active");
    });
});
