function addBackgroundImage() {
  const bgImage = document.createElement("img");
  bgImage.classList.add("bg-image");
  bgImage.src = "./landing-bg.jpg";
  return bgImage;
}

function addMenu() {
  const links = document.createElement("ul");
  links.classList.add("links");

  const linkNames = ["Home", "Menu", "Contact"];
  for (let i = 0; i < 3; i++) {
    const link = document.createElement("li");
    link.textContent = linkNames[i];
    links.appendChild(link);
  }
  return links;
}

function addLandingText() {
  const showcase = document.createElement("div");
  showcase.classList.add("showcase");

  const showcaseText = document.createElement("h1");
  showcaseText.textContent = "The Awesome Burger";

  const showcasePara = document.createElement("p");
  showcasePara.textContent = "Get your burger now!";

  const showcaseButton = document.createElement("button");
  showcaseButton.classList.add("landing-page-btn");
  showcaseButton.textContent = "Menu";

  showcase.appendChild(showcaseText);
  showcase.appendChild(showcasePara);
  showcase.appendChild(showcaseButton);

  return showcase;
}

function addBooking() {
  const booking = document.createElement("div");
  booking.classList.add("booking");

  const hours = document.createElement("div");
  hours.classList.add("booking__hours");

  const hoursTitle = document.createElement("h4");
  hoursTitle.textContent = "Hours";

  const hoursDate = document.createElement("p");
  const hoursTime = document.createElement("p");
  hoursDate.textContent = "Monday to Friday";
  hoursTime.textContent = "8AM to 6PM";

  hours.appendChild(hoursTitle);
  hours.appendChild(hoursDate);
  hours.appendChild(hoursTime);

  const contact = document.createElement("div");
  contact.classList.add("booking__contact");

  const contactTitle = document.createElement("h4");
  contactTitle.textContent = "Contact";

  const contactEmail = document.createElement("p");
  contactEmail.textContent = "awesomeburger@awesome.com";

  contact.appendChild(contactTitle);
  contact.appendChild(contactEmail);

  booking.appendChild(hours);
  booking.appendChild(contact);

  return booking;
}

export { addBackgroundImage, addMenu, addLandingText, addBooking };
