import { contextStub, fixture } form './contextStub'

test('get product ', () => {
  const getProducts= getProductsController(contextStub);
  const params = { id: fixture.id }

  const response = await getProducts({ params });

  expect(response).toBeDefined()
})
