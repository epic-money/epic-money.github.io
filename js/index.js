const createCasinosCards = (array, elementId) => {
  const element = document.getElementById(elementId);
  const DOM = [];

  for (const itemCasino of array) {
    const { img, header, description, link } = itemCasino;

    DOM.push(`
        <a href=${link} class='card'><div class='card-img' style='background-image: url(${img})'></div><div class='card-body'><span class='card-header'>${header}</span><span class='card-description'>${description}</span></div></a>
        `);

    element.innerHTML = DOM;
  }
};

const casinosData = [
  {
    header: "casino",
    description:
      "description of the casino where you can forgot about winnings. Give your money to people who know how to spend them",
    link: "https//:casino.com",
    img: "./assets/img.jpg",
  },
  {
    header: "casino",
    description:
      "description of the casino where you can forgot about winnings. Give your money to people who know how to spend them",
    link: "https//:casino.com",
    img: "./assets/img.jpg",
  },
  {
    header: "casino",
    description:
      "description of the casino where you can forgot about winnings. Give your money to people who know how to spend them",
    link: "https//:casino.com",
    img: "./assets/img.jpg",
  },
  {
    header: "casino",
    description:
      "description of the casino where you can forgot about winnings. Give your money to people who know how to spend them",
    link: "https//:casino.com",
    img: "./assets/img.jpg",
  },
  {
    header: "casino",
    description:
      "description of the casino where you can forgot about winnings. Give your money to people who know how to spend them",
    link: "https//:casino.com",
    img: "./assets/img.jpg",
  },
];

createCasinosCards(casinosData, "casino-cards");
