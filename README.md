
# Documentazione Sito Statico

## Prerequisiti
La configurazione del sito è stata effettuata su Windows. 
È necessario installare i seguenti programmi:

 - Git
 - Github Desktop
 - Node.js
 - Go Programming Language
 - Notepad++ (opzionale)

Una volta installati e configurati tali programmi, è necessario eseguire il seguente comando su Powershell (Windows Terminal) al fine di installare Hugo globalmente:

    winget install Hugo.Hugo.Extended

Hugo è il framework su cui si basa questo sito statico.
Successivamente è necessario installare il pacchetto 'npm' relativo a 'tinacms', eseguendo il seguente comando su Powershell:

    npm i tinacms
TinaCMS viene utilizzato come CMS per questo sito statico.
Una volta terminate queste configurazioni, è possibile clonare il repository in locale.
## Configurazione Iniziale
### Configurazione Hugo & Blowfish
Il sito è stato configurato con Hugo, in particolare con il tema 'Blowfish'. La configurazione iniziale del sito è stata effettuata seguendo le indicazioni fornite nella [pagina di installazione di Blowfish](https://blowfish.page/docs/installation/). In particolare sono stati eseguiti i seguenti comandi da Powershell:

    # Installazione toolkit blowfish
    npx blowfish-tools 
    # Creazione di un nuovo sito 'website' in una cartella omonima
    blowfish-tools new website 
    # Naviga all'interno della cartella appena creata
    cd website 
    # Aggiunta di blowfish come 'submodule'
    git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish 
Il 'submodule' permette di ottenere la versione più recente del tema Blowfish.
Dopo aver effettuato questi passaggi, è stato possibile configurare TinaCMS.
### Inizializzazione TinaCMS
Per inizializzare il backend di TinaCMS è stato eseguito il seguente comando:

    npx tinacms init backend
A questo comando seguono una serie di indicazioni a schermo che è necessario fornire. Il sito è stato:
 - Costruito con Hugo
 - Utilizzando NPM
 - Utilizzando TinaCloud

Il resto delle informazioni richieste è possibile reperirle da TinaCloud. Al termine della configurazione, TinaCMS ci fornirà 3 informazioni chiave da inserire tra i secrets impostazioni del repository Github, che serviranno per la fase di build e deploy. Tali secret sono anche presenti in un file '.env' locale, non presente su nel repository.
### Build e Deploy
Per buildare in 'dev' correttamente è necessario farlo tramite il seguente comando:

    npx tinacms dev -c "hugo --minify --baseURL https://francescopapu.github.io/"
Una volta fatto questo, è stato pushato il contenuto su Github.
Viene utilizzato Github Actions per il build e deploy in 'production', in particolare un workflow chiamato 'gh-pages-mod.yml'. Tale file è basato su esempi trovati online, in particolare:
 - per la parte di TinaCMS è stato utilizzato [questo documento](https://tina.io/docs/tinacloud/deployment-options/github-pages).
 - per la parte relativa ad Hugo è stato utilizzato [questo documento](https://gohugo.io/host-and-deploy/host-on-github-pages/#article).

## Manutenzione
### Aggiornamento dei Componenti
Per l'aggiornamento di Hugo, è necessario installare la versione più recente
Per l'aggiornamento di Blowfish, è sufficiente eseguire il seguente comando nella radice del repository:

    git submodule update --remote --merge
    # oppure
    hugo mod get -u
Una volta fatto questo, è necessario verificare per ulteriori configurazioni da aggiornare nei file di Hugo o Blowfish.
Per l'aggiornamento di TinaCMS è sufficiente eseguire i seguenti comandi nella cartella del repository dove si trovano i file del sito, nel mio caso 'website' (qui è presente anche la cartella 'tina'):

    # Aggiornamento pacchetto tinacms
    npm install tinacms @tinacms/cli@latest
    # Inizializzazione backend TinaCMS
    npx tinacms init backend
Seguendo eventuali istruzioni fornite via CLI.

### Aggiornamento Github Actions / Workflows
Come conseguenza degli aggiornamenti ad Hugo, TinaCMS, Blowfish (etc.) è necessario manutenere il file 'gh-pages-mod.yml'. In particolare, va tenuto traccia di eventuali cambiamenti nella versione di Hugo (attualmente, v0.165.0) e delle varie Github Actions usate nel workflow.