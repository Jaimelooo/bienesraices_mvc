import path from 'path'

export default {
    mode: 'development',
    entry: {
        mapa: './src/js/mapa.js',
        agregarImagen: './src/js/agregarImagen.js',
        mostrarMapa: './src/js/mostrarMapa.js',
        mapaInicio: './src/js/mapaInicio',
        cambiarEstado: './src/js/cambiarEstado'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('public/js')
    }
}