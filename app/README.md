# VOZIO – samostatná mobilná aplikácia

Toto je oddelený projekt. Súbory webu v koreňovom priečinku repozitára sa nemenia.

## Čo obsahuje
- samostatné mobilné rozhranie v čierno-žltom štýle VOZIO,
- spodnú navigáciu: Domov, Marketplace, Drive, Nástroje, Profil,
- vyhľadávanie a filtrovanie ukážkových vozidiel,
- lokálne vytváranie inzerátov uložených v zariadení,
- jednoduchý Drive Meter,
- informačnú OBD-II obrazovku (skutočné Bluetooth spojenie ešte nie je implementované).

## Spustenie
Vyžaduje Node.js 20+ a Android Studio (Android) alebo Xcode na Macu (iOS).

```sh
cd app
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Pre iOS na Macu namiesto Android kroku:
```sh
npx cap add ios
npx cap sync ios
npx cap open ios
```

Potom spusti projekt v Android Studio alebo Xcode. Webová stránka v koreňovom priečinku ostáva samostatná a nedotknutá.

## Stav
Toto je prvá funkčná aplikácia/prototyp s lokálnymi ukážkovými dátami. Inzeráty zatiaľ nie sú synchronizované so serverom, pridanie fotiek, používateľské účty, mapové trasy a komunikácia s OBD-II adaptérom potrebujú ďalšiu implementáciu. Build nebol v tomto prostredí spustený.
