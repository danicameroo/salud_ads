import ArtIdDos from "./Componentes/artId/ArtIdDos";
import ArtIdUno from "./Componentes/artId/ArtIdUno";
import ArtIdCuatro from "./Componentes/artId/ArtIdCuatro";
import ArtIdDoce from "./Componentes/artId/ArtIdDoce";
import ArtIdTreceUno from "./Componentes/artId/ArtIdTrece/ArtIdTreceUno";
import ArtIdCatorceUno from "./Componentes/artId/ArtIdCatorce/ArtIdCatorceUno";
import ArtIdDiesiseisUno from "./Componentes/artId/ArtIdDiesiseis/ArtIdDiesiseisUno";
import ArtIdDiecinueveUno from "./Componentes/artId/ArtIdDiecinueve/ArtIdDiecinueveUno";
import ArtIdUnoIMG from './img/ArtIdUno.webp'
import ArtIdDosIMG from './img/ArtIdDos.webp'
import ArtIdTresIMG from './img/ArtIdTres.webp'
import ArtIdCuatroIMG from './img/ArtIdCuatro.webp'
import ArtIdCincoIMG from './img/ArtIdCinco.webp'
import ArtIdSeisIMG from './img/ArtIdSeis.webp'
import ArtIdSieteIMG from './img/ArtIdSiete.webp'
import ArtIdOchoIMG from './img/ArtIdOcho.webp'
import ArtIdNueveIMG from './img/ArtIdNueve.webp'
import ArtIdDiezIMG from './img/ArtIdDiez.webp'
import ArtIdOnceIMG from './img/ArtIdOnce.webp'
import ArtIdDoceIMG from './img/ArtIdDoce.webp'
import ArtIdTreceIMG from './img/ArtIdTrece.webp'
import ArtIdCatorceIMG from './img/ArtIdCatorce.webp'
import ArtIdQuinceIMG from './img/ArtIdQuince.webp'
import ArtIdDiesiseisIMG from './img/ArtIdDiesiseis.webp'
import ArtIdDiecisieteIMG from './img/ArtIdDiecisiete.webp'
import ArtIdDieciochoIMG from './img/ArtIdDieciocho.webp'
import ArtIdDiecinueveIMG from './img/ArtIdDiecinueve.webp'
import ArtIdVeinteIMG from './img/ArtIdVeinte.webp'
import ArtIdVeintiunoIMG from './img/ArtIdVeintiuno.webp'
import ArtIdVeintidosIMG from './img/ArtIdVeintidos.webp'
import ArtIdCinco from "./Componentes/artId/ArtIdCinco";
import ArtIdSeisUno from "./Componentes/artId/ArtIdSeis/ArtIdSeisUno";
import ArtIdNueveUno from "./Componentes/artId/ArtIdNueve/ArtIdNueveUno";
import ArtIdDiez from "./Componentes/artId/ArtIdDiez";
import ArtIdDieciocho from "./Componentes/artId/ArtIdDieciocho";
import ArtIdQuince from "./Componentes/artId/ArtIdQuince";
import ArtIdTres from "./Componentes/artId/ArtIdTres";
import ArtIdSiete from "./Componentes/artId/ArtIdSiete";
import ArtIdOcho from "./Componentes/artId/ArtIdOcho";
import ArtIdOnce from "./Componentes/artId/ArtIdOnce";
import ArtIdDiecisiete from "./Componentes/artId/ArtIdDiecisiete";
import ArtIdVeinte from "./Componentes/artId/ArtIdVeinte";
import ArtIdVeintiuno from "./Componentes/artId/ArtIdVeintiuno";
import ArtIdVeintidos from "./Componentes/artId/ArtIdVeintidos";

export const datacategories = [
//GYM

    //Como ganar masa muscular en piernas y gluteos
    {
        artID: 1,
        alt: "Mujer levantando pesas",
        id: "masa-muscular-en-piernas-y-gluteos",
        img: ArtIdUnoIMG,
        title: "Aumentar masa muscular en piernas y glúteos: Entrenamiento, alimentación y consejos",
        titleSEO: "Cómo Aumentar Masa Muscular en PIERNAS y GLÚTEOS | FitKnow",
        categorie: ["Entrenamiento"],
        subcategorie: ["Masa muscular"],
        content: "Descubre como aumenta masa muscular en piernas y glúteos con entrenamiento, consejos sobre como entrenar y como debes alimentarte",
        articulo: [ <ArtIdUno /> ]
    },
    //Como adquirir masa muscular despues de los 50
    {
        artID: 2,
        alt: "Adulto haciendo ejercicio",
        id: "adquirir-masa-muscular-a-los-50",
        img: ArtIdDosIMG,
        title: "¿Cómo ganar masa muscular después de los 50 años?: Entrenamiento, alimentación y consejos",
        titleSEO: "Cómo Aumentar Masa Muscular después de los 50 Años | FitKnow",
        categorie: ["Entrenamiento", "Bienestar"],
        subcategorie: ["Masa muscular", "Salud"],
        articulo: [ <ArtIdDos />] ,
        content: "Estrategias clave para ganar masa muscular después de los 50: entrenamiento de fuerza, ingesta de proteínas, enfoque en técnica, control del estrés y mucho mas.",
    },
    //Tips para aumentar masa muscular
    {
        artID: 3,
        alt: "Hombre levantando pesas",
        id: "Tips-para-aumentar-masa-muscular",
        img: ArtIdTresIMG,
        title: "6 tips claves para aumentar masa muscular rapidamente",
        titleSEO: "6 Consejos para Aumentar Masa Muscular RÁPIDO | FitKnow",
        categorie: ["Entrenamiento"],
        subcategorie: ["Masa muscular", "Salud"],
        content: "6 consejos clave para aumentar la masa muscular: entrenamiento de fuerza frecuente, ejercicios compuestos, cargas moderadas, ritmo lento, alimentación rica en proteínas y buen descanso.",
        articulo: [ <ArtIdTres />]
    },
    //Que ejercicios hacer para perder grasa
    {
        artID: 4,
        alt: "Mujer haciendo ejercicio",
        id: "ejercicios-para-perder-grasa",
        img: ArtIdCuatroIMG,
        title: "¿Que ejercicios hacer para perder grasa corporal?",
        titleSEO: "Guía de EJERCICIOS para Perder GRASA CORPORAL | FitKnow",
        categorie: ["Entrenamiento"],
        subcategorie: ["Salud", "Perdida de peso"],
        content: "Ejercicios clave para quemar grasa: burpees, saltar a la cuerda, running, sentadillas, peso muerto, press de hombros. Beneficios: aumenta gasto energético, efecto termogénico y mejora composición corporal.",
        articulo: [ <ArtIdCuatro />  ]
    },
    //Es bueno hacer ejercicio en ayunas
    {
        artID: 5,
        alt: "Mujer haciendo ejercicio",
        id: "actividad-fisica-en-ayunas",
        img: ArtIdCincoIMG,
        title: "¿Es bueno hacer actividad física en ayunas?",
        titleSEO: "Hacer Actividad Física en AYUNAS ¿Bueno o Malo? | FitKnow",
        categorie: ["Entrenamiento", "Bienestar"],
        subcategorie: ["Salud", "Perdida de peso"],
        content: "La actividad física en ayunas puede potenciar la quema de grasa, pero también conlleva riesgos como menor rendimiento y mayor pérdida de músculo. Descubre aquí todos los beneficios, consejos y riesgos.",
        articulo: [ <ArtIdCinco /> ]
    },
    //Como evitar el estancamiento en la perdida de peso
    {
        artID: 6,
        alt: "Mujer haciendo ejercicio",
        id: "evitar-el-estancamiento-en-perdida-de-peso",
        img: ArtIdSeisIMG,
        title: "¿Como evitar el estancamiento en la perdida de peso?",
        titleSEO: "Descubre Cómo Evitar el Estancamiento en la PÉRDIDA de PESO | FitKnow",
        categorie: ["Entrenamiento", "Bienestar"],
        subcategorie: ["Perdida de peso"],
        content: "Descubre cómo evitar el estancamiento en la pérdida de peso: establece objetivos realistas, lleva registro de tu dieta y mantén una rutina de ejercicios equilibrada.",
        articulo: [ <ArtIdSeisUno /> ]
    },
    //Los Principales Beneficios de la Práctica del Yoga
    {
        artID: 7,
        alt: "Mujer haciendo yoga",
        id: "beneficios-del-yoga",
        img: ArtIdSieteIMG,
        title: "Beneficios de la práctica del yoga en tu vida",
        titleSEO: "7 Beneficios del YOGA en tu Vida | FitKnow",
        categorie: ["Entrenamiento", "Bienestar"],
        subcategorie: ["Perdida de peso", "Salud"],
        content: "Según diversos estudios, la práctica regular de yoga ofrece múltiples beneficios: reduce el estrés y la ansiedad, alivia síntomas de artritis, fortalece huesos y músculos, mejora la salud cardiovascular y ayuda a quemar calorías.",
        articulo: [ <ArtIdSiete /> ]
    },
    //Por qué  es importante el deporte en el desarrollo de los niños
    {
        artID: 8,
        alt: "niños jugando pelota",
        id: "importancia-del-deporte-en-los-ninos",
        img: ArtIdOchoIMG,
        title: "Importancia del deporte en el desarrollo de los niños",
        titleSEO: "Cómo Influye el DEPORTE en el Desarrollo de los Niños | FitKnow",
        categorie: ["Entrenamiento", "Bienestar"],
        subcategorie: ["Salud"],
        content: "El deporte beneficia el desarrollo físico, mental y social de los niños, fomentando hábitos saludables, habilidades sociales y mejorando el rendimiento académico.",
        articulo: [ <ArtIdOcho /> ]
    },
    //Ejercicios recomendados y contraindicados para mujeres embarazadas
    {
        artID: 9,
        alt: "Mujer embarazada haciendo ejercicio",
        id: "ejercicios-para-mujeres-embarazadas",
        img: ArtIdNueveIMG,
        title: "Ejercicios recomendados y contraindicados para mujeres embarazadas",
        titleSEO: "¿Cuáles EJERCICIOS Hacer en el Embarazo? [IMPORTANCIA] | FitKnow",
        categorie: ["Entrenamiento", "Bienestar"],
        subcategorie: ["Salud"],
        content: "Ejercicios recomendados y contraindicados para mujeres embarazadas: Rutina completa que optimiza beneficios y seguridad.",
        articulo: [ <ArtIdNueveUno /> ]
    },
    //Cómo el ejercicio fortalece el sistema inmunológico
    {
        artID: 10,
        alt: "Mujer haciendo ejercicio",
        id: "Actividad-fisica-para-sistema-inmunologico",
        img: ArtIdDiezIMG,
        title: "Actividad física para fortalecer el sistema inmunológico",
        titleSEO: "Cómo la Actividad Física Fortalece el SISTEMA INMUNOLÓGICO | FitKnow",
        categorie: ["Entrenamiento", "Bienestar"],
        subcategorie: ["Salud"],
        content: "La actividad física fortalece el sistema inmunológico al mejorar la circulación, producción de citoquinas y reducir el estrés. Las mejores actividades son ejercicios cardiovasculares y de fortalecimiento muscular.",
        articulo: [<ArtIdDiez />]
    },
    //Beneficios del ejercicio durante el embarazo
    {
        artID: 11,
        alt: "Mujer embarazada haciendo ejercicio",
        id: "beneficios-del-ejercicio-durante-el-embarazo",
        img: ArtIdOnceIMG,
        title: "Beneficios del ejercicio durante el embarazo",
        titleSEO: "6 Beneficios del EJERCICIO Durante el EMBARAZO | FitKnow",
        categorie: ["Entrenamiento", "Bienestar"],
        content: "El ejercicio durante el embarazo fortalece el sistema inmunológico, mejora la circulación sanguínea, reduce el estrés, aumenta las células inmunes y mejora el sueño y el control de peso, aportando beneficios a la salud de la madre y el bebé.",
        subcategorie: ["Salud"],
        articulo: [ <ArtIdOnce />]
    },
    //Cuánta agua debería beber cada día
    {
        artID: 12,
        alt: "Mujer bebiendo agua",
        id: "cuanta-agua-beber-cada-dia",
        img: ArtIdDoceIMG,
        title: "¿Cuánta agua debemos beber cada día?",
        titleSEO: "¿Cuánta AGUA debes Beber cada Día? [IMPORTANCIA Y CONSEJOS] | FitKnow",
        categorie: ["Nutricion", "Bienestar"],
        subcategorie: ["Salud"],
        content: "Recomendación diaria de agua que debemos beber: 15,5 tazas (3,7 litros) para hombres y 11,5 tazas (2,7 litros) para mujeres sanos.",
        articulo: [ <ArtIdDoce /> ]
    },
    //Cómo aumentar la hemoglobina
    {
        artID: 13,
        alt: "desayuno",
        id: "aumentar-la-hemoglobina",
        img: ArtIdTreceIMG,
        title: "Como aumentar la hemoglobina con la alimentación: Consejos y alimentos",
        titleSEO: "Guía para Mejorar la HEMOGLOBINA con la Alimentación | FitKnow",
        categorie: ["Nutricion", "Bienestar"],
        subcategorie: ["Salud"],
        content: "Aumenta tus niveles de hemoglobina con una dieta rica en hierro, folato y vitaminas que mejoran la absorción, como la vitamina C y el betacaroteno. Incluye carnes, legumbres, verduras de hoja verde, frutas cítricas y evita inhibidores como el café y la leche.",
        articulo: [ <ArtIdTreceUno /> ]
    },
    //5 ideas de desayuno altas en proteína
    {
        artID: 14,
        alt: "desayuno",
        id: "recetas-desayunos-altos-en-proteina",
        img: ArtIdCatorceIMG,
        title: "7 Recetas de desayunos altos en proteína",
        titleSEO: "7 RECETAS de DESAYUNOS Altos en PROTEÍNAS [+30g de PROTEÍNA] | FitKnow",
        categorie: ["Nutricion", "Recetas"],
        subcategorie: ["Altos en proteínas", "Desayuno"],
        content: "Disfruta de 7 recetas altas en proteína para tu desayuno de mas de 30g de proteína, desde huevos y espinacas hasta croquetas keto de jamón. ¡Comienza tu día cargado de energía!",
        articulo: [ <ArtIdCatorceUno /> ]
    },
    //Alimentos ricos en proteínas
    {
        artID: 15,
        alt: "almuerzo",
        id: "alimentos-altos-en-proteinas",
        img: ArtIdQuinceIMG,
        title: "Lista de alimentos altos en proteínas y su importancia",
        titleSEO: "Lista de Alimentos Altos en PROTEÍNAS [IMPORTANCIA] | FitKnow",
        categorie: ["Nutricion"],
        subcategorie: ["Altos en proteínas", "Salud"],
        content: "Lista completa de alimentos altos en proteínas y su importancia para mantener una dieta equilibrada y salud óptima.",
        articulo: [<ArtIdQuince />]
    },
    //4 ideas de postres saludable
    {
        artID: 16,
        alt: "trufas",
        id: "recetas-de-postres-saludable",
        img: ArtIdDiesiseisIMG,
        title: "5 recetas de postres saludables",
        titleSEO: "5 RECETAS de POSTRES SALUDABLES [FÁCIL Y RÁPIDO] | FitKnow",
        categorie: ["Nutricion", "Recetas"],
        subcategorie: ["Baja en calorias", "Postres"],
        content: "5 recetas de postres saludables con ingredientes naturales y bajos en azúcar y grasa, para disfrutar de los sabores tradicionales sin comprometer la salud.",
        articulo: [ <ArtIdDiesiseisUno /> ]
    },
    //Alimentos antiinflamatorios y saludables
    {
        artID: 17,
        alt: "Medida del abdomen",
        id: "alimentos-antiinflamatorios-saludables",
        img: ArtIdDiecisieteIMG,
        title: "Los 10 mejores alimentos antiinflamatorios y saludables",
        titleSEO: "Los 10 Mejores Alimentos ANTIINFLAMATORIOS [EXPLICACIÓN Y USO] | FitKnow",
        categorie: ["Nutricion"],
        subcategorie: ["Salud", 'Baja en calorias'],
        content: "Los 10 mejores alimentos antiinflamatorios y saludables: pescados azules, brócoli y crucíferas, té verde, cúrcuma, frutos rojos, jengibre, aceite de oliva, remolacha, pimientos, ajo y cebolla - ricos en nutrientes y compuestos bioactivos con propiedades antiinflamatorias.",
        articulo: [ <ArtIdDiecisiete /> ]
    },
    //Qué es más recomendable tomar: ¿Creatina o Proteína?
    {
        artID: 18,
        alt: "Batido de proteina",
        id: "recomendacion-creatina-o-proteina",
        img: ArtIdDieciochoIMG,
        title: "Qué suplemento es más recomendable tomar: ¿Creatina o Proteína en polvo?",
        titleSEO: "¿Cuál Suplemento debes Tomar, CREATINA o PROTEÍNA en POLVO? [USO]| FitKnow",
        categorie: ["Nutricion"],
        subcategorie: ["Salud", 'Altos en proteínas'],
        content: "Suplementos de creatina y proteína en polvo: ¿Cuál es mejor para aumentar fuerza y masa muscular? Guía completa sobre los beneficios, uso y combinación de estos suplementos.",
        articulo: [<ArtIdDieciocho />]
    },
    //4 ideas de almuerzos altos en proteínas
    {
        artID: 19,
        alt: "almuerzo",
        id: "recetas-de-almuerzos-altos-en-proteinas",
        img: ArtIdDiecinueveIMG,
        title: "4 recetas de almuerzos altos en proteínas",
        titleSEO: "4 RECETAS de Almuerzos Altos en PROTEÍNAS [hasta 75g PROTEÍNA]| FitKnow",
        categorie: ["Nutricion", "Recetas"],
        subcategorie: ["Altos en proteínas", "Almuerzo"],
        content: "Recetas de almuerzos ricos en proteínas: opciones deliciosas y nutritivas para mejorar el rendimiento y mantener un estilo de vida saludable.",
        articulo: [<ArtIdDiecinueveUno />]
    },
    //receta-de-almuerzo-para-bajar-de-peso
    {
        artID: 20,
        alt: "almuerzo",
        id: "receta-de-almuerzo-para-bajar-de-peso",
        img: ArtIdVeinteIMG,
        title: "Almuerzo para bajar de peso: Ensalada de Quinoa y Verduras Asadas",
        titleSEO: "Receta de almuerzo: Una Opción Saludable para Bajar de Peso | FitKnow",
        categorie: ["Nutricion", "Recetas"],
        subcategorie: ["Baja en calorias", "Almuerzo"],
        content: "Deliciosa ensalada de quinoa y verduras asadas es perfecta para un almuerzo ligero y nutritivo. Rica en proteínas y fibra",
        articulo: [<ArtIdVeinte />]
    },
    //receta-de-desayuno-saludables-y-rapidas
    {
        artID: 22,
        alt: "desayuno",
        id: "receta-de-desayuno-saludables-y-rapidas",
        img: ArtIdVeintiunoIMG,
        title: "5 Recetas de Desayuno Saludables y Rápidas ¡Listas en 5 Minutos!",
        titleSEO: "Recetas de Desayuno ¡Listas en 5 Minutos! | FitKnow",
        categorie: ["Nutricion", "Recetas"],
        subcategorie: ["Salud", "Desayuno"],
        content: "Recetas de desayunos saludables y rapidos de preparar: opciones deliciosas y nutritivas para mantener un estilo de vida saludable sin perder mucho tiempo.",
        articulo: [<ArtIdVeintiuno />]
    },
    //receta-de-postres-alto-en-proteina
    {
        artID: 22,
        alt: "desayuno",
        id: "receta-de-postres-alto-en-proteina",
        img: ArtIdVeintidosIMG,
        title: "Las Mejores Recetas de Postres Altos en Proteínas: ¡Deliciosos y Nutritivos Bocados para Tu Bienestar!",
        titleSEO: "Las Mejores Recetas de Postres Altos en Proteínas | FitKnow",
        categorie: ["Nutricion", "Recetas"],
        subcategorie: ["Altos en proteínas", "Postres"],
        content: "Las Mejores Recetas de Postres Altos en Proteínas: Deliciosos y Nutritivos para Tu Bienestar. Faciles de hacer para merendar en la comodidad de tu hogar sin romper la dieta",
        articulo: [<ArtIdVeintidos />]
    },
]