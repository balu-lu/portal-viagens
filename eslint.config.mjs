import { nextConfig } from '@next/eslint-plugin-next';

export default [
    {
        ignores: ['.next/', 'node_modules/', 'dist/', 'build/'],
    },
    ...nextConfig.configs.recommended,
];
