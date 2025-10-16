// Update current date
const updateDate = () => {
	const now = new Date();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	document.getElementById("currentDate").textContent = now.toLocaleDateString(
		"en-US",
		options
	);
};
updateDate();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	});
});

// Dynamic content loading simulation
const loadMoreContent = () => {
	console.log("Loading more articles...");
	// This would connect to your backend/CMS
};

// Newsletter subscription
document.querySelectorAll("button").forEach((button) => {
	if (button.textContent.includes("Geezers' Club")) {
		button.addEventListener("click", function () {
			const email = this.parentElement.querySelector(
				'input[type="email"]'
			).value;
			if (email) {
				alert(
					"Welcome to the Geezers' Club! Check your email for your first dose of wisdom."
				);
				// This would connect to your email service
			}
		});
	}
});

// Comment form handling
document.querySelectorAll(".comment-submit").forEach((button) => {
	button.addEventListener("click", function (e) {
		const form = e.target.closest(".comment-form");
		const name = form.querySelector(".comment-name").value;
		const text = form.querySelector(".comment-text").value;

		if (name && text) {
			// In real implementation, this would submit to your backend
			alert("Thank you for your comment! It will appear after moderation.");
			form.querySelector(".comment-name").value = "";
			form.querySelector(".comment-text").value = "";
		} else {
			alert("Please fill in both your name and comment.");
		}
	});
});

// Reply button handling
document.querySelectorAll(".reply-btn").forEach((button) => {
	button.addEventListener("click", function (e) {
		// In real implementation, this would open a reply form
		alert(
			"Reply functionality coming soon! For now, please add your reply as a new comment."
		);
	});
});

// Template loader class
class TemplateLoader {
	// Initialize all functionality when DOM is ready
	initializeOnDOMContentLoaded() {
		document.addEventListener("DOMContentLoaded", () => {
			this.loadTemplates().then(() => {
				this.initializeContactForm();
			});
		});
	}
	// Load navbar and banner templates
	async loadTemplates() {
		try {
			await Promise.all([
				await this.loadNavbar(),
				//await this.loadBanner(pageName),
			]);
		} catch (error) {
			console.error("Failed to load templates:", error);
		}
	}

	async loadNavbar() {
		try {
			const response = await fetch("./assets/templates/navbar.html");
			const html = await response.text();

			const placeholder = document.getElementById("navbar-placeholder");
			if (placeholder) {
				placeholder.innerHTML = html;
			}
		} catch (error) {
			console.error("Failed to load navbar:", error);
		}
	}

	// Initialize contact form handling
	initializeContactForm() {
		const contactForm = document.getElementById("contact-form");
		if (!contactForm) return;

		contactForm.addEventListener("submit", (e) => {
			e.preventDefault();
			this.handleFormSubmission(contactForm, e);
		});
	}
}

// Initialize template loader
const templateLoader = new TemplateLoader();
templateLoader.loadTemplates();

document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.getElementById("hamburger");
	const navLinks = document.querySelector(".nav-links");

	hamburger.addEventListener("click", function () {
		// Toggle active class on hamburger button
		hamburger.classList.toggle("active");

		// Toggle active class on nav links
		navLinks.classList.toggle("active");
	});

	// Close menu when clicking on a link (optional)
	const navItems = document.querySelectorAll(".nav-links a");
	navItems.forEach((item) => {
		item.addEventListener("click", () => {
			hamburger.classList.remove("active");
			navLinks.classList.remove("active");
		});
	});

	// Close menu when clicking outside (optional)
	document.addEventListener("click", function (event) {
		const isClickInside =
			hamburger.contains(event.target) || navLinks.contains(event.target);

		if (!isClickInside && navLinks.classList.contains("active")) {
			hamburger.classList.remove("active");
			navLinks.classList.remove("active");
		}
	});
});
