const databaseCulturale = [
    // ==========================================
    // PIEMONTE (e multi-regione)
    // ==========================================
    {
        id: "solidarieta-lavoro",
        nome: "Solidarietà e lavoro",
        categoria: "cooperative",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "info@solidarietaelavoro.it",
        sito: "https://www.solidarietaelavoro.it"
    },
    {
        id: "coopculture",
        nome: "Coopculture",
        categoria: "cooperative",
        regioni: ["piemonte", "lombardia", "veneto", "lazio", "valle d'aosta"],
        province: ["TO", "VE", "MI", "RM", "AO"],
        email: "venezia@coopculture.it / torino@coopculture.it / milano@coopculture.it",
        sito: "https://www.coopculture.it"
    },
    {
        id: "caeb",
        nome: "CaeB",
        categoria: "cooperative",
        regioni: ["piemonte", "lombardia", "valle d'aosta"],
        province: ["TO", "MI", "AO"],
        email: "caeb@caeb.it",
        sito: "https://www.caeb.it"
    },
    {
        id: "culturalpe",
        nome: "CULTURALPE",
        categoria: "cooperative",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "info@culturalpe.it",
        sito: "https://www.culturalpe.it"
    },
    {
        id: "biblion",
        nome: "BIBLION",
        categoria: "cooperative",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "info@e-biblion.it",
        sito: "https://www.e-biblion.it"
    },
    {
        id: "arca-alessandria",
        nome: "ARCA ALESSANDRIA",
        categoria: "cooperative",
        regioni: ["piemonte"],
        province: ["AL"],
        email: "info@cooperativaarca.com",
        sito: "https://www.cooperativaarca.it"
    },
    {
        id: "orso-coop",
        nome: "ORSO SOC. COOP",
        categoria: "cooperative",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "info@cooperativaorso.it",
        sito: "https://www.cooperativaorso.it"
    },
    {
        id: "itur",
        nome: "ITUR",
        categoria: "cooperative",
        regioni: ["piemonte"],
        province: ["CN"],
        email: "info@itur.it",
        sito: "https://www.itur.it"
    },
    {
        id: "liberitutti",
        nome: "LiberiTutti",
        categoria: "cooperative",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "Form presente sul sito ufficiale.",
        sito: "https://www.coopliberitutti.it/lavora-con-noi/"
    },
    {
        id: "tarta-volante",
        nome: "LA TARTA VOLANTE",
        categoria: "cooperative",
        regioni: ["piemonte"],
        province: ["PIE"],
        email: "info@latortavolante.org",
        sito: "https://latartavolante.org/cultura/"
    },
    {
        id: "alemar",
        nome: "ALE.MAR",
        categoria: "cooperative",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "info@alemaronlus.it",
        sito: "https://alemarcoop.it"
    },
    {
        id: "charta",
        nome: "Cooperativa Charta",
        categoria: "cooperative",
        regioni: ["piemonte", "lombardia"],
        province: ["MN", "TO", "MI"],
        focus: "Servizi archivistici, gestione di biblioteche civiche, attività didattiche e promozione della lettura.",
        email: "charta@cooperativacharta.it",
        sito: "https://www.cooperativacharta.it",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },

    // ==========================================
    // SOCIETÀ DI SERVIZI & DIGITALIZZAZIONE
    // ==========================================
    {
        id: "acta-progetti",
        nome: "Acta Progetti S.r.l.",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Riordino, inventariazione, conservazione e gestione di archivi storici, correnti e biblioteche.",
        email: "info@actaprogetti.it",
        sito: "http://www.actaprogetti.it",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },
    {
        id: "promemoria-group",
        nome: "Promemoria Group",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Valorizzazione dell'heritage aziendale, digitalizzazione e promozione culturale (ideatori di Archivissima).",
        email: "info@promemoriagroup.com",
        sito: "https://www.promemoriagroup.com",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "museo", testo: "Heritage" }
        ]
    },
    {
        id: "alicubi",
        nome: "Alicubi S.r.l.",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Comunicazione, portali culturali, valorizzazione delle fonti storiche e ricerca umanistica.",
        email: "info@alicubi.it",
        sito: "https://www.alicubi.it",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "ricerca", testo: "Digital" }
        ]
    },
    {
        id: "ab-archivi",
        nome: "AB Archivi e Biblioteche",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Gestione operativa in outsourcing di servizi di catalogazione, riordino e sale studio per la PA.",
        email: "info@abarchiviebiblioteche.it",
        sito: "https://www.abarchiviebiblioteche.it",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },
    {
        id: "italarchivi",
        nome: "Italarchivi",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["PIE"],
        focus: "Custodia fisica dei documenti, gestione archivi storici e di deposito, dematerializzazione massiva.",
        email: "info@italarchivi.it",
        sito: "https://www.italarchivi.it",
        pillole: [{ tipo: "arch", testo: "Archivio" }]
    },
    {
        id: "bucap",
        nome: "Bucap S.p.a.",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["PIE"],
        focus: "Logistica documentale, digitalizzazione ad alta definizione di patrimoni storici e conservazione a norma.",
        email: "bucap@bucap.it",
        sito: "https://www.bucap.it",
        pillole: [{ tipo: "arch", testo: "Archivio" }]
    },
    {
        id: "omniadoc",
        nome: "Omniadoc S.p.a.",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["PIE"],
        focus: "Gestione dei flussi documentali, scansioni massive e infrastrutture per la consultazione digitale.",
        email: "info@omniadoc.it",
        sito: "https://www.omniadoc.it",
        pillole: [{ tipo: "arch", testo: "Archivio" }]
    },
    {
        id: "gap-visio",
        nome: "G.A.P. Visio",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["PIE"],
        focus: "Digitalizzazione non invasiva con scanner planetari speciali per mappe, libri antichi e fondi storici.",
        email: "info@gapvisio.it",
        sito: "https://www.gapvisio.it",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "museo", testo: "Beni Culturali" }
        ]
    },
    {
        id: "archeogica",
        nome: "Archeogica",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["PIE"],
        focus: "Servizi per l'archeologia, catalogazione dei reperti e documentazione stratigrafica di cantiere.",
        email: "info@archeogica.it",
        sito: "https://www.archeogica.it",
        pillole: [
            { tipo: "museo", testo: "Archeologia" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "retriever",
        nome: "Retriever",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["PIE"],
        focus: "Soluzioni per la ricerca dati, recupero di documenti complessi e software di catalogazione.",
        email: "info@retriever.it",
        sito: "https://www.retriever.it",
        pillole: [{ tipo: "arch", testo: "Archivio" }]
    },
    {
        id: "codes",
        nome: "Codes",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["PIE"],
        focus: "Sviluppo di piattaforme web e soluzioni software per la gestione e fruizione di banche dati culturali.",
        email: "info@codes.it",
        sito: "https://www.codes.it",
        pillole: [{ tipo: "arch", testo: "Digital" }]
    },
    {
        id: "innovative-multiservice",
        nome: "INNOVATIVE MULTISERVICE",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "personale@innovativemultiservice.com",
        sito: "https://innovativemultiservice.com"
    },
    {
        id: "alcantara",
        nome: "Alcantara",
        categoria: "servizi",
        regioni: ["piemonte"],
        province: ["PIE"],
        email: "info@alcantarasrl.com",
        sito: "https://job.alcantara.com/candidatura-spontanea",
        testoBtn: "Candidatura Spontanea"
    },

    // ==========================================
    // FONDAZIONI & ARCHIVI STORICI
    // ==========================================
    {
        id: "archivio-italgas",
        nome: "Archivio Storico Italgas",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Uno dei più importanti archivi aziendali d'Italia (gestito dall'Heritage Lab). Conserva dal 1837 la storia dell'innovazione e dello sviluppo urbano.",
        email: "heritagelab@italgas.it",
        sito: "https://www.italgas.it/heritage-lab/",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "arch", testo: "Archivio Storico" },
            { tipo: "museo", testo: "Heritage" }
        ]
    },
    {
        id: "torino-musei",
        nome: "Fondazione Torino Musei",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Gestione dei musei civici (GAM, MAO, Palazzo Madama) e relativi archivi fotografici.",
        email: "info@fondazionetorinomusei.it",
        sito: "https://www.fondazionetorinomusei.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "museo", testo: "Museo" },
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "accorsi-ometto",
        nome: "Fondazione Accorsi - Ometto",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Museo di Arti Decorative con una biblioteca specializzata in antiquariato e collezionismo.",
        email: "info@fondazioneaccorsi-ometto.it",
        sito: "https://www.fondazioneaccorsi-ometto.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "museo", testo: "Museo" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },
    {
        id: "alberto-colonnetti",
        nome: "Fondazione “Alberto Colonnetti”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Educazione, letteratura per l'infanzia e promozione della lettura.",
        email: "fondazione@colonnetti.it",
        sito: "https://www.colonnetti.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "ariodante-fabretti",
        nome: "Fondazione “Ariodante Fabretti”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Studi antropologici e storici sulla morte e i riti funebri.",
        email: "info@fondazionefabretti.it",
        sito: "http://www.fondazionefabretti.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "carlo-donat-cattin",
        nome: "Fondazione “Carlo Donat-Cattin”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Storia del movimento cattolico nel sociale e politica del Novecento.",
        email: "info@fondazionedonatcattin.it",
        sito: "https://www.fondazionedonatcattin.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },
    {
        id: "venaria-reale",
        nome: "Fondazione Centro Restauro “La Venaria Reale”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Alta formazione e ricerca nel campo del restauro e della conservazione.",
        email: "info@centrorestaurovenaria.it",
        sito: "https://www.centrorestaurovenaria.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "ricerca", testo: "Ricerca" },
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "teatro-stabile",
        nome: "Fondazione Teatro Stabile – Centro Studi",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Storia del teatro e delle arti performative.",
        email: "centro.studi@teatrostabiletorino.it",
        sito: "https://www.teatrostabiletorino.it/centro-studi/",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },
    {
        id: "fitzcarraldo",
        nome: "Fondazione Fitzcarraldo",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Progettazione, ricerca e formazione nel management culturale.",
        email: "fitzcarraldo@fitzcarraldo.it",
        sito: "https://www.fitzcarraldo.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "ricerca", testo: "Centro Doc" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },
    {
        id: "giorgio-amendola",
        nome: "Fondazione “Giorgio Amendola”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Diffusione della cultura storica, politica e artistica.",
        email: "info@fondazioneamendola.it",
        sito: "https://www.fondazioneamendola.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "museo", testo: "Museo" },
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "istituto-sordi",
        nome: "Fondazione Istituto Sordi di Torino",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Servizi educativi e inclusione per disabilità sensoriali.",
        email: "info@istitutosordi.torino.it",
        sito: "https://www.istitutosordi.torino.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "museo", testo: "Museo" },
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "antonio-gramsci",
        nome: "Fondazione Ist. Piemontese “Antonio Gramsci”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Ricerca storica sulla cultura politica e sociale del Novecento.",
        email: "segreteria@gramscitorino.it",
        sito: "https://www.gramscitorino.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },
    {
        id: "luigi-einaudi",
        nome: "Fondazione “Luigi Einaudi” onlus",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Studi d'eccellenza in campo economico, politico e sociale.",
        email: "segreteria@fondazioneeinaudi.it",
        sito: "https://www.fondazioneeinaudi.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "luigi-firpo",
        nome: "Fondazione “Luigi Firpo”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Ricerca sul pensiero politico e la storia delle idee.",
        email: "info@fondazionefirpo.it",
        sito: "https://www.fondazionefirpo.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "mario-merz",
        nome: "Fondazione “Mario Merz”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Arte contemporanea e valorizzazione dell'opera di Mario e Marisa Merz.",
        email: "info@fondazionemerz.org",
        sito: "https://www.fondazionemerz.org",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "museo", testo: "Museo" },
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "tancredi-di-barolo",
        nome: "Fondazione “Tancredi di Barolo”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Storia dell'illustrazione, del libro per l'infanzia e della scuola.",
        email: "info@fondazionetancredidibarolo.com",
        sito: "https://www.fondazionetancredidibarolo.com",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "museo", testo: "Museo" },
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "vera-nocentini",
        nome: "Fondazione “Vera Nocentini”",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Storia del lavoro, del sindacato e dei movimenti sociali in Piemonte.",
        email: "segreteria@fondazioneveranocentini.it",
        sito: "https://www.fondazioneveranocentini.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },
    {
        id: "istoreto",
        nome: "ISTORETO - \"Giorgio Agosti\"",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Il più vasto patrimonio documentario sulla Resistenza e la società contemporanea a Torino.",
        email: "segreteria@istoreto.it",
        sito: "https://www.istoreto.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "arch", testo: "Archivio" },
            { tipo: "biblio", testo: "Biblioteca" }
        ]
    },
    {
        id: "gaetano-salvemini",
        nome: "Fondazione Gaetano Salvemini",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Studi storici sul pensiero laico, socialista e democratico attraverso archivi dedicati.",
        email: "info@fondazionesalvemini.it",
        sito: "https://www.fondazionesalvemini.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "biblio", testo: "Biblioteca" },
            { tipo: "arch", testo: "Archivio" }
        ]
    },
    {
        id: "ismel",
        nome: "ISMEL",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Coordinamento della memoria industriale, operaia e dei diritti sociali del territorio.",
        email: "info@ismel.it",
        sito: "https://www.ismel.it",
        testoBtn: "Esplora",
        pillole: [{ tipo: "arch", testo: "Archivio" }]
    },
    {
        id: "ancr",
        nome: "ANCR (Archivio Cinematografico)",
        categoria: "fondazioni",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Conservazione e diffusione di filmati d'epoca e testimonianze video sulla Resistenza.",
        email: "info@ancr.to.it",
        sito: "https://www.ancr.to.it",
        testoBtn: "Esplora",
        pillole: [
            { tipo: "arch", testo: "Archivio Visivo" },
            { tipo: "museo", testo: "Mediateca" }
        ]
    },

    // ==========================================
    // ACCADEMIE
    // ==========================================
    {
        id: "accademia-albertina",
        nome: "Accademia Albertina di Belle Arti",
        categoria: "accademie",
        regioni: ["piemonte"],
        province: ["TO"],
        lettera: "A",
        contatti: "011 889020 | protocollo@albertina.academy",
        sito: "https://www.albertina.academy"
    },
    {
        id: "accademia-scienze",
        nome: "Accademia delle Scienze di Torino",
        categoria: "accademie",
        regioni: ["piemonte"],
        province: ["TO"],
        lettera: "S",
        contatti: "011 5620047 | info@accademiadellescienze.it",
        sito: "https://www.accademiadellescienze.it"
    },
    {
        id: "accademia-agricoltura",
        nome: "Accademia di Agricoltura di Torino",
        categoria: "accademie",
        regioni: ["piemonte"],
        province: ["TO"],
        lettera: "G",
        contatti: "011 8123286 | info@accademiadiagricoltura.it",
        sito: "https://www.accademiadiagricoltura.it"
    },
    {
        id: "accademia-medicina",
        nome: "Accademia di Medicina di Torino",
        categoria: "accademie",
        regioni: ["piemonte"],
        province: ["TO"],
        lettera: "M",
        contatti: "011 8174811 | accademia.medicina@unito.it",
        sito: "https://www.accademiadomedicina.unito.it"
    },

    // ==========================================
    // CENTRI DI ORIENTAMENTO E FORMAZIONE
    // ==========================================
    {
        id: "citta-mestieri",
        nome: "Città dei Mestieri",
        categoria: "orientamento",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "info@cittadeimestieri.it",
        sito: "https://www.cittadeimestieri.it"
    },
    {
        id: "casa-carita",
        nome: "Casa di Carità",
        categoria: "orientamento",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Corso Benedetto Brin 26, Torino",
        email: "info@casadicarita.org",
        sito: "https://www.casadicarita.org"
    },
    {
        id: "immaginazione-lavoro",
        nome: "Immaginazione e Lavoro",
        categoria: "orientamento",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "performa@immaginazioneelavoro.it",
        sito: "https://www.immaginazioneelavoro.it"
    },
    {
        id: "enaip-piemonte",
        nome: "Enaip Piemonte",
        categoria: "orientamento",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "info@enaip.piemonte.it",
        sito: "https://www.enaip.piemonte.it"
    },
    {
        id: "casa-lavoro",
        nome: "Casa del Lavoro",
        categoria: "orientamento",
        regioni: ["piemonte"],
        province: ["TO"],
        email: "info@casadellavoro.it",
        sito: "https://www.casadellavoro.it"
    },
    {
        id: "gigroup",
        nome: "GIGROUP",
        categoria: "orientamento",
        regioni: ["piemonte"],
        province: ["TO"],
        focus: "Agenzia per il lavoro",
        email: "Agenzia per il lavoro",
        sito: "https://www.gigroup.it"
    },

    // ==========================================
    // NUOVI ENTI DAL FILE EXCEL (LOMBARDIA & VALLE D'AOSTA)
    // ==========================================
    {
        id: "abibook",
        nome: "Abibook",
        categoria: "cooperative",
        regioni: ["lombardia"],
        province: ["MI"],
        email: "info@abibook.it",
        sito: "https://www.abibook.it/index.php"
    },
    {
        id: "effata",
        nome: "Effatà",
        categoria: "cooperative",
        regioni: ["lombardia"],
        province: ["MI"],
        focus: "Form sul sito ufficiale",
        email: "info@cooperativaeffata.it",
        sito: "https://www.cooperativaeffata.it"
    },
    {
        id: "la-sorgente",
        nome: "La sorgente",
        categoria: "cooperative",
        regioni: ["lombardia", "valle d'aosta"],
        province: ["MI", "AO"],
        email: "personale@lasorgentecooperativa.it / lasorgente@lasorgente.it",
        sito: "https://www.lasorgentecooperativa.it"
    },
    {
        id: "socioculturale",
        nome: "Socioculturale",
        categoria: "cooperative",
        regioni: ["lombardia"],
        province: ["MI"],
        email: "info@socioculturale.it ; milano@socioculturale.it",
        sito: "https://socioculturale.it"
    },
    {
        id: "lindice",
        nome: "L'indice",
        categoria: "cooperative",
        regioni: ["lombardia"],
        province: ["MI"],
        email: "lindice@cooplindice.it",
        sito: "http://www.cooplindice.it"
    },
    {
        id: "zeroventi",
        nome: "Zeroventi",
        categoria: "cooperative",
        regioni: ["lombardia"],
        province: ["MI"],
        email: "Contatto non specificato",
        sito: "#"
    },
    {
        id: "albaron",
        nome: "Albaron",
        categoria: "cooperative",
        regioni: ["lombardia"],
        province: ["MI"],
        email: "Contatto non specificato",
        sito: "#"
    }
];
