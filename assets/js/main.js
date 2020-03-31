// Descrizione esercizio:
// chiedere all’utente il cognome
var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

var numeroIndice = document.getElementById('numero-indice');

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var cognomiLista = [ 'Bianchi',
                      'Rossi',
                      'Duzioni',
                      'Balsano',
                      'Verdi'
];
console.log(cognomiLista);

// stampa la lista ordinata alfabeticamente
var cognomiListaOrdinati = cognomiLista.sort();
console.log(cognomiListaOrdinati);

// scrivi anche la posizione della lista in cui  il nuovo utente si trova
var stampaOrdinata = cognomiListaOrdinati.indexOf(cognomeUtente) +1
console.log(stampaOrdinata);

numeroIndice.innerHTML = stampaOrdinata;


var elList = document.getElementById('cognomi-lista');
for(var i = 0; i < cognomiLista.length; i++) {
  var elementoLista = cognomiLista[i];
  var contenutoPrecedente = elList.innerHTML;
  var nuovoElemento ='<li>' + elementoLista + '</li>';
  elList.innerHTML = contenutoPrecedente + nuovoElemento;
}
