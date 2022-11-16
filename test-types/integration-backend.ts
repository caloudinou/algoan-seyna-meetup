const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

test(`GET all products`, async () => {
  runApp(config);

  const response = await fetch(`http://localhost:${port}/products/`);
  const data = await response.json();

  expect(data).toBeDefined();
});
