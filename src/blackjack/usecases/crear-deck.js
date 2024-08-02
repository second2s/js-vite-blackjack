import _ from 'underscore';

// export const miNombre = 'Fernando';

/**
 * esta funcion crea un deck
 * @param {string[]} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {string[]} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {string[]} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('TiposDeCarta es obligatorio');
    // if( tiposDeCarta.length === 0 ) throw new Error('TiposDeCarta tiene que ser un arreglo string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;
