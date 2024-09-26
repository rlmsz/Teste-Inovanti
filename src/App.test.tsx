/**
 * @jest-environment jsdom
 */

import { render,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@jest/globals";
import   App   from './App'


// Mock Header
jest.mock('./components/Header',() =>({
    Header: () => <div>Header</div>,
}))
describe('Testar App',() => {
    test('Verificar mensagem de erro do fetch', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
              ok: false,
            })
          ) as jest.Mock;
    render(<App/>)
    console.log = jest.fn()
    await waitFor(() => {
        expect(console.log).toHaveBeenCalledWith(Error);
      });
    })
})