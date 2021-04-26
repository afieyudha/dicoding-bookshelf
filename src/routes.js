const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  // Route Add Books
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // Route Get All Books
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  // Route Get Book by id
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  // Route Update Books
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  // Route Delete Books
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
  // Route Page Not Found
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Page Not Found',
  },
];

module.exports = routes;
