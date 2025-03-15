const reactRouterDom = jest.requireActual('react-router-dom');

module.exports = {
  ...reactRouterDom,
  BrowserRouter: ({ children }) => children,
  Routes: ({ children }) => children,
  Route: ({ children }) => children,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: 'default',
  }),
  useNavigate: () => jest.fn(),
}; 