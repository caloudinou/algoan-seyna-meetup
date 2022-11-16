// integration tests typically only mock HTTP requests via MSW or Mirage
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test(`logging in displays the user's username`, async () => {
  await render(<LoginForm / >);
  const { username, password } = buildLoginForm();

  userEvent.type(screen.getByLabelText(/username/i), username);
  userEvent.type(screen.getByLabelText(/password/i), password);
  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

  // assert whatever you need to verify the user is logged in
  expect(screen.getByText(username)).toBeInTheDocument();
});
