// integration tests typically only mock HTTP requests via MSW or Mirage
const server = setupServer(...handlers)

beforeAll(() => { server.listen(); app.listen(); })

afterAll(() => { server.close(); app.close(); })

afterEach(() => server.resetHandlers())

test(`GET all products`, async () => {
    await app.ready();

    const response = await fetch(`http://localhost:${port}/2022-11/products/`);
    const data = await response.json();

    expect(data).toBeDefined()
})