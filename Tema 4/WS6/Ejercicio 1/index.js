window.onload = () =>{
    parrafoid = document.getElementById('parrafo')
    if (getCookie("user")){
        parrafoid.style.color = getCookie("colorfondoparrafo");
        document.body.style.backgroundColor = getCookie("colorfondo");
        
    }
    else{
        user = prompt("Introduce tu usuario");
        // document.cookie = "user="+user;
        setCookie("user", user, 1);

        parrafo = prompt("Introduce color del parrafo");
        // document.cookie = "colorfondoparrafo="+parrafo;
        parrafoid.style.color = parrafo;
        setCookie("colorfondoparrafo", parrafo, 1);

        color = prompt("Introduce el color de fondo");
        // document.cookie = "colorfondo="+color;
        document.body.style.backgroundColor = color;
        setCookie("colorfondo", color, 1);
        
    }

}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


