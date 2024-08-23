// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const content = document.querySelector(".content");
const places = content.querySelector(".places");
const placesList = content.querySelector(".places__list");
// @todo: Функция создания карточки
function createCard(name, link, alt, removeCard) {
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);

  cardContent.querySelector(".card__title").textContent = name;
  cardContent.querySelector(".card__image").alt = alt;
  cardContent.querySelector(".card__image").src = link;

  const deleteButton = cardContent.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", removeCard);

  return cardContent;
}
// @todo: Функция удаления карточки
function removeCard(evt) {
  const evtTarget = evt.target;
  const card = evtTarget.closest(".card");
  card.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function (card) {
  const cardContent = createCard(card.name, card.link, card.alt, removeCard);
  placesList.append(cardContent);
});
