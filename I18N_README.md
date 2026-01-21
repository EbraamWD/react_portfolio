# Sistema di Internazionalizzazione (i18n)

## Overview
Il portfolio supporta ora due lingue: **Inglese (EN)** e **Italiano (IT)**.
La lingua predefinita è l'inglese.

## Struttura

### 1. Context (`src/contexts/LanguageContext.jsx`)
- Gestisce lo stato globale della lingua
- Salva la preferenza nel localStorage
- Fornisce la funzione `toggleLanguage()` per cambiare lingua

### 2. Traduzioni (`src/translations/translations.js`)
- Contiene tutte le traduzioni organizzate per sezione
- Struttura: `translations[lingua][sezione][chiave]`
- Hook `useTranslation(language)` per accedere alle traduzioni

### 3. Header
- Selettore di lingua nell'header (desktop e mobile)
- Icona Globe con bottoni EN | IT
- Stile coerente con il design esistente

## Come usare le traduzioni in un componente

```jsx
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useTranslation } from '../../translations/translations.js';

export function MyComponent() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div>
      <h1>{t.mySection.title}</h1>
      <p>{t.mySection.description}</p>
    </div>
  );
}
```

## Aggiungere nuove traduzioni

1. Apri `src/translations/translations.js`
2. Aggiungi le chiavi in entrambe le lingue (en e it):

```javascript
export const translations = {
  en: {
    newSection: {
      title: 'English Title',
      description: 'English Description',
    },
  },
  it: {
    newSection: {
      title: 'Titolo Italiano',
      description: 'Descrizione Italiana',
    },
  },
};
```

## Sezioni attualmente tradotte

- ✅ Header (navigazione)
- ✅ Hero Section
- ✅ Skills Section
- ⏳ Projects Section (da completare)
- ⏳ How It Works Section (da completare)
- ⏳ Services Section (da completare)
- ⏳ Contact Section (da completare)

## Note
- La lingua viene salvata nel localStorage
- La lingua predefinita è l'inglese
- Il cambio lingua è immediato e non richiede refresh della pagina
