/**
 * enta funcion devuelve una carta de un deck
 * @param {String[]} deck 
 * @returns {String} devuelve una carta
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) throw 'No hay cartas en el deck';
    
    const carta = deck.pop();
    return carta;
}