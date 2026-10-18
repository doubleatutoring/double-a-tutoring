
const TUTOR_EMAILS = [
  "anshtalwar1954@gmail.com",
  "akumar0018@mymail.lausd.net"
];

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

document.querySelector("#inquiry").addEventListener("submit", event => {
  event.preventDefault();

  const status = document.querySelector("#status");
  const data = new FormData(event.currentTarget);

  const value = name =>
    String(data.get(name) || "").trim();

  const subject = "Double A Tutoring Inquiry - " + value("subject");

  const body = [
    "New Tutoring Inquiry",
    "",
    "Parent/Guardian: " + value("parent"),
    "Email: " + value("email"),
    "Student Grade: " + value("grade"),
    "Subject: " + value("subject"),
    "Session Format: " + value("mode"),
    "",
    "What they need help with:",
    value("message") || "Not provided",
    "",
    "Double A Tutoring",
    "$15 per hour"
  ].join("\n");

  const recipients = TUTOR_EMAILS.join(",");

  const mailto =
    "mailto:" + recipients +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  status.textContent =
    "Your email app should open now. Please press Send to submit your inquiry.";

  window.location.href = mailto;
});
