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
            'Male': 'Male',
            'Female': 'Female',
            'Prefer Not to Say': 'Prefer Not to Say',
            'applicant language': 'What is the preferred language of the applicant?  ',
            'household info': '2. Household Information: ',
            'household size': 'What is the size of the household?  ',
            'household families': 'How many families live in the household?  ',
            'household zipcode': "What is the zip code for the Applicant's household?  ",
            'household spousal status': 'Does the applicant live with an immediate family member (spouse or partner) who has a different immigration status?  ',
            'yes': 'Yes',
            'no': 'No',
            'maybe': 'Maybe',
            'use of funds': '3. Use of Funds:',
            'use of funds disclaimer': 'This is just a best guess, distribution of the card will not be affected by these answers.  ',
            'use of funds question': 'How will the applicant/household use the money? Please select all that apply:  ',
            'Food': 'Food',
            'Housing': 'Housing',
            'Medicine': 'Medicine',
            'Childcare': 'Childcare',
            'Utilities': 'Utilities',
            'Transportation': 'Transportation',
            'Education': 'Education',
            'Clothing': 'Clothing',
            'Other': 'Other',
            'covid impacts': '4. COVID-19 Impacts:',
            'covid impacts question': 'Has anyone in the household experienced any of the following impacts of COVID-19? Please select all that apply:  ',
            'Job Loss': 'Lost job due to COVID-19',
            'Income Reduction': 'Reduced income due to COVID-19',
            'Essential Worker': 'Deemed an essential worker',
            'COVID Symptoms': 'Symptoms of COVID-19',
            'COVID Test': 'Tested for COVID-19',
            'COVID Diagnosis': 'Diagnosed with COVID-19',
            'COVID Hospitalization': 'Hospitalized with COVID-19',
            'COVID Fatality': 'Passed away due to COVID-19',
            'doctor visits': '5. Healthcare Interactions:',
            'doctor visits question': 'Where do you/your family most often see a doctor now?  ',
            'Hospital ER': 'Hospital ER',
            'Community Health Center': 'Community Health Center',
            'Walk-in Clinic': 'Walk-in Clinic',
            "Doctor's Office": "Doctor's Office",
            'None of the Above': 'None of the Above',
            'household members': '6. Household Members',
            'household members description': 'This section does not refer the applicant, only other members of the household.  ',
            'add member': 'Add Member',
            'remove member': 'Remove Member',
            'age': 'Age:  ',
            'gender': 'Gender:  ',
            'notes': '7. Notes',
            'notes description': 'Please share why you have selected this person. And, add any additional information the health center should be aware of (e.g. What time is best to call for appointment).',
            'notes placeholder': 'Enter any notes or comments you have here...',
            'submit': 'Submit',
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
            'Male': 'Masculino',
            'Female': 'Feminino',
            'Prefer Not to Say': 'Prefiero no decirlo',
            'applicant language': '¿Cuál es la lengua preferida del solicitante?  ',
            'household info': '2. Información de su Hogar: ',
            'household size': '¿Cuantas personas hay en su hogar?  ',
            'household families': '¿Cuantas familias hay en su hogar?  ',
            'household zipcode': "¿Cuál es el código postal de la vivienda del solicitante?  ",
            'household spousal status': '¿Vive el solicitante con una esposa o marido quien tiene un estatus migratorio distinto que el suyo?  ',
            'yes': 'Sí',
            'no': 'No',
            'maybe': 'Tal vez',
            'use of funds': '3. Uso del Dinero:',
            'use of funds disclaimer': 'Esta es solo una suposición y la tarjeta no será restringida por estas respuestas.',
            'use of funds question': '¿Para qué usará el solicitante/su lugar de domicilio el dinero? Por favor indique todas las categorías que apliquen:  ',
            'Food': 'Los Alimentos',
            'Housing': 'La Vivienda',
            'Medicine': 'Las Medicinas',
            'Childcare': 'El Cuidado de los Niños',
            'Utilities': 'Los Servicios Públicos',
            'Transportation': 'El Transporte',
            'Education': 'La Educación',
            'Clothing': 'La Ropa',
            'Other': 'Otra',
            'covid impacts': '4. Impactos de COVID-19:',
            'covid impacts question': '¿Alguién en su hogar ha sido afectado por cualquiera de estas situaciones? Por favor indique todas las categorías que apliquen:  ',
            'Job Loss': 'Ha perdido el empleo debido a COVID-19',
            'Income Reduction': 'Caída de ingresos por COVID-19',
            'Essential Worker': 'Se considera un empleado esencial',
            'COVID Symptoms': 'Ha tenido síntomas de COVID-19',
            'COVID Test': 'Se ha sometido a prueba por COVID-19',
            'COVID Diagnosis': 'Se ha diagnosticado con COVID-19',
            'COVID Hospitalization': 'Ha estado hospitalizado por causa de COVID-19',
            'COVID Fatality': 'Ha fallecido por causa de COVID-19',
            'doctor visits': '5. Interacciones con Organizaciones de la Salud',
            'doctor visits question': '¿Dónde usted o su familia consultan a un médico ahora?',
            'Hospital ER': 'La sala de urgencias de un hospital',
            'Community Health Center': 'Un centro de salud comunitario',
            'Walk-in Clinic': 'Una clínica ambulatoria',
            "Doctor's Office": 'Un consultorio médico',
            'None of the Above': 'Ninguno de los anteriores',
            'household members': '6. Miembros del Hogar',
            'household members description': 'Estas preguntas no se refieren al solicitante, sino a otros miembros del hogar.  ',
            'add member': 'Añadir Miembro',
            'remove member': 'Quitar Miembro',
            'age': 'Edad:  ',
            'gender': 'Género:  ',
            'notes': '7. Notas',
            'notes description': 'Por favor, comparta por qué seleccionó a esta persona y agregue cualquier información adicional que el centro de salud debe tener en cuenta.',
            'notes placeholder': 'Comparta cualquier notas o comentarios addicionales aquí...',
            'submit': 'Enviar',
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