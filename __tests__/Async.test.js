import {render, screen, waitFor, act} from '@testing-library/react-native';
import Async from '../src/Async';

const mockResponse = [
  {
    id: 1,
    name: 'Bryson Reed',
    email: 'brysonreed@yopmail.com',
  },
  {
    id: 2,
    name: 'Piyush',
    email: 'piyush1245@yopmail.com',
  },
];

describe('Async component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      }),
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders loading state initially', async () => {
    const {getByText} = render(<Async />);
    await waitFor(() => {
      const loading = getByText('Loading...');
      expect(loading).toBeTruthy();
    });
  });

  it('renders error message when fetch fails', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject('Fetch error'));
    const {getByText} = render(<Async />);
    await waitFor(() => {
      const errorMessage = getByText('Something went wrong...');
      expect(errorMessage).toBeTruthy();
    });
  });

  it('renders posts if request succeeds', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      }),
    );
    render(<Async />);
    await waitFor(async () => {
      const listItemElements = await screen.findAllByTestId('listitem');
      expect(listItemElements).not.toHaveLength(0);
    });
  });
});
