describe('Покупка аватара', function () {
    it('Правильные логин и пароль, кнопка входа, нужный текст\крестик', function () {
        cy.visit('https://pokemonbattle.me');
        cy.get(':nth-child(1) > .auth__input').type('albinaqa@yandex.ru')
        cy.get('#password').type('Chika3018')
        cy.get('.auth__button').click()
        cy.get('.header__btns > [href="/shop"]').click()
        cy.get(':nth-child(1) > .shop__button').click()
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111')
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Albina Suturina')
        cy.wait(5000)
        cy.get('.pay-btn').click()
        cy.get('#cardnumber').type('56456')
        cy.wait(2000)
        cy.get('.payment__submit-button').click()
        cy.contains('Покупка прошла успешно')
        



    })

})