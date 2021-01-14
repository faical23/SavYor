$(() => {
	// ====== [BEGIN] Toggle the sidebar on mobile version ======
	const btnMenu = document.getElementById("menu-icon-trigger");
	btnMenu.addEventListener("click", (e) => {
		e.preventDefault();
		document.querySelector('.menu-icon-wrapper').classList.toggle('open');
		document.querySelector('.nav-content').classList.toggle('is-active');
	});
	// ====== [END] Toggle the sidebar on mobile version ======

	// Enable bootstrap Tooltip
	$('[data-toggle="tooltip"]').tooltip();
});

///// funtion input 1
function myFunction1() {
	var x = document.getElementById("myInput1");
	var show_password1 = document.querySelector(".show-password1");

	if (x.type === "password") {
		x.type = "text";
		show_password1.src="../assets/img/icons/not-see.svg"
	} else {
		x.type = "password";
		show_password1.src="../assets/img/icons/see-password.svg"

	}
} 

///// funtion input 2
function myFunction2() {
	var x = document.getElementById("myInput2");
	var show_password2 = document.querySelector(".show-password2");

	if (x.type === "password") {
		x.type = "text";
		show_password2.src="../assets/img/icons/not-see.svg"
	} else {
		x.type = "password";
		show_password2.src="../assets/img/icons/see-password.svg"
	}
} 