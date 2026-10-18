
const FORMSPREE_URL = "https://formspree.io/f/mljgrav";

const menu = document.querySelector("#menu");
const links = document.querySelector("#links");

menu.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

links.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent =
  new Date().getFullYear();

const form = document.querySelector("#inquiry");
const status = document.querySelector("#status");
const submitButton = form.querySelector('button[type="submit"]');

submitButton.textContent = "Submit Inquiry →";

form.addEventListener("submit", async event => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  status.textContent = "Submitting your inquiry...";

  try {
    const data = new FormData(form);

    data.set("_subject", "New Double A Tutoring Inquiry");

    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      status.textContent =
        "Success! Your tutoring inquiry has been submitted. We'll get back to you soon.";

      form.reset();
    } else {
      status.textContent =
        "Sorry, your inquiry could not be submitted. Please try again.";
    }
  } catch (error) {
    status.textContent =
      "Connection error. Please check your internet and try again.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Inquiry →";
  }
});
