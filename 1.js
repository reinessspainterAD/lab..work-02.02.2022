"use strict";
const password = "1jsdnfksjdnkj";
password.length > 4 && (password.includes("-") || password.includes("_")) ? console.log("Пароль надёжный") : console.log("Пароль недостаточно надёжный")