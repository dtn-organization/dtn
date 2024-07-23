import terser from '@rollup/plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import dts from "rollup-plugin-dts";

import pkg from './package.json' assert { type: 'json' };

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            json(),
        ],
        external: ['react', 'react-dom']
    },
    {
		input: "dist/esm/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: ['styled-components'],
        globals: { 'styled-components': 'styled' },
	}    
]