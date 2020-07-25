import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            'Welcome!': 'Welcome!',
            'Password': 'Password',
            'survey instructions': 'If you are an approved prescriber, fill out this form to write a "prescription" for an individual to receive cash assistance.',
            'select prescriber': 'Please select the CBO caseworker who is writing the prescription:',
            'select health center': 'Please select the health center location for pick-up:',
            'applicant info': '1. Applicant Information: ',
            'applicant description': 'The applicant refers to the person who will receive the prescription for the 4-CT Card.',
            'applicant phone': 'What is the best telephone number for the health center to reach the applicant to make an appointment? (format: XXX-XXX-XXXX)  ',
            'applicant age': 'Applicant Age:  ',
            'applicant gender': 'Applicant Gender:  ',
            'applicant language': 'What is the preferred language of the applicant?  ',
            'household info': '2. Household Information: ',
            'household description': 'El solicitante se refiere a la persona que recibirá la prescripción de la tarjeta 4-CT.',
            'household size': 'El solicitante se refiere a la persona que recibirá la prescripción de la tarjeta 4-CT.',
            'household families': 'How many families live in the household?  ',
            'household zipcode': "What is the zip code for the Applicant's household?  ",
            'household spousal status': 'Does the applicant live with an immediate family member (spouse or partner) who has a different immigration status?  ',
            'use of funds': '3. Use of Funds:',
            'use of funds disclaimer': 'This is just a best guess, distribution of the card will not be affected by these answers.  ',
            'use of funds question': 'How will the applicant/household use the money? Please select all that apply:  ',
        }
    },
    sp: {
        translation: {
            'Welcome!': '¡Bienvenido!',
            'Password': 'Contraseña',
            'survey instructions': 'Si usted es un recetador aprobado, por favor llene este formulario para escribir una prescripción de asistencia en efectivo.',
            'select prescriber': 'Por favor seleccione el trabajador social de la organización comunitaria (CBO) que está escribiendo la prescripción:',
            'select health center': 'Por favor seleccione el centro de salud para recoger la asistencia:',
            'applicant info': '1. Información del Solicitante: ',
            'applicant description': 'El solicitante se refiere a la persona que recibirá la prescripción de la tarjeta 4-CT.',
            'applicant phone': '¿Cuál es el número de teléfono más adecuado para que el centro de salud se comunique con el solicitante y le haga una cita? (el formato: XXX-XXX-XXXX)  ',
            'applicant age': 'Edad del Solicitante:  ',
            'applicant gender': 'Género del Solicitante:  ',
            'applicant language': '¿Cuál es la lengua preferida del solicitante?  ',
            'household info': '2. Información de su Hogar: ',
            'household size': 'El solicitante se refiere a la persona que recibirá la prescripción de la tarjeta 4-CT.',
            'household families': '¿Cuantas familias hay en su hogar?  ',
            'household zipcode': "¿Cuál es el código postal de la vivienda del solicitante?  ",
            'household spousal status': '¿Vive el solicitante con una esposa o marido quien tiene un estatus migratorio distinto que el suyo?  ',
            'use of funds': '3. El Uso del Dinero:',
            'use of funds disclaimer': 'Esta es solo una suposición y la tarjeta no será restringida por estas respuestas.',
            'use of funds question': '¿Para qué usará el solicitante/su lugar de domicilio el dinero? Por favor indique todas las categorías que apliquen:  ',

        }
    }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
    lng: 'en',
    fallbackLng: 'en'
  });

export default i18n;