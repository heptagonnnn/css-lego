import scss from 'rollup-plugin-scss'
import autoprefixer from 'autoprefixer';
import postcss from "postcss";


export default {
    input: './src/index.scss',
    plugins: [
        scss({
            exclude: ["dist"],
            output: "dist/index.css",
            processor: css => postcss([autoprefixer])
        })
    ]
}