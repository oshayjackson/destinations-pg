// when form is submitted grab user input and log it

user_input_form.addEventListener("submit", (e) => {
  // event object
  e.preventDefault();
  const destination_name = destination_name.value;
  const location_name = location_name.value;
  const photoUrl = photoUrl.value || PLACE_HOLDER_URL;
  const desc = description.value;

  user_input_form.reset();
  const card = createCard({ destination_name, location_name, photoUrl, desc });
});
function createCard({ destination_name, location_name, photoUrl, desc }) {
  // <div class="card" style="width: 18rem;">
  // <img src="..." class="card-img-top" alt="...">
  // <div class="card-body">
  //   <h5 class="card-title">Card title</h5>
  //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //   class=card-text>desc
  //   <a href="#" class="btn btn-primary">Go somewhere</a>

  const card = documnent.createElement("div");
  card.classList.add("card");
  card.setAttribute("style", "width: 18rem;");

  card.innerHTML = `{

  <img src=${photoUrl} class="card-img-top" alt=${destination_name} at ${location_name}>
  <div class="card-body">
    <h5 class="card-title">${destination_name}</h5>
    <p class="card-text">${location_name}</p>

    ${
      desc &&
      `<p class="card-text">${desc}</p>}
      <button type="button" class="btn btn-info">Edit </button>
      <button type="button" class="btn btn-danger">Delete</button>
</div>
`
    };


  return card;
`;
}
