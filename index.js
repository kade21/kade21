$(document).ready(function () {
	$('body').append(`
		<header class="head"></header>
		<div class="body"></div>
		<div class="bottom"></div>
	`);

	$('.head').append(`
		<nav>
			<div class="nav-wrapper">
				<a href="#" class="brand-logo">Logo</a>
				<ul
					id="nav-mobile"
					class="right hide-on-med-and-down"
				>
					<li><a href="home.html">Home</a></li>
					<li><a href="index.html">Index</a></li>
					<li><a href="collapsible.html">JavaScript</a></li>
				</ul>
			</div>
		</nav>
	`);
});
