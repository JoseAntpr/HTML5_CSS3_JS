if(typeof(Storage) !== undefined){
  localStorage.setItem("name","Batman");
  console.log(localStorage.getItem("name"))
}else{
  console.error("No dispones de webStorage");
}
