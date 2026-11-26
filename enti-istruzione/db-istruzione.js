/**
 * Database Enti d'Istruzione e Formazione - LCSPiemonte
 * Settori ammessi: "musei", "biblioteche", "archivi", "digital"
 */

const dbIstruzione = [
  {
    id: "unito-beni-culturali",
    nome: "Università degli Studi di Torino (UniTo)",
    sottotitolo: "Dipartimento di Studi Storici / Lingue",
    settori: ["musei", "biblioteche", "archivi"],
    tipologia: "Università",
    livello: "Laurea Triennale e Magistrale",
    modalita: "In presenza (Torino)",
    descrizione: "Corsi di laurea in Beni Culturali e Scienze del Libro, del Documento e del Patrimonio Culturale per la formazione scientifica di base e avanzata.",
    competenze: ["Storia dell'arte", "Biblioteconomia", "Archivistica", "Tutela"],
    url: "https://www.unito.it"
  },
  {
    id: "archiviodistato-scuola",
    nome: "Scuola di Archivistica, Paleografia e Diplomatica",
    sottotitolo: "Archivio di Stato di Torino (MiC)",
    settori: ["archivi"],
    tipologia: "Scuola Ministeriale",
    livello: "Diploma di Specializzazione Biennale",
    modalita: "In presenza (Torino)",
    descrizione: "Formazione specialistica d'eccellenza per archivisti di Stato e liberi professionisti dedicata alla gestione, descrizione e tutela di fondi storici.",
    competenze: ["Paleografia", "Diplomatica", "Archivistica speciale", "Riordino"],
    url: "https://archiviodistatotorino.beniculturali.it"
  },
  {
    id: "dicolab-cultura-digitale",
    nome: "Dicolab. Cultura al digitale",
    sottotitolo: "Scuola nazionale del patrimonio e delle attività culturali",
    settori: ["digital", "musei", "biblioteche", "archivi"],
    tipologia: "Alta Formazione / MOOC",
    livello: "Corsi brevi e Open Badge",
    modalita: "Online (Gratuito)",
    descrizione: "Piattaforma del Ministero della Cultura dedicata alla trasformazione digitale del patrimonio, ai nuovi standard descrittivi e all'accessibilità.",
    competenze: ["Digitalizzazione", "Metadatazione", "Accessibilità", "Digital Strategy"],
    url: "https://www.dicolab.it"
  },
  {
    id: "ente-regionale-esempio",
    nome: "Agenzia Formativa Accreditata Regione Piemonte",
    sottotitolo: "Formazione Professionale e Qualifiche",
    settori: ["biblioteche", "archivi"],
    tipologia: "Ente Regionale",
    livello: "Qualifica Professionale / Specializzazione",
    modalita: "In presenza / Mista (Piemonte)",
    descrizione: "Percorsi pratici orientati all'inserimento lavorativo nei servizi culturali, front-office bibliotecario, catalogazione partecipata e gestione documentale.",
    competenze: ["Catalogazione SBN", "Servizi al pubblico", "Gestione documentale"],
    url: "https://www.regione.piemonte.it"
  }
];
