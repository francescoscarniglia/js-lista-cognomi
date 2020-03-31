// Descrizione esercizio:
// chiedere all’utente il cognome
var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

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
for(var i=0; i < cognomiListaOrdinati.length; i++) {
  console.log(cognomiLista.indexOf(cognomeUtente));
}
