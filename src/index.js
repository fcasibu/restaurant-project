import _ from "lodash";
import {
  addBackgroundImage,
  addMenu,
  addLandingText,
  addBooking,
} from "./landingPage/landingPage";
import addMenuContent from "./menuPage/menuPage";
import addContactContainer from "./contactPage/contactPage";
import "./style.css";

(() => {
  const component = () => {
    const content = document.querySelector("#content");
    content.appendChild(addMenu());
    const links = document.querySelectorAll("li");
    links[0].classList.add("selected");
    addLandingPage(content);

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("landing-page-btn")) {
        links[0].classList.remove("selected");
        links[1].classList.add("selected");
        removeContent(content);
        addMenuPage(content);
      } else if (e.target.classList.contains("submit-btn")) {
        e.preventDefault();
      } else {
        return;
      }
    });

    links.forEach((item) =>
      item.addEventListener("click", () => {
        const notSelected = !item.classList.contains("selected");
        if (item.textContent === "Home" && notSelected) {
          removeSelected(links);
          removeContent(content);
          addLandingPage(content);
          item.classList.add("selected");
        } else if (item.textContent === "Menu" && notSelected) {
          removeSelected(links);
          removeContent(content);
          addMenuPage(content);
          item.classList.add("selected");
        } else if (item.textContent === "Contact") {
          removeSelected(links);
          removeContent(content);
          addContactPage(content);
          item.classList.add("selected");
        }
      })
    );
  };

  const addLandingPage = (content) => {
    content.appendChild(addLandingText());
    content.appendChild(addBooking());
  };

  const addMenuPage = (content) => {
    content.appendChild(addMenuContent());
  };

  const addContactPage = (content) => {
    content.appendChild(addContactContainer());
  };

  const removeContent = (content) => {
    for (let i = 1; i < content.children.length; i++) {
      while (content.children.length > 1) {
        content.removeChild(content.children[i]);
      }
    }
  };

  const removeSelected = (links) => {
    links.forEach((item) => item.classList.remove("selected"));
  };
  component();
})();
