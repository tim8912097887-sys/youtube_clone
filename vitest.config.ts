import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        // Enable globals like 'describe', 'it', 'expect' (optional)
        globals: true,
        environment: 'jsdom',
        include: ['./src/**/*.{test,spec}.tsx'],
        exclude: [
            ...configDefaults.exclude,
            'src/tests/setup.ts',
            'dist',
            'coverage',
        ], // Exclude setup file from test files
        // Setup file for environment variables or global mocks
        setupFiles: ['./src/tests/setup.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: ['node_modules/', 'src/__tests__/'],
        },
    },
});
