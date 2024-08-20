/// <reference types="cypress" />
import BuyPage from "../support/page_objects/buy.page";

const dataBuy = require('../fixtures/buy.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(data => {
            cy.login(data.usuario, data.senha)
        })
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        BuyPage.buy(
            dataBuy[0].size, 
            dataBuy[0].color,
            dataBuy[0].size2,
            dataBuy[0].color2,
            dataBuy[0].size3,
            dataBuy[0].color3,
            dataBuy[0].size4,
            dataBuy[0].color4
        )
        cy.get('.page-title').should('contain', 'Pedido recebido')
    });
})
