import {render, screen, waitFor} from '@testing-library/react-native';
import Async from '../src/Async';

const mockResponse = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
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

  it('renders loading state initially', async () => {
    const {getByText} = render(<Async />);
    expect(getByText('Loading...')).toBeTruthy();
  });

  it('renders error message when fetch fails', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject('Fetch error'));
    const {getByText} = render(<Async />);
    await waitFor(() =>
      expect(getByText('Something went wrong...')).toBeTruthy(),
    );
    jest.restoreAllMocks();
  });

  it('renders posts if request succeeds', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      }),
    );
    render(<Async />);

    const listItemElements = await screen.findAllByTestId('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
  jest.restoreAllMocks();
});
