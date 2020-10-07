
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "user" && password == "pass"){
//alert ("Login successfully");
window.location=("mainpage.html"); // Redirecting to other page.
return false;
}
else{
alert("Username: user and Password: pass");

}
}

/*Used to make the responsive navbar sticky */
/*window.onscroll = function() {sticknav()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function sticknav()
{
    if (window.pageYOffset >= sticky)
    {
        navbar.classList.add("sticky");
    }
    else
    {
        navbar.classList.remove("sticky");
    }
}
*/


