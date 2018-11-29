module.exports = {
  extends: ['pagarme-base'],
  env: {
    mocha: true,
  },
  globals: {
    $super: true,
    AdminDatabase: true,
    ApiDatabase: true,
    AuthenticationError: true,
    ControllerValidationError: true,
    Doge: true,
    ModelNotFoundError: true,
    Module: true,
    StandardError: true,
    StateConflictError: true,
    authenticationHelper: true,
    db: true,
    elasticsearchHelper: true,
    expressApp: true,
    gateway: true,
    nestedCustomerHelper: true,
    notifier: true,
    raven: true,
    requestHelper: true,
    requestValidator: true,
    responseHelper: true,
    restfulController: true,
    transactionHelper: true,
    Class: true,
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/test/**',
        '**/tests/**',
      ],
    }],
  },
}

