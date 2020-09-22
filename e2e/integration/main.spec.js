describe('Landing', () => {
	it('Should contain 5 cards', () => {
		cy.visit('/');

		cy.get('.card-wrapper').find('card-wrapper').should('have.length', 5);
	});

	it('Card should open on click', () => {
		cy.get('card-wrapper').first().find('card').find('.card').click({ force: true });
		cy.wait(4000);
		cy.get('.card-wrapper').find('card-wrapper').find('card-closed').should('have.length', 4);
		cy.get('.card-wrapper').find('card-wrapper').find('card-details').should('have.length', 1);
		cy.get('card-wrapper').first().find('card').find('.card').click({ force: true });
	});

	it('Should contain chart and change its data depending on the button clicks', () => {
		cy.get('card-wrapper').first().find('card').find('.card').click({ force: true });
		cy.wait(4000);
		cy.get('card-details').within(() => {
			cy.get('button').contains('Wind').click();
			cy.get('button').contains('12').click();
		});

		cy.get('card-wrapper').first().find('card').find('.card').click({ force: true });
	});

	it('Should close details', () => {
		cy.get('card-wrapper').first().find('card').find('.card').click({ force: true });
		cy.get('card-details').within(() => {
			cy.get('.close').click({ force: true });
		});
	});

	it('should open other location when clicked on closed card', () => {
		cy.get('card-wrapper').first().find('card').find('.card').click({ force: true });
		cy.get('card-wrapper').eq(2).find('card-closed').click({ force: true });
	});
});
