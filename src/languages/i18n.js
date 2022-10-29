import i18next from 'i18next';
import english from "./English.json";
import sinhala from "./Sinhala.json";

import {initReactI18next} from 'react-i18next';
 
i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3', 
    lng:'en',
    resources:{
        en:english,
        si:sinhala
    },
    react:{
        useSuspense:false
    },
});

export default i18next;