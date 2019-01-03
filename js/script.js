
    window.addEventListener("load", function () {

            var log_span = document.getElementById("login");
            var pass_span = document.getElementById("password");
            var mail_span = document.getElementById("mail")

            var login = document.getElementsByName("login")[0],
                password = document.getElementsByName("password")[0],
                mail = document.getElementsByName("mail")[0];

            // обработка события отправки запроса
            document.forms[0].addEventListener("submit", function (event) {
                var isValid = true;

                // если условие сработает значение в форме будет считаться не правильным.
                if (login.value.length === 0) {
                    isValid = false;
                    log_span.innerHTML = "Login must be filled";
                }
                else if (login.value.search(" ") !== -1) {
                    isValid = false;
                    log_span.innerHTML = "Space in the login is not allowed";
                }
                else if (login.value.search(/[а-яА-Я]/) !== -1) {
                    isValid = false;
                    log_span.innerHTML = "Login can only be English letters";
                }
                else if (login.value.search(/^[a-zA-Z]/) === -1) {
                    isValid = false;
                    log_span.innerHTML = "Login must begin with a letter";
                }
                else if (login.value.length < 8) {
                    isValid = false;
                    log_span.innerHTML = "Login can not be less than 8 characters long";
                }

                /*Обработка правильности пароля*/

                if (password.value.length === 0) {
                    isValid = false;
                    pass_span.innerHTML = "Password must be filled in";
                }
                else if (password.value.search(" ") !== -1) {
                    isValid = false;
                    pass_span.innerHTML = "Spaces in the password are not allowed";
                }
                else if (login.value.length < 8) {
                    isValid = false;
                    pass_span.innerHTML = "Password can not be less than 8 characters long";
                }

                 /*Обработка правильности email*/
                if (mail.value.length === 0) {
                    isValid = false;
                    mail_span.innerHTML = "Email must be filled";
                }
               else if (mail.value.search(" ") !== -1) {
                    isValid = false;
                    mail_span.innerHTML = "Spaces in email are not allowed";
               }
               else if (mail.value.search(/\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i) === -1) {
                   isValid = false;
                   mail_span.innerHTML = "Wrong email format";
               }

                if (!isValid) {
                    event.preventDefault();
                }
            });

            /*Удаляем красный текст у спанов*/
            login.oninput = function () {
                log_span.innerHTML = "";
            }
            password.oninput = function () {
                pass_span.innerHTML = "";
            }
            mail.oninput = function () {
                mail_span.innerHTML = "";
            }

            /*инпит в фокусе выделяется желтым*/
            var ins = document.getElementsByClassName("in");
            for(var elem of ins) {
                elem.onfocus = function () {
                    this.style.backgroundColor = "#8ee5ee";
                    this.style.outline = "none";

                }
                elem.onblur = function () {
                    this.style.backgroundColor = "#f5f5f5";
                }
            }


        })