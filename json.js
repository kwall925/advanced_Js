const init = () => {
  let students = [{"name":"Ken","email":"kwall925@gmail.com","id":"freshman"}, {"name":"Gustav","email":"gus@gmail.com", "id":"sophomore"}, {"name":"Jen","email":"jen@gmail.com","id":"junior"},
{"name":"Savannah","email":"savannah@gmail.com","id":"senior"},
{"name":"Freddie","email":"freddie@gmail.com","id":"super senior"}];

  for (let i = 0; i < students.length; i++) {
    console.log(`id: ${students[i].id}\nemail: ${students[i].email}`);
}
}

window.onload = init;
