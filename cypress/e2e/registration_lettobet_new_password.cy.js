describe('registration_lettobet_new_password', () => {

    it('registration_lettobet', () => {

        cy.visit('https://lettobet.com/')
        cy.viewport(1920, 1080)

        cy.get('.language__ArrowSvg-sc-1b2zoks-2').click()
        cy.get('#language_button_english').click()

        cy.get('#header_sign_up_button').click()

        cy.get('#registration_username_input').type('test_for_registration')
        cy.get('#registration_first_name_input').type('thisisname')
        cy.get('#registration_second_name_input').type('thisissecondname')
        cy.get('#registration_last_name_input').type('thisislastname')

       /* cy.get('#registration_birthday_input').click()
        cy.get(':nth-child(4) > :nth-child(3) > .style_button_reset__j32Q8').click()
        cy.get('.style_dropdown_year__Dbbzw > .dropdown').select('2000')
        cy.get(':nth-child(1) > :nth-child(4) > .style_button_reset__j32Q8').click()*/

        cy.get('#registration_password_input').type('12345678')
        cy.get('#registration_repeat_password_input').type('12345678')
        cy.get('#registration_email_input').type('s_peshkov@list.ru')
        cy.get('#registration_personal_data_checkbox').click()
        cy.get('#registration_button').click()
    })

        it('new_password_lettobet',()=>{

            cy.visit('https://lettobet.com/')
            cy.viewport(1920, 1080)

            cy.get('.language__ArrowSvg-sc-1b2zoks-2').click()
            cy.get('#language_button_english').click()

            cy.get('#header_sign_in_button').click()
            cy.get(':nth-child(1) > .LoginComponents__Link-sc-f2pwg5-3').click()
            cy.get('#recovery_password_email_input').type('s_peshkov@list.ru')
            cy.get('#reset_password_button').click()



        })






})