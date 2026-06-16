import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Página Principal (Server Component)', () => {
    it('deve renderizar o título principal e o botão de destinos', async () => {
        const ui = await Page();
        render(ui as any);

        expect(screen.getByText(/O mundo é vasto/i)).toBeInTheDocument();
        expect(screen.getByText(/Comece a explorar/i)).toBeInTheDocument();
        expect(
            screen.getByRole('link', { name: /ver destinos/i })
        ).toBeInTheDocument();
    });
});
