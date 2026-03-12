// ============================
// Assignment 2 - Interactive Features
// ============================

// 1) Greeting message by time of day
(function setGreeting() {
  const greetingEl = document.getElementById("greeting");
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let message = "Welcome!";

  if (hour >= 5 && hour < 12) {
    message = "Good morning";
  } else if (hour >= 12 && hour < 17) {
    message = "Good afternoon";
  } else if (hour >= 17 && hour < 22) {
    message = "Good evening";
  } else {
    message = "Hope you’re having a calm night 🌌";
  }

  greetingEl.textContent = message;
})();

// 2) Dark / Light theme with localStorage
(function themeManager() {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");
  const themeLabel = document.getElementById("themeLabel");

  if (!toggleBtn || !themeLabel) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeLabel.textContent = "Light Mode";
  } else {
    body.classList.remove("light-theme");
    themeLabel.textContent = "Dark Mode";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    const isLight = body.classList.contains("light-theme");
    const currentTheme = isLight ? "light" : "dark";

    localStorage.setItem("theme", currentTheme);
    themeLabel.textContent = isLight ? "Light Mode" : "Dark Mode";

    if (window.lucide) {
      toggleBtn.innerHTML = isLight
        ? '<i data-lucide="sun"></i><span id="themeLabel">Light Mode</span>'
        : '<i data-lucide="moon"></i><span id="themeLabel">Dark Mode</span>';

      lucide.createIcons();
    }
  });
})();

// 3) Project filtering
(function projectFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const emptyState = document.getElementById("emptyState");
  const filterStatus = document.getElementById("filterStatus");

  if (!filterButtons.length || !projectCards.length || !emptyState || !filterStatus) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      projectCards.forEach((card) => {
        const category = card.dataset.category;

        if (selectedFilter === "all" || category === selectedFilter) {
          card.classList.remove("hide-card");
          visibleCount++;
        } else {
          card.classList.add("hide-card");
        }
      });

      if (visibleCount === 0) {
        emptyState.classList.remove("hidden");
      } else {
        emptyState.classList.add("hidden");
      }

      filterStatus.textContent =
        selectedFilter === "all"
          ? "Showing all projects."
          : `Showing ${visibleCount} project(s) in "${button.textContent}".`;
    });
  });
})();

// 4) Contact form validation + user feedback
(function handleContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  if (!form || !status || !submitBtn) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  function setError(input, errorElement, message) {
    input.classList.add("input-error");
    errorElement.textContent = message;
  }

  function clearError(input, errorElement) {
    input.classList.remove("input-error");
    errorElement.textContent = "";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);

    status.className = "form-status";
    status.textContent = "";

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === "") {
      setError(nameInput, nameError, "Please enter your name.");
      isValid = false;
    }

    if (emailValue === "") {
      setError(emailInput, emailError, "Please enter your email.");
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      setError(emailInput, emailError, "Please enter a valid email address.");
      isValid = false;
    }

    if (messageValue === "") {
      setError(messageInput, messageError, "Please enter your message.");
      isValid = false;
    } else if (messageValue.length < 10) {
      setError(messageInput, messageError, "Message should be at least 10 characters.");
      isValid = false;
    }

    if (!isValid) {
      status.classList.add("error");
      status.textContent = "Please fix the highlighted fields and try again.";
      return;
    }

    submitBtn.disabled = true;
    status.classList.add("success");
    status.textContent = "Sending message...";

    setTimeout(() => {
      status.className = "form-status success";
      status.textContent = "Message sent successfully! This is a demo form, so no backend is connected.";
      form.reset();
      submitBtn.disabled = false;
    }, 900);
  });
})();

// 5) Scroll reveal animation
(function revealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => observer.observe(element));
})();
