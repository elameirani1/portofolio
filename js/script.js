// Toggle class active untuk Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = ( ) => {
	navbarNav.classList.toggle('active');
}

// Klik diluar element
const hm = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
	navbarNav.classList.remove('active');
}
});