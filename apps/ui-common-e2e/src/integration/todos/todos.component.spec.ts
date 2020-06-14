describe('ui-common', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todoscomponent--primary'));

  it('should render the component', () => {
    cy.get('ui-workspace-todos').should('exist');
  });
});
