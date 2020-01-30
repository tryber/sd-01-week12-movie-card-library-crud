import React from 'react';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('Movie List', () => {
  test("Renders a 'Carregando' text right afte rendering the element", () => {
    const { getByText } = render(<App />);
    expect(getByText('Carregando...')).toBeDefined();
  });

  test('Renders the movie titles after the page loads', async () => {
    const { queryByText } = render(<App />);

    await waitForDomChange();

    expect(queryByText('Carregando...')).toBeNull();
    expect(queryByText('Kingsglaive')).not.toBeNull();
  });
});
