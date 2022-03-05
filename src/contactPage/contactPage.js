function addContactContainer() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactText = document.createElement("h1");
  contactText.textContent = "How to contact us";

  const contact = document.createElement("div");
  contact.classList.add("contact");

  const leftContact = document.createElement("div");
  leftContact.classList.add("contact__left");

  leftContact.innerHTML = `<div><h2>Email Address</h2>
   <p>awesomeburger@awesome.com</p></div>
   <div><h2>Phone Number</h2>
   <p>(123)-456-789</p>
   </div>
  `;

  const rightContact = document.createElement("div");
  rightContact.classList.add("contact__right");

  rightContact.innerHTML = `
  <form>
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" pattern="[a-zA-Z]+"/>
      </div>
      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </div>
      <input type="submit" value="Submit" class="submit-btn"/>
    </form>`;

  contactContainer.appendChild(contactText);
  contactContainer.appendChild(contact);
  contact.appendChild(leftContact);
  contact.appendChild(rightContact);

  return contactContainer;
}

export default addContactContainer;
