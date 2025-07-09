const me = {   //ვქმნი ობიეტს რომლის შეცვლაც არ მინდა სახელად მე
    firstname: "Nutsa",   //შემდეგ ვინახავ სახელს გვარს წლოვანებას და ქალაქს და ფერს
    lastname: "Khechikovi",
    age: 16,
    city: "georgia",
    favcolor: "blue"
}

me.hobby = "painting";  //me-ში ვამატებ ჰობის

delete me.city;   //me-ში იშლება ქალაქი

me.favmovie = "home alone";  

me.fav = {
    place: "asia",
    thing: "sleep",
}