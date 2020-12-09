const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users', [
      {
        nome: 'Humberto Doe',
        sobrenome: 'Ribeiro',
        email: 'Humberto@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Carlos Doe',
        sobrenome: 'Ribeiro',
        email: 'Carlos@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Fabio Doe',
        sobrenome: 'Ribeiro',
        email: 'Fabio@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {},
  ),

  down: () => {},
};
