function navigateTo(url) {
    window.location.href = url;
}

document.getElementById("home-button").onclick = function() { navigateTo("HomePage.html"); };
document.getElementById("service-button").onclick = function() { navigateTo("ServicePage.html"); };
document.getElementById("product-button").onclick = function() { navigateTo("ProductsPage.html"); };
document.getElementById("about-button").onclick = function() { navigateTo("AboutPage.html"); };
document.getElementById("contact-button").onclick = function() { navigateTo("ContactUs.html"); };
