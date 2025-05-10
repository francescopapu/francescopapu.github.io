---
title: riparare un cavo a nastro danneggiato
---

### introduzione

Il mio Home Lab ha la possibilità di collegare un SSD NVME ed un disco SATA, tramite una interfaccia che presenta un cavo a nastro (in inglese "ribbon cable"). Tale interfaccia è il modello "*902746-001 HDD SATA MGE 16/51 Rev A*", facilmente rimpiazzabile e reperibile online. In questo post vi condivido come ho riparato un danno che ne comprometteva il corretto funzionamento.

#### il problema

Il cavo è integro dal punto di vista di piste elettriche (presenti sulla parte bianca del cavo) ma il nastro di protezione al di sopra di esse (di colore blu) si è spezzato, esponendo le piste elettriche. A causa della polvere e dei detriti, possono crearsi corto circuiti sulle piste elettriche portando a malfunzionamenti del cavo. Il cavo si presenta come nell'immagine seguente.
A causa dei malfunzionamenti dovuti ai detriti che si posano sulle piste, in questo caso, il mio Home Lab non rilevava alcun Hard Disk SATA collegato.

#### la soluzione

Per prima cosa ho dato una spolverata alle piste del cavo con un getto d'aria. Successivamente ho preso della guaina termorestringente (in inglese "heat shrink tube") della dimensione adeguata e l'ho applicata sul cavo in modo da coprire entrambe le sezioni di nastro di protezione. Nella seguente immagine è mostrato come si presenta il cavo prima di imprimere la forma con il calore.



A questo punto ho applicato del calore con un accendino per pochi secondi in modo da non danneggiare il cavo e la guaina. Di seguito come si presenta il cavo una volta impressa la forma.



Le piste elettriche sono ora protette ed il cavo è rimasto flessibile.

#### il risultato

Una volta ricollegato il cavo sulla scheda madre, possiamo ricollegare anche il nostro disco SATA all'interfaccia. Eseguendo il comando lsblkvediamo il disco come partizione sda1.
