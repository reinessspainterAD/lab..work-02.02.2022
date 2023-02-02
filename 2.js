"use strict";
const Nname = "DaNiEl";
const Ssurname = "AbdUllIn";

const Complex1 = Nname[0].toUpperCase() + Nname.slice(1).toLowerCase();
const Complex2 = Ssurname[0].toUpperCase() + Ssurname.slice(1).toLowerCase();

console.log("Изменённые значения: ", Complex1, Complex2);

Complex1 !== Nname && Complex2 !== Ssurname ? console.log("Имя и фамилия были преобразованны.") : console.log("Имя и фамилия остались без изменений.")