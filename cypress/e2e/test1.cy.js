
describe('Тестирование авторизации', function () {
    
    it('Правильные логин и пароль, кнопка входа, нужный текст\крестик', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.get('#messageHeader').should('be.visible')
        cy.contains('Авторизация прошла успешно')
         })
         
    it('Проверка забыли пароль, текст и иконка выхода на окне успеха', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click()
            cy.get('#mailForgot').type('german@dolnikov.ru')
            cy.get('#restoreEmailButton').click()
            cy.get('#messageHeader').should('be.visible')
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')
            cy.contains('Успешно отправили пароль на e-mail')
    })

     it('Правильный логин + неправильный пароль, наличие текста и кнопки выхода на окне с ошибкой', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.contains('Такого логина или пароля нет')
     })
     it('Неправильный логин + правильный пароль, наличие текста и кнопки выхода на окне с ошибкой', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germaan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.contains('Такого логина или пароля нет')
     })
     it('Логин без собаки + правильный пароль, наличие текста и кнопки выхода на окне с ошибкой', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.contains('Нужно исправить проблему валидации')
     })
     it('Правильные логин(измененный регистр) + пароль, кнопка входа, и наличие текста\кнопки выхода на странице поставторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GeRmaN@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        cy.get('#messageHeader').should('be.visible')
        cy.contains('Авторизация прошла успешно')
         })


     
})

describe('Тестирование покупки аватара', function () {
    it('Верные логин + пароль, кнопка входа, и наличие текста\кнопки выхода на странице поставторизации', function () {
        cy.visit('https://login.qa.studio/');
    })

})