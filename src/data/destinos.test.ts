import { describe, expect, it } from 'vitest';
import { destinos } from './destinos';

describe('destinos data', () => {
    it('should have at least one destination', () => {
        expect(destinos.length).toBeGreaterThan(0);
    });

    it('each destination should contain required fields', () => {
        destinos.forEach((destino) => {
            expect(destino).toEqual(
                expect.objectContaining({
                    id: expect.any(String),
                    nome: expect.any(String),
                    imagem: expect.any(String),
                    descricao: expect.any(String),
                    precoViagem: expect.any(String),
                    diasDisponiveis: expect.any(String),
                    oQueFazer: expect.any(Array),
                })
            );
            expect(destino.oQueFazer.length).toBeGreaterThan(0);
        });
    });
});
