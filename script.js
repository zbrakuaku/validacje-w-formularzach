function PoprawneImieNazwisko(input) {
    const PoprawneImieNazwiskoRegex =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    if (input.match(PoprawneImieNazwiskoRegex)) {
      return 0;
    } else {
     alert("Wpisz swoje imie i nazwisko.");
    }
  }
  function PoprawnyEmail(input) {
    const poprawnyEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(poprawnyEmailRegex)) {
      return 0;
    } else {
      alert("Nieprawidłowy adres e-mail!");
    }
  }
  function PoprawnyNumer(input) {
    const poprawnyNumerRegex = /^[0-9]{3}?[-]?[0-9]{3}[-]?[0-9]{3}/;
    if (input.match(poprawnyNumerRegex)) {
      return 0;
    } else {
      alert("Zły numer telefonu!");
    }
  }
  function SprawdzaniePoprawnosci() {
    const name = document.querySelector("#imie").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

    PoprawneImieNazwisko(name);
    PoprawnyEmail(email);
    PoprawnyNumer(phone);
  }
