/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
export default function (baseWord: string, anagram: string): boolean {
  let isAnagram = false;

  if (baseWord !== anagram) {
    if (baseWord.length === anagram.length) {
      const anagramCopy = anagram.split('');
      const baseWordChars = baseWord.split('');
      let charNotFound = false;

      baseWordChars.forEach(charItem => {
        const charPosition = anagramCopy.indexOf(charItem);

        if (charPosition >= 0) {
          anagramCopy.splice(charPosition, 1);
        } else {
          charNotFound = true;
          return;
        }
      });

      if (charNotFound === false) {
        isAnagram = true;
      }
    }
  }
  return isAnagram;
}

/*
amor - roma
Amor - rom
aMor - ro
amOr - r
amoR - TRUE
*/
