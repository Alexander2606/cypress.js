describe('Проверка авторизации', function () {

        it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввел валидный логин
        cy.get('#pass').type('qa_one_love1'); // Ввел валидный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно') // Проверяю, что после авт. виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст, виден ползователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
   })
        it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввел валидный логин
        cy.get('#pass').type('qa_one_love7'); // Ввел невалидный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст, виден ползователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
   })
        it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('ger@dolnikov.ru'); // Ввел невалидный логин
        cy.get('#pass').type('qa_one_love1'); // Ввел валидный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст, виден ползователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
   })
        it('Проверка что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
        cy.get('#pass').type('qa_one_love1'); // Ввел валидный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст, виден ползователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
   })  
   
        it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#forgotEmailButton').click(); // Нажал кнопку восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал отправить код 

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст, виден ползователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
   })
   it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел невалидный логин
        cy.get('#pass').type('qa_one_love1'); // Ввел валидный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация успешна'); // Проверяю, что после авт. виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст, виден ползователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
   })
})


