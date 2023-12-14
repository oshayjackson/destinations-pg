// when form is submitted grab user input and log it

user_input_form.addEventListener("submit", (e) => {
  // event object
  e.preventDefault();
  const destination_name = destination_name.value;
  const location_name = location_name.value;
  const photoUrl = photoUrl.value || PLACE_HOLDER_URL;
  const desc = description.value || PLACE_HOLDER_DESCRIPTION;
  console.table(console.log(destination_name, location_name, photoUrl, desc));
});
