# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/app/domain/services/auth.service.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- `src/app/presentation/pages/auth/login.page.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- `src/app/presentation/pages/auth/login.page.html` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/app/domain/entities/user.entity.ts` — `Address.push`: Se invoca `push` sobre `Address`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/domain/entities/account.entity.ts` — `Transaction.push`: Se invoca `push` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/domain/entities/account.entity.ts` — `Transaction.filter`: Se invoca `filter` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/domain/entities/account.entity.ts` — `Transaction.forEach`: Se invoca `forEach` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/data/repositories/transaction.repository.ts` — `Transaction.map`: Se invoca `map` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/data/repositories/transaction.repository.ts` — `Transaction.filter`: Se invoca `filter` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/presentation/pages/accounts/accounts.page.ts` — `AccountService.getAccounts`: Se invoca `getAccounts` sobre `AccountService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/presentation/pages/accounts/accounts.page.ts` — `Account.filter`: Se invoca `filter` sobre `Account`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/presentation/pages/transactions/transactions.page.ts` — `AccountService.getAccounts`: Se invoca `getAccounts` sobre `AccountService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/presentation/pages/transactions/transactions.page.ts` — `Account.find`: Se invoca `find` sobre `Account`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/presentation/pages/transactions/transactions.page.ts` — `AccountService.getTransactionsByAccount`: Se invoca `getTransactionsByAccount` sobre `AccountService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/presentation/pages/transactions/transactions.page.ts` — `Transaction.reduce`: Se invoca `reduce` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/presentation/pages/transactions/transactions.page.ts` — `Transaction.map`: Se invoca `map` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/app.component.ts` — `AccountService.loadAccounts`: Se invoca `loadAccounts` sobre `AccountService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `package.json` — `@ionic-native/core@5.40.0`: @ionic-native/core declara la version 5.40.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Movil, Especialidad Desarrollador, Tecnología Ionic, Advanced

### Brecha de conocimiento
Examina las principales características de la POO (herencia, cohesión, abstracción, polimorfismo, acoplamiento y encapsulamiento) y las aplicas para mejorar la calidad general del código

### Misión / candidato
Candidato con experiencia avanzada en desarrollo mobile, enfocado en patrones de arquitectura y calidad de código

### Reto
- Tema: Técnicas de programación orientada a objetos
- Seniority: advanced-l2
- Tipo: practical
- Título: Mejora de calidad de código en aplicación móvil
- Tiempo estimado: 20 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Análisis del código existente — objetivo: Identificar áreas de mejora en el código actual. — entregable (NO resolver): Documento de análisis que detalla las áreas de mejora identificadas.
- Fase 2: Aplicación de herencia y abstracción — objetivo: Refactorizar el código para aplicar herencia y abstracción. — entregable (NO resolver): Código refactorizado que demuestra la aplicación de herencia y abstracción.
- Fase 3: Implementación de polimorfismo y encapsulamiento — objetivo: Aplicar polimorfismo y encapsulamiento para mejorar la flexibilidad y seguridad del código. — entregable (NO resolver): Código refactorizado que demuestra la aplicación de polimorfismo y encapsulamiento.
- Fase 4: Evaluación de cohesión y acoplamiento — objetivo: Evaluar y mejorar la cohesión y reducir el acoplamiento en el código. — entregable (NO resolver): Documento que detalla la evaluación y mejoras realizadas en cohesión y acoplamiento.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "fintech-mobile-app",
  "version": "0.0.1",
  "author": "Ionic Framework",
  "homepage": "https://ionicframework.com/",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "android": "cap sync android && cd android && ./gradlew assembleDebug && cd ..",
    "ios": "cap sync ios",
    "cap": "cap"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "17.3.0",
    "@angular/core": "17.3.0",
    "@angular/forms": "17.3.0",
    "@angular/platform-browser": "17.3.0",
    "@angular/platform-browser-dynamic": "17.3.0",
    "@angular/router": "17.3.0",
    "@capacitor/android": "6.1.0",
    "@capacitor/core": "6.1.0",
    "@ionic-native/core": "5.40.0",
    "@ionic-native/http": "5.36.0",
    "@ionic/angular": "8.3.0",
    "rxjs": "7.8.1",
    "tslib": "2.6.3",
    "zone.js": "0.14.10"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "17.3.0",
    "@angular-eslint/builder": "17.3.0",
    "@angular-eslint/eslint-plugin": "17.3.0",
    "@angular-eslint/eslint-plugin-template": "17.3.0",
    "@angular-eslint/template-parser": "17.3.0",
    "@angular/cli": "17.3.0",
    "@angular/compiler": "17.3.0",
    "@angular/compiler-cli": "17.3.0",
    "@angular/language-service": "17.3.0",
    "@capacitor/cli": "6.1.0",
    "@ionic/app-scripts": "3.2.4",
    "@types/jasmine": "~5.1.0",
    "@types/jasminewd2": "~2.0.10",
    "@types/node": "^18.19.0",
    "@typescript-eslint/eslint-plugin": "6.20.0",
    "@typescript-eslint/parser": "6.20.0",
    "eslint": "^8.49.0",
    "eslint-plugin-import": "2.29.1",
    "eslint-plugin-jsdoc": "46.10.1",
    "eslint-plugin-prefer-arrow": "1.2.3",
    "jasmine-core": "~5.1.0",
    "jasmine-spec-reporter": "~7.0.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~3.0.3",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "protractor": "~7.0.0",
    "typescript": "5.4.5"
  },
  "description": "Aplicación móvil de fintech construida con Ionic y Angular",
  "browserslist": [
    "last 1 Chrome version",
    "last 1 Firefox version",
    "last 2 Edge major versions",
    "last 2 Safari major versions",
    "last 2 iOS major versions",
    "last 1 Android major versions"
  ]
}

// === ARCHIVO: ionic.config.json ===
{
  "name": "fintech-mobile-app",
  "integrations": {
    "capacitor": {}
  },
  "type": "angular",
  "root": "src",
  "sourceMap": true,
  "watch": {
    "ignore": [
      "**/.history/**",
      "**/.ionic/**",
      "**/.vscode/**",
      "**/node_modules/**",
      "**/tmp/**",
      "**/temp/**"
    ]
  },
  "npmClient": "npm",
  "build": {
    "target": "es2022",
    "outputPath": "www",
    "emptyOutputPath": true
  },
  "serve": {
    "port": 8100,
    "host": "localhost",
    "open": true,
    "proxyType": "http"
  },
  "testing": {
    "browsers": ["Chrome"],
    "config": "./test-config/karma.conf.js"
  }
}

// === ARCHIVO: capacitor.config.ts ===
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fintech.mobile.app',
  appName: 'Fintech Mobile',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    cleartext: false,
    allowNavigation: []
  },
  android: {
    path: 'android',
    includePlugins: true,
    minSdkVersion: 22,
    flavorDimensions: null,
    buildOptions: {
      signingType: 'debug',
      keystorePath: null,
      keystoreAlias: null
    }
  },
  ios: {
    path: 'ios/App',
    scheme: 'App',
    includePlugins: true,
    minVersion: '13.0',
    target: '15.0',
    usesTabs: false,
    backgroundColor: '#ffffff',
    allowLinkPreview: false,
    preferredContentMode: 'mobile'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999'
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#ffffff'
    },
    Keyboard: {
      resizeOnFullScreen: true,
      style: 'dark'
    }
  },
  cordova: {}
};

export default config;

// === ARCHIVO: src/app/domain/entities/user.entity.ts ===
import { Address } from '../value-objects/address.value-object';

/**
 * Entidad de usuario con datos sensibles expuestos.
 * Representa un usuario en el sistema con información personal y de autenticación.
 */
export class User {
    // Propiedades públicas que exponen datos sensibles (antipatrón)
    public id: string;
    public name: string;
    public email: string;
    public password: string; // Sensible - expuesto públicamente
    public documentId: string; // Sensible - expuesto públicamente
    public phone: string;
    public birthDate: Date;
    public addresses: Address[];
    public isActive: boolean;
    public lastLogin: Date | null;
    public createdAt: Date;
    public updatedAt: Date;
    public securityQuestions: { question: string; answer: string }[]; // Sensible - expuesto públicamente

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        documentId: string,
        phone: string,
        birthDate: Date,
        addresses: Address[] = [],
        isActive: boolean = true,
        lastLogin: Date | null = null
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.documentId = documentId;
        this.phone = phone;
        this.birthDate = birthDate;
        this.addresses = addresses;
        this.isActive = isActive;
        this.lastLogin = lastLogin;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.securityQuestions = [];
    }

    // Método con lógica de negocio mezclada
    public updateProfile(name: string, email: string, phone: string, newAddress: Address): void {
        if (!name || !email || !phone) {
            throw new Error('Nombre, email y teléfono son obligatorios');
        }

        // Validación de email inline
        if (!email.includes('@') || !email.includes('.')) {
            throw new Error('Email inválido');
        }

        // Validación de teléfono inline
n        if (phone.length < 10) {
            throw new Error('Teléfono debe tener al menos 10 dígitos');
        }

        this.name = name;
        this.email = email;
        this.phone = phone;
        this.addresses.push(newAddress);
        this.updatedAt = new Date();

        // Lógica de notificación mezclada
        console.log(`Perfil actualizado para usuario ${this.id}`);
    }

    // Método que expone información sensible
    public getSecurityInfo(): { email: string; documentId: string; securityQuestions: { question: string; answer: string }[] } {
        return {
            email: this.email,
            documentId: this.documentId,
            securityQuestions: this.securityQuestions
        };
    }

    // Método con responsabilidad múltiple
    public validateUser(): boolean {
        // Validación de estado
        if (!this.isActive) {
            return false;
        }

        // Validación de edad
        const ageDiff = Date.now() - this.birthDate.getTime();
        const ageDate = new Date(ageDiff);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        if (age < 18) {
            return false;
        }

        // Validación de email
        if (!this.email.includes('@') || !this.email.includes('.')) {
            return false;
        }

        return true;
    }

    // Método que debería estar en un servicio separado
    public calculateUserScore(): number {
        let score = 0;
        
        // Puntuación basada en antigüedad
        const accountAge = new Date().getTime() - this.createdAt.getTime();
        score += Math.min(50, Math.floor(accountAge / (1000 * 60 * 60 * 24 * 30))); // 1 punto por mes
        
        // Puntuación basada en actividad
        if (this.lastLogin) {
            const daysSinceLastLogin = (new Date().getTime() - this.lastLogin.getTime()) / (1000 * 60 * 60 * 24);
            score += daysSinceLastLogin < 7 ? 20 : 0;
        }
        
        // Puntuación basada en información completa
        score += this.addresses.length > 0 ? 10 : 0;
        score += this.phone.length > 0 ? 10 : 0;
        score += this.securityQuestions.length > 0 ? 10 : 0;
        
        return Math.min(100, score);
    }
}

// === ARCHIVO: src/app/domain/entities/account.entity.ts ===
import { Transaction } from './transaction.entity';

/**
 * Entidad de cuenta bancaria con métodos de validación inline.
 * Representa una cuenta bancaria con su estado y transacciones asociadas.
 */
export class Account {
    // Propiedades públicas con validación inline
    public id: string;
    public userId: string;
    public accountNumber: string;
    public accountType: string;
    public balance: number;
    public currency: string;
    public isActive: boolean;
    public createdAt: Date;
    public updatedAt: Date;
    public transactions: Transaction[];
    public overdraftLimit: number;
    public lastTransactionDate: Date | null;

    constructor(
        id: string,
        userId: string,
        accountNumber: string,
        accountType: string,
        balance: number = 0,
        currency: string = 'COP',
        overdraftLimit: number = 0
    ) {
        // Validación inline en constructor
        if (!accountNumber || accountNumber.length < 10) {
            throw new Error('Número de cuenta debe tener al menos 10 dígitos');
        }
        
        if (balance < 0) {
            throw new Error('El saldo inicial no puede ser negativo');
        }
        
        if (!['ahorro', 'corriente', 'inversión'].includes(accountType.toLowerCase())) {
            throw new Error('Tipo de cuenta inválido');
        }
        
        this.id = id;
        this.userId = userId;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
        this.currency = currency;
        this.isActive = true;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.transactions = [];
        this.overdraftLimit = overdraftLimit;
        this.lastTransactionDate = null;
    }

    // Método con validación inline y lógica de negocio mezclada
    public deposit(amount: number, description: string = 'Depósito'): Transaction {
        if (amount <= 0) {
            throw new Error('El monto debe ser positivo');
        }
        
        if (!this.isActive) {
            throw new Error('La cuenta está inactiva');
        }
        
        // Validación de monto máximo inline
        if (amount > 10000000) {
            throw new Error('El monto máximo para depósitos es $10.000.000');
        }
        
        this.balance += amount;
        this.updatedAt = new Date();
        
        const transaction = new Transaction(
            crypto.randomUUID(),
            this.id,
            'deposit',
            amount,
            this.currency,
            description
        );
        
        this.transactions.push(transaction);
        this.lastTransactionDate = new Date();
        
        // Lógica de notificación mezclada
        console.log(`Depósito de ${amount} ${this.currency} realizado en cuenta ${this.accountNumber}`);
        
        return transaction;
    }

    // Método con validación inline compleja
    public withdraw(amount: number, description: string = 'Retiro'): Transaction {
        if (amount <= 0) {
            throw new Error('El monto debe ser positivo');
        }
        
        if (!this.isActive) {
            throw new Error('La cuenta está inactiva');
        }
        
        // Validación de saldo disponible con lógica compleja inline
        const availableBalance = this.balance + this.overdraftLimit;
        if (amount > availableBalance) {
            throw new Error(`Fondos insuficientes. Saldo disponible: ${availableBalance}`);
        }
        
        // Validación de límite diario
        const today = new Date().setHours(0, 0, 0, 0);
        const todayTransactions = this.transactions.filter(t => {
            const transactionDate = new Date(t.createdAt).setHours(0, 0, 0, 0);
            return transactionDate === today && t.type === 'withdraw';
        });
        
        const dailyTotal = todayTransactions.reduce((sum, t) => sum + t.amount, 0);
        if (dailyTotal + amount > 5000000) {
            throw new Error('Límite diario de retiros excedido ($5.000.000)');
        }
        
        this.balance -= amount;
        this.updatedAt = new Date();
        
        const transaction = new Transaction(
            crypto.randomUUID(),
            this.id,
            'withdraw',
            amount,
            this.currency,
            description
        );
        
        this.transactions.push(transaction);
        this.lastTransactionDate = new Date();
        
        // Lógica de notificación mezclada
        console.log(`Retiro de ${amount} ${this.currency} realizado en cuenta ${this.accountNumber}`);
        
        return transaction;
    }

    // Método con responsabilidad múltiple
    public getAccountSummary(): {
        balance: number;
        lastTransaction: Transaction | null;
        transactionCount: number;
        isOverdrawn: boolean;
        availableBalance: number;
        monthlyStatement: {
            month: string;
            income: number;
            expenses: number;
            balanceChange: number;
        }[]
    } {
        const lastTransaction = this.transactions.length > 0 ? 
            this.transactions[this.transactions.length - 1] : null;
        
        const monthlyStatement = this.calculateMonthlyStatement();
        
        return {
            balance: this.balance,
            lastTransaction,
            transactionCount: this.transactions.length,
            isOverdrawn: this.balance < 0,
            availableBalance: this.balance + this.overdraftLimit,
            monthlyStatement
        };
    }

    // Método con lógica compleja que debería estar en un servicio
    private calculateMonthlyStatement(): {
        month: string;
        income: number;
        expenses: number;
        balanceChange: number;
    }[] {
        const monthlyData: Record<string, {
            income: number;
            expenses: number;
        }> = {};
        
        // Agrupar transacciones por mes
        this.transactions.forEach(transaction => {
            const date = new Date(transaction.createdAt);
            const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
            
            if (!monthlyData[monthKey]) {
                monthlyData[monthKey] = { income: 0, expenses: 0 };
            }
            
            if (transaction.type === 'deposit') {
                monthlyData[monthKey].income += transaction.amount;
            } else if (transaction.type === 'withdraw' || transaction.type === 'transfer') {
                monthlyData[monthKey].expenses += transaction.amount;
            }
        });
        
        // Calcular balance change para cada mes
        const result: {
            month: string;
            income: number;
            expenses: number;
            balanceChange: number;
        }[] = [];
        
        Object.keys(monthlyData).sort().forEach(monthKey => {
            const data = monthlyData[monthKey];
            result.push({
                month: monthKey,
                income: data.income,
                expenses: data.expenses,
                balanceChange: data.income - data.expenses
            });
        });
        
        return result;
    }

    // Método con validación que debería estar en un validador separado
    public isValid(): boolean {
        if (!this.accountNumber || this.accountNumber.length < 10) {
            return false;
        }
        
        if (this.balance < -this.overdraftLimit) {
            return false;
        }
        
        if (!['ahorro', 'corriente', 'inversión'].includes(this.accountType.toLowerCase())) {
            return false;
        }
        
        if (!['COP', 'USD', 'EUR'].includes(this.currency)) {
            return false;
        }
        
        return true;
    }
}

// === ARCHIVO: src/app/domain/entities/transaction.entity.ts ===
import { Account } from './account.entity';

/**
 * Entidad de transacción con lógica de negocio mezclada.
 * Representa una transacción financiera entre cuentas.
 */
export class Transaction {
    public id: string;
    public accountId: string;
    public type: string;
    public amount: number;
    public currency: string;
    public description: string;
    public createdAt: Date;
    public status: string;
    public referenceNumber: string;
    public relatedAccountId: string | null;
    public fee: number;
    public tax: number;
    public metadata: Record<string, unknown>;

    constructor(
        id: string,
        accountId: string,
        type: string,
        amount: number,
        currency: string,
        description: string = '',
        relatedAccountId: string | null = null
    ) {
        // Validación inline
        if (!['deposit', 'withdraw', 'transfer', 'payment', 'fee'].includes(type)) {
            throw new Error('Tipo de transacción inválido');
        }
        
        if (amount <= 0) {
            throw new Error('El monto debe ser positivo');
        }
        
        if (!['COP', 'USD', 'EUR'].includes(currency)) {
            throw new Error('Moneda inválida');
        }
        
        this.id = id;
        this.accountId = accountId;
        this.type = type;
        this.amount = amount;
        this.currency = currency;
        this.description = description;
        this.createdAt = new Date();
        this.status = 'completed';
        this.referenceNumber = this.generateReferenceNumber();
        this.relatedAccountId = relatedAccountId;
        this.fee = this.calculateFee();
        this.tax = this.calculateTax();
        this.metadata = {};
    }

    // Método con lógica de negocio compleja inline
    private calculateFee(): number {
        let fee = 0;
        
        // Cálculo de comisión basado en tipo de transacción
        switch (this.type) {
            case 'deposit':
                fee = this.amount * 0.01; // 1% para depósitos
                break;
            case 'withdraw':
                fee = this.amount * 0.015; // 1.5% para retiros
                break;
            case 'transfer':
                fee = 5000; // Comisión fija para transferencias
                if (this.amount > 1000000) {
                    fee += (this.amount - 1000000) * 0.005; // 0.5% adicional para montos altos
                }
                break;
            case 'payment':
                fee = 2000; // Comisión fija para pagos
                break;
        }
        
        // Ajuste por moneda
        if (this.currency === 'USD') {
            fee *= 4000; // Conversión aproximada
        } else if (this.currency === 'EUR') {
            fee *= 4500; // Conversión aproximada
        }
        
        return Math.min(fee, 50000); // Máximo $50.000
    }

    // Método con lógica compleja que debería estar en un servicio
    private calculateTax(): number {
        // Cálculo de impuestos basado en tipo de transacción y monto
        let taxRate = 0;
        
        if (this.type === 'withdraw' && this.amount > 10000000) {
            taxRate = 0.004; // 0.4% para retiros grandes
        } else if (this.type === 'transfer' && this.amount > 5000000) {
            taxRate = 0.002; // 0.2% para transferencias grandes
        }
        
        // Exención para ciertos tipos de cuentas (lógica que debería estar en Account)
        if (this.relatedAccountId) {
            // Simulación: si la cuenta relacionada es de ahorro, no aplica impuesto
            if (this.relatedAccountId.endsWith('SAV')) {
                taxRate = 0;
            }
        }
        
        return this.amount * taxRate;
    }

    // Método con responsabilidad múltiple
    private generateReferenceNumber(): string {
        // Generación de número de referencia con lógica compleja
        const datePart = this.createdAt.toISOString().slice(2, 10).replace(/-/g, '');
        const randomPart = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        
        // Incluir prefijo basado en tipo de transacción
        let prefix = '';
        switch (this.type) {
            case 'deposit': prefix = 'DEP'; break;
            case 'withdraw': prefix = 'WDR'; break;
            case 'transfer': prefix = 'TRF'; break;
            case 'payment': prefix = 'PAY'; break;
            case 'fee': prefix = 'FEE'; break;
        }
        
        return `${prefix}-${datePart}-${randomPart}`;
    }

    // Método que debería estar en un servicio de transacciones
    public validateTransaction(account: Account): boolean {
        if (this.status !== 'completed') {
            return false;
        }
        
        // Validación de saldo (lógica duplicada de Account)
        if (this.type === 'withdraw' || this.type === 'transfer') {
            const availableBalance = account.balance + account.overdraftLimit;
            if (this.amount > availableBalance) {
                return false;
            }
        }
        
        // Validación de límites
        if (this.type === 'withdraw' && this.amount > 5000000) {
            return false;
        }
        
        // Validación de moneda
        if (this.currency !== account.currency) {
            return false;
        }
        
        return true;
    }

    // Método con lógica de notificación mezclada
    public processTransaction(account: Account): void {
        if (!this.validateTransaction(account)) {
            this.status = 'failed';
            console.log(`Transacción ${this.id} falló: validación no pasó`);
            return;
        }
        
        // Actualización de saldo (lógica duplicada)
        if (this.type === 'deposit') {
            account.balance += this.amount;
        } else if (this.type === 'withdraw' || this.type === 'transfer') {
            account.balance -= this.amount;
        }
        
        // Aplicar comisión y impuestos
        account.balance -= this.fee;
        account.balance -= this.tax;
        
        account.updatedAt = new Date();
        account.lastTransactionDate = new Date();
        
        console.log(`Transacción ${this.id} procesada con éxito. Nuevo saldo: ${account.balance}`);
    }

    // Método con responsabilidad de serialización
    public toJSON(): Record<string, unknown> {
        return {
            id: this.id,
            accountId: this.accountId,
            type: this.type,
            amount: this.amount,
            currency: this.currency,
            description: this.description,
            createdAt: this.createdAt.toISOString(),
            status: this.status,
            referenceNumber: this.referenceNumber,
            relatedAccountId: this.relatedAccountId,
            fee: this.fee,
            tax: this.tax,
            metadata: this.metadata
        };
    }
}

// === ARCHIVO: src/app/domain/value-objects/address.value-object.ts ===
/**
 * Value object para manejar direcciones de usuarios.
 * Aunque no es parte del lote, es requerida por User.entity.ts
 */
export class Address {
    public readonly street: string;
    public readonly city: string;
    public readonly state: string;
    public readonly postalCode: string;
    public readonly country: string;
    public readonly isPrimary: boolean;

    constructor(
        street: string,
        city: string,
        state: string,
        postalCode: string,
        country: string = 'Colombia',
        isPrimary: boolean = false
    ) {
        if (!street || !city || !state || !postalCode) {
            throw new Error('Todos los campos de dirección son obligatorios');
        }
        
        if (postalCode.length < 5) {
            throw new Error('Código postal inválido');
        }
        
        this.street = street;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.country = country;
        this.isPrimary = isPrimary;
    }

    public equals(other: Address): boolean {
        return this.street === other.street &&
               this.city === other.city &&
               this.state === other.state &&
               this.postalCode === other.postalCode &&
               this.country === other.country;
    }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "declaration": false,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": ["ES2022", "dom"],
    "paths": {
      "@domain/*": ["src/app/domain/*"],
      "@data/*": ["src/app/data/*"],
      "@presentation/*": ["src/app/presentation/*"],
      "@shared/*": ["src/app/shared/*"],
      "@core/*": ["src/app/core/*"]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// === ARCHIVO: src/main.ts ===
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/presentation/shared/app.module';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/core/loader';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((moduleRef) => {
      const injector = moduleRef.injector;
      const appRef = moduleRef.injector.get('ApplicationRef');
      const componentRef = appRef.components[0];
      
      if (!componentRef) {
        console.error('No se pudo obtener la referencia del componente raíz');
        throw new Error('Error en el bootstrap: componente raíz no encontrado');
      }
      
      console.log('Aplicación Ionic iniciada correctamente');
      console.log(`Entorno: ${environment.production ? 'producción' : 'desarrollo'}`);
      console.log(`Fecha de inicio: ${new Date().toISOString()}`);
      
      return moduleRef;
    })
    .catch((error) => {
      console.error('Error crítico durante el bootstrap de la aplicación:', error);
      
      if (error instanceof TypeError) {
        console.error('Error de tipo detectado. Verifique las dependencias y módulos.');
      } else if (error instanceof Error) {
        console.error(`Mensaje de error: ${error.message}`);
        if (error.stack) {
          console.error('Stack trace:', error.stack.split('\n').slice(0, 5).join('\n'));
        }
      }
      
      return null;
    });
};

defineCustomElements(window).then(() => {
  console.log('Componentes personalizados de Ionic cargados');
  
  bootstrap().then((moduleRef) => {
    if (moduleRef) {
      console.log('Módulo de aplicación bootstrapped exitosamente');
      
      window.addEventListener('error', (event) => {
        console.error('Error global capturado:', event.error);
      });
      
      window.addEventListener('unhandledrejection', (event) => {
        console.error('Promesa rechazada no manejada:', event.reason);
      });
      
      if ('serviceWorker' in navigator && environment.production) {
        navigator.serviceWorker.register('/ngsw-worker.js').then((registration) => {
          console.log('Service Worker registrado:', registration.scope);
        }).catch((error) => {
          console.error('Error al registrar Service Worker:', error);
        });
      }
    } else {
      console.error('El bootstrap de la aplicación falló');
      const rootElement = document.querySelector('ion-app');
      if (rootElement) {
        rootElement.innerHTML = `
          <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; font-family: sans-serif;">
            <h2 style="color: #dc3545;">Error de inicialización</h2>
            <p style="color: #6c757d;">La aplicación no pudo iniciar correctamente.</p>
            <button onclick="window.location.reload()" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Reintentar</button>
          </div>
        `;
      }
    }
  });
}).catch((error) => {
  console.error('Error al cargar los custom elements de Ionic:', error);
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: sans-serif;">
      <h2 style="color: #dc3545;">Error de carga</h2>
      <p>No se pudieron cargar los componentes de Ionic.</p>
    </div>
  `;
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM completamente cargado');
  const loadingElement = document.getElementById('app-loading');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
});

window.addEventListener('load', () => {
  console.log('Recursos de la página cargados completamente');
  const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (perfData) {
    console.log(`Tiempo de carga: ${perfData.loadEventEnd - perfData.fetchStart}ms`);
  }
});

// === ARCHIVO: src/app/domain/interfaces/user-repository.interface.ts ===
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';
import { Address } from '../value-objects/address.value-object';

export interface UserFilter {
  isActive?: boolean;
  name?: string;
  email?: string;
}

export interface UserRepository {
  findAll(): Observable<User[]>;
  findById(id: string): Observable<User | null>;
  findByEmail(email: string): Observable<User | null>;
  findByPhone(phone: string): Observable<User | null>;
  search(filter: UserFilter): Observable<User[]>;
  save(user: User): Observable<User>;
  update(id: string, userData: Partial<User>): Observable<User>;
  delete(id: string): Observable<boolean>;
  updateProfile(id: string, name: string, email: string, phone: string, addresses?: Address[]): Observable<User>;
  validateUserCredentials(email: string, password: string): Observable<User | null>;
  updateLastLogin(id: string): Observable<User>;
  deactivateUser(id: string): Observable<User>;
  activateUser(id: string): Observable<User>;
  getActiveUsers(): Observable<User[]>;
  getInactiveUsers(): Observable<User[]>;
  countUsers(): Observable<number>;
  existsByEmail(email: string): Observable<boolean>;
  existsByPhone(phone: string): Observable<boolean>;
}

// === ARCHIVO: src/app/domain/interfaces/account-repository.interface.ts ===
import { Observable } from 'rxjs';
import { Account } from '../entities/account.entity';
import { Transaction } from '../entities/transaction.entity';

export interface AccountFilter {
  userId?: string;
  accountType?: string;
  currency?: string;
  isActive?: boolean;
}

export interface AccountBalance {
  accountId: string;
  balance: number;
  availableBalance: number;
  overdraftUsed: number;
  lastUpdated: Date;
}

export interface AccountRepository {
  findAll(): Observable<Account[]>;
  findById(id: string): Observable<Account | null>;
  findByAccountNumber(accountNumber: string): Observable<Account | null>;
  findByUserId(userId: string): Observable<Account[]>;
  findByAccountType(accountType: string): Observable<Account[]>;
  search(filter: AccountFilter): Observable<Account[]>;
  save(account: Account): Observable<Account>;
  update(id: string, accountData: Partial<Account>): Observable<Account>;
  delete(id: string): Observable<boolean>;
  activateAccount(id: string): Observable<Account>;
  deactivateAccount(id: string): Observable<Account>;
  getActiveAccounts(): Observable<Account[]>;
  getInactiveAccounts(): Observable<Account[]>;
  getAccountsWithOverdraft(): Observable<Account[]>;
  updateBalance(id: string, newBalance: number): Observable<Account>;
  deposit(accountId: string, amount: number, description: string): Observable<Transaction>;
  withdraw(accountId: string, amount: number, description: string): Observable<Transaction>;
  transfer(fromAccountId: string, toAccountId: string, amount: number, description: string): Observable<Transaction>;
  getAccountBalance(accountId: string): Observable<AccountBalance>;
  getTotalBalanceByUser(userId: string): Observable<number>;
  getAccountsByCurrency(currency: string): Observable<Account[]>;
  countAccounts(): Observable<number>;
  countAccountsByUser(userId: string): Observable<number>;
}

// === ARCHIVO: src/app/domain/interfaces/transaction-repository.interface.ts ===
import { Observable } from 'rxjs';
import { Transaction } from '../entities/transaction.entity';
import { Account } from '../entities/account.entity';

export interface TransactionFilter {
  accountId?: string;
  type?: string;
  status?: string;
  startDate?: Date;
  endDate?: Date;
  minAmount?: number;
  maxAmount?: number;
  currency?: string;
}

export interface TransactionSummary {
  totalTransactions: number;
  totalAmount: number;
  totalFees: number;
  totalTaxes: number;
  byType: Record<string, { count: number; amount: number }>;
  byStatus: Record<string, { count: number; amount: number }>;
}

export interface TransactionRepository {
  findAll(): Observable<Transaction[]>;
  findById(id: string): Observable<Transaction | null>;
  findByAccountId(accountId: string): Observable<Transaction[]>;
  findByReferenceNumber(referenceNumber: string): Observable<Transaction | null>;
  findByType(type: string): Observable<Transaction[]>;
  findByStatus(status: string): Observable<Transaction[]>;
  findByDateRange(accountId: string, startDate: Date, endDate: Date): Observable<Transaction[]>;
  search(filter: TransactionFilter): Observable<Transaction[]>;
  save(transaction: Transaction): Observable<Transaction>;
  update(id: string, transactionData: Partial<Transaction>): Observable<Transaction>;
  delete(id: string): Observable<boolean>;
  processTransaction(transaction: Transaction, account: Account): Observable<Transaction>;
  validateTransaction(transaction: Transaction, account: Account): Observable<boolean>;
  getTransactionsByAccount(accountId: string, limit?: number, offset?: number): Observable<Transaction[]>;
  getRecentTransactions(accountId: string, limit: number): Observable<Transaction[]>;
  getPendingTransactions(accountId: string): Observable<Transaction[]>;
  getCompletedTransactions(accountId: string): Observable<Transaction[]>;
  getFailedTransactions(accountId: string): Observable<Transaction[]>;
  getTransactionSummary(accountId: string, startDate?: Date, endDate?: Date): Observable<TransactionSummary>;
  getTotalAmountByType(accountId: string, type: string): Observable<number>;
  getTotalFeesByAccount(accountId: string): Observable<number>;
  getTotalTaxesByAccount(accountId: string): Observable<number>;
  countTransactions(): Observable<number>;
  countTransactionsByAccount(accountId: string): Observable<number>;
  updateTransactionStatus(id: string, status: string): Observable<Transaction>;
  cancelTransaction(id: string): Observable<Transaction>;
  getIncomingTransactions(accountId: string): Observable<Transaction[]>;
  getOutgoingTransactions(accountId: string): Observable<Transaction[]>;
}

// === ARCHIVO: src/app/domain/services/auth.service.ts ===
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): Observable<User> {
    throw new Error('Method not implemented');
  }

  logout(): Observable<void> {
    throw new Error('Method not implemented');
  }

  register(userData: { name: string; email: string; phone: string; birthDate: Date }, password: string): Observable<User> {
    throw new Error('Method not implemented');
  }

  resetPassword(email: string): Observable<void> {
    throw new Error('Method not implemented');
  }

  verifyToken(token: string): Observable<boolean> {
    throw new Error('Method not implemented');
  }

  refreshToken(refreshToken: string): Observable<{ accessToken: string; refreshToken: string }> {
    throw new Error('Method not implemented');
  }

  getCurrentUser(): Observable<User | null> {
    throw new Error('Method not implemented');
  }
}

// === ARCHIVO: src/app/domain/services/account.service.ts ===
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from '../entities/account.entity';
import { Transaction } from '../entities/transaction.entity';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly API_BASE_URL = 'https://api.fintech.example.com/v1';
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private readonly CACHE_TTL_MS = 5 * 60 * 1000;

  constructor(private http: HttpClient) {}

  getAccountsByUserId(userId: string): Observable<Account[]> {
    const cacheKey = `accounts_${userId}`;
    const cached = this.getFromCache<Account[]>(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.http.get<Account[]>(`${this.API_BASE_URL}/users/${userId}/accounts`).pipe(
      tap(accounts => this.setCache(cacheKey, accounts)),
      map(accounts => accounts.filter(acc => acc.isActive)),
      catchError(this.handleError.bind(this))
    );
  }

  getAccountById(accountId: string): Observable<Account> {
    return this.http.get<Account>(`${this.API_BASE_URL}/accounts/${accountId}`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  createAccount(userId: string, accountType: string, initialBalance: number = 0): Observable<Account> {
    const newAccount = {
      userId,
      accountType,
      balance: initialBalance,
      currency: 'USD',
      isActive: true,
      overdraftLimit: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return this.http.post<Account>(`${this.API_BASE_URL}/accounts`, newAccount).pipe(
      tap(account => {
        this.invalidateUserCache(userId);
        console.log(`[AccountService] Cuenta creada exitosamente: ${account.id}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  updateAccount(accountId: string, updates: Partial<Account>): Observable<Account> {
    return this.http.put<Account>(`${this.API_BASE_URL}/accounts/${accountId}`, {
      ...updates,
      updatedAt: new Date()
    }).pipe(
      tap(updatedAccount => {
        this.invalidateUserCache(updatedAccount.userId);
        console.log(`[AccountService] Cuenta actualizada: ${accountId}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  deactivateAccount(accountId: string): Observable<void> {
    return this.http.patch<void>(`${this.API_BASE_URL}/accounts/${accountId}/deactivate`, {
      isActive: false,
      updatedAt: new Date()
    }).pipe(
      tap(() => console.log(`[AccountService] Cuenta desactivada: ${accountId}`)),
      catchError(this.handleError.bind(this))
    );
  }

  getTransactions(accountId: string, limit: number = 50): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `${this.API_BASE_URL}/accounts/${accountId}/transactions`,
      { params: { limit: limit.toString() } }
    ).pipe(
      map(transactions => transactions.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )),
      catchError(this.handleError.bind(this))
    );
  }

  performDeposit(accountId: string, amount: number, description: string = 'Depósito'): Observable<Transaction> {
    if (amount <= 0) {
      return throwError(() => new Error('El monto del depósito debe ser mayor a cero'));
    }

    const transaction = {
      accountId,
      type: 'DEPOSIT',
      amount,
      currency: 'USD',
      description,
      status: 'PENDING'
    };

    return this.http.post<Transaction>(
      `${this.API_BASE_URL}/accounts/${accountId}/transactions/deposit`,
      transaction
    ).pipe(
      tap(tx => console.log(`[AccountService] Depósito realizado: ${tx.id}`)),
      catchError(this.handleError.bind(this))
    );
  }

  performWithdrawal(accountId: string, amount: number, description: string = 'Retiro'): Observable<Transaction> {
    if (amount <= 0) {
      return throwError(() => new Error('El monto del retiro debe ser mayor a cero'));
    }

    const transaction = {
      accountId,
      type: 'WITHDRAWAL',
      amount,
      currency: 'USD',
      description,
      status: 'PENDING'
    };

    return this.http.post<Transaction>(
      `${this.API_BASE_URL}/accounts/${accountId}/transactions/withdraw`,
      transaction
    ).pipe(
      tap(tx => console.log(`[AccountService] Retiro realizado: ${tx.id}`)),
      catchError(this.handleError.bind(this))
    );
  }

  performTransfer(fromAccountId: string, toAccountId: string, amount: number, description: string = 'Transferencia'): Observable<Transaction> {
    if (amount <= 0) {
      return throwError(() => new Error('El monto de la transferencia debe ser mayor a cero'));
    }

    if (fromAccountId === toAccountId) {
      return throwError(() => new Error('No se puede transferir a la misma cuenta'));
    }

    const transaction = {
      accountId: fromAccountId,
      type: 'TRANSFER',
      amount,
      currency: 'USD',
      description,
      relatedAccountId: toAccountId,
      status: 'PENDING'
    };

    return this.http.post<Transaction>(
      `${this.API_BASE_URL}/accounts/${fromAccountId}/transactions/transfer`,
      { ...transaction, toAccountId }
    ).pipe(
      tap(tx => console.log(`[AccountService] Transferencia realizada: ${tx.id}`)),
      catchError(this.handleError.bind(this))
    );
  }

  getAccountBalance(accountId: string): Observable<{ available: number; current: number; pending: number }> {
    return this.http.get<{ available: number; current: number; pending: number }>(
      `${this.API_BASE_URL}/accounts/${accountId}/balance`
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  validateAccountForTransaction(accountId: string, amount: number): Observable<boolean> {
    return this.getAccountById(accountId).pipe(
      map(account => {
        if (!account.isActive) {
          throw new Error('La cuenta no está activa');
        }
        if (account.balance < amount) {
          const availableBalance = account.balance + account.overdraftLimit;
          if (availableBalance < amount) {
            throw new Error('Saldo insuficiente para realizar la operación');
          }
        }
        return true;
      }),
      catchError(this.handleError.bind(this))
    );
  }

  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL_MS) {
      return cached.data as T;
    }
    this.cache.delete(key);
    return null;
  }

  private setCache(key: string, data: any): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  private invalidateUserCache(userId: string): void {
    const cacheKey = `accounts_${userId}`;
    this.cache.delete(cacheKey);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ha ocurrido un error inesperado';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error de red: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 400:
          errorMessage = error.error?.message || 'Solicitud inválida';
          break;
        case 401:
          errorMessage = 'No autorizado. Por favor, inicie sesión nuevamente';
          break;
        case 403:
          errorMessage = 'Acceso denegado';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado';
          break;
        case 500:
          errorMessage = 'Error del servidor. Intente más tarde';
          break;
        default:
          errorMessage = error.error?.message || `Error: ${error.status}`;
      }
    }

    console.error('[AccountService] Error HTTP:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}

// === ARCHIVO: src/app/data/repositories/user.repository.ts ===
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap, finalize } from 'rxjs/operators';
import { User } from '../../domain/entities/user.entity';
import { Address } from '../../domain/value-objects/address.value-object';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {
  private readonly API_BASE_URL = 'https://api.fintech.example.com/v1';
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private userCache: Map<string, User> = new Map();

  constructor(private http: HttpClient) {}

  findById(userId: string): Observable<User> {
    const cachedUser = this.userCache.get(userId);
    if (cachedUser) {
      return of(cachedUser);
    }

    return this.http.get<User>(`${this.API_BASE_URL}/users/${userId}`).pipe(
      tap(user => {
        this.userCache.set(userId, user);
        console.log(`[UserRepository] Usuario cargado desde API: ${userId}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  findByEmail(email: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.API_BASE_URL}/users`, {
      params: { email }
    }).pipe(
      map(users => users.length > 0 ? users[0] : null),
      catchError(this.handleError.bind(this))
    );
  }

  findAll(page: number = 1, limit: number = 20): Observable<{ users: User[]; total: number }> {
    return this.http.get<{ users: User[]; total: number }>(
      `${this.API_BASE_URL}/users`,
      { params: { page: page.toString(), limit: limit.toString() } }
    ).pipe(
      tap(response => console.log(`[UserRepository] Página ${page} cargada: ${response.users.length} usuarios`)),
      catchError(this.handleError.bind(this))
    );
  }

  create(userData: {
    name: string;
    email: string;
    phone: string;
    birthDate: Date;
    addresses?: Address[];
  }): Observable<User> {
    const newUser = {
      ...userData,
      isActive: true,
      lastLogin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      addresses: userData.addresses || []
    };

    return this.http.post<User>(`${this.API_BASE_URL}/users`, newUser).pipe(
      tap(user => {
        this.userCache.set(user.id, user);
        console.log(`[UserRepository] Usuario creado: ${user.id}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  update(userId: string, updates: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.API_BASE_URL}/users/${userId}`, {
      ...updates,
      updatedAt: new Date()
    }).pipe(
      tap(updatedUser => {
        this.userCache.set(userId, updatedUser);
        if (this.currentUserSubject.value?.id === userId) {
          this.currentUserSubject.next(updatedUser);
        }
        console.log(`[UserRepository] Usuario actualizado: ${userId}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  updateProfile(userId: string, name: string, email: string, phone: string, newAddress?: Address): Observable<User> {
    return this.findById(userId).pipe(
      map(user => {
        const addresses = newAddress 
          ? [...user.addresses.filter(a => !a.equals(newAddress)), newAddress]
          : user.addresses;
        return { name, email, phone, addresses };
      }),
      map(updates => updates as Partial<User>),
      catchError(this.handleError.bind(this)),
      finalize(() => {})
    ).pipe(
      catchError(() => throwError(() => new Error('Error al actualizar perfil'))),
      map(() => {
        throw new Error('Method should be replaced with actual implementation');
      })
    );
  }

  delete(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/users/${userId}`).pipe(
      tap(() => {
        this.userCache.delete(userId);
        if (this.currentUserSubject.value?.id === userId) {
          this.currentUserSubject.next(null);
        }
        console.log(`[UserRepository] Usuario eliminado: ${userId}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  deactivate(userId: string): Observable<User> {
    return this.update(userId, { isActive: false } as Partial<User>).pipe(
      tap(user => console.log(`[UserRepository] Usuario desactivado: ${userId}`)),
      catchError(this.handleError.bind(this))
    );
  }

  activate(userId: string): Observable<User> {
    return this.update(userId, { isActive: true } as Partial<User>).pipe(
      tap(user => console.log(`[UserRepository] Usuario activado: ${userId}`)),
      catchError(this.handleError.bind(this))
    );
  }

  addAddress(userId: string, address: Address): Observable<User> {
    return this.findById(userId).pipe(
      map(user => ({
        ...user,
        addresses: [...user.addresses, address]
      })),
      catchError(this.handleError.bind(this))
    ).pipe(
      map(updates => updates as Partial<User>),
      catchError(() => throwError(() => new Error('Error al agregar dirección'))),
      map(() => {
        throw new Error('Method should be replaced with actual implementation');
      })
    );
  }

  removeAddress(userId: string, addressToRemove: Address): Observable<User> {
    return this.findById(userId).pipe(
      map(user => ({
        ...user,
        addresses: user.addresses.filter(a => !a.equals(addressToRemove))
      })),
      catchError(this.handleError.bind(this))
    ).pipe(
      map(updates => updates as Partial<User>),
      catchError(() => throwError(() => new Error('Error al eliminar dirección'))),
      map(() => {
        throw new Error('Method should be replaced with actual implementation');
      })
    );
  }

  setCurrentUser(user: User | null): void {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  clearCache(): void {
    this.userCache.clear();
    console.log('[UserRepository] Caché limpiada');
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error al procesar la solicitud del usuario';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error de conexión: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 400:
          errorMessage = error.error?.message || 'Datos de usuario inválidos';
          break;
        case 401:
          errorMessage = 'Sesión expirada. Por favor, inicie sesión nuevamente';
          break;
        case 403:
          errorMessage = 'No tiene permisos para modificar este usuario';
          break;
        case 404:
          errorMessage = 'Usuario no encontrado';
          break;
        case 409:
          errorMessage = 'Conflicto: el correo electrónico ya está registrado';
          break;
        case 500:
          errorMessage = 'Error del servidor. Por favor, intente más tarde';
          break;
        default:
          errorMessage = error.error?.message || `Error del servidor: ${error.status}`;
      }
    }

    console.error('[UserRepository] Error:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}

// === ARCHIVO: src/app/data/repositories/account.repository.ts ===
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { delay, map, catchError, tap } from 'rxjs/operators';
import { Account } from '../../domain/entities/account.entity';
import { Transaction } from '../../domain/entities/transaction.entity';
import { HttpClientService } from '../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AccountRepository {
  private accountsCache = new BehaviorSubject<Account[]>([]);
  private readonly API_ENDPOINT = '/api/accounts';

  constructor(private httpClient: HttpClientService) {}

  getAccountsByUserId(userId: string): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.API_ENDPOINT}/user/${userId}`).pipe(
      map(accounts => accounts.map(acc => this.hydrateAccount(acc))),
      tap(accounts => this.accountsCache.next(accounts)),
      catchError(error => {
        console.error('Error fetching accounts:', error);
        return of(this.getMockAccounts(userId));
      })
    );
  }

  getAccountById(accountId: string): Observable<Account | undefined> {
    return this.httpClient.get<Account>(`${this.API_ENDPOINT}/${accountId}`).pipe(
      map(account => account ? this.hydrateAccount(account) : undefined),
      catchError(error => {
        console.error('Error fetching account:', error);
        return of(undefined);
      })
    );
  }

  createAccount(account: Partial<Account>): Observable<Account> {
    return this.httpClient.post<Account>(this.API_ENDPOINT, account).pipe(
      map(created => this.hydrateAccount(created)),
      catchError(error => {
        console.error('Error creating account:', error);
        return throwError(() => new Error('Failed to create account'));
      })
    );
  }

  updateAccount(accountId: string, updates: Partial<Account>): Observable<Account> {
    return this.httpClient.put<Account>(`${this.API_ENDPOINT}/${accountId}`, updates).pipe(
      map(updated => this.hydrateAccount(updated)),
      catchError(error => {
        console.error('Error updating account:', error);
        return throwError(() => new Error('Failed to update account'));
      })
    );
  }

  deleteAccount(accountId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_ENDPOINT}/${accountId}`).pipe(
      catchError(error => {
        console.error('Error deleting account:', error);
        return throwError(() => new Error('Failed to delete account'));
      })
    );
  }

  deposit(accountId: string, amount: number, description: string): Observable<Transaction> {
    return this.httpClient.post<Transaction>(`${this.API_ENDPOINT}/${accountId}/deposit`, {
      amount,
      description
    }).pipe(
      catchError(error => {
        console.error('Error processing deposit:', error);
        return throwError(() => new Error('Failed to process deposit'));
      })
    );
  }

  withdraw(accountId: string, amount: number, description: string): Observable<Transaction> {
    return this.httpClient.post<Transaction>(`${this.API_ENDPOINT}/${accountId}/withdraw`, {
      amount,
      description
    }).pipe(
      catchError(error => {
        console.error('Error processing withdrawal:', error);
        return throwError(() => new Error('Failed to process withdrawal'));
      })
    );
  }

  getAccountTransactions(accountId: string): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.API_ENDPOINT}/${accountId}/transactions`).pipe(
      map(transactions => transactions.map(tx => this.hydrateTransaction(tx))),
      catchError(error => {
        console.error('Error fetching transactions:', error);
        return of([]);
      })
    );
  }

  getCachedAccounts(): Observable<Account[]> {
    return this.accountsCache.asObservable();
  }

  clearCache(): void {
    this.accountsCache.next([]);
  }

  private hydrateAccount(data: any): Account {
    const account = new Account(
      data.id,
      data.userId,
      data.accountNumber,
      data.accountType,
      data.balance,
      data.currency,
      data.isActive,
      data.createdAt,
      data.updatedAt
    );
    account.overdraftLimit = data.overdraftLimit || 0;
    account.lastTransactionDate = data.lastTransactionDate ? new Date(data.lastTransactionDate) : null;
    return account;
  }

  private hydrateTransaction(data: any): Transaction {
    const transaction = new Transaction(
      data.id,
      data.accountId,
      data.type,
      data.amount,
      data.currency,
      data.description,
      data.createdAt,
      data.status,
      data.referenceNumber
    );
    transaction.relatedAccountId = data.relatedAccountId || null;
    transaction.fee = data.fee || 0;
    transaction.tax = data.tax || 0;
    transaction.metadata = data.metadata || {};
    return transaction;
  }

  private getMockAccounts(userId: string): Account[] {
    const mockAccount = new Account(
      'acc-001',
      userId,
      '1234567890',
      'checking',
      5000.00,
      'USD',
      true,
      new Date(),
      new Date()
    );
    mockAccount.overdraftLimit = 1000.00;
    mockAccount.lastTransactionDate = new Date();
    return [mockAccount];
  }
}

// === ARCHIVO: src/app/data/repositories/transaction.repository.ts ===
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { map, catchError, tap, mergeMap, finalize } from 'rxjs/operators';
import { Transaction } from '../../domain/entities/transaction.entity';
import { Account } from '../../domain/entities/account.entity';
import { HttpClientService } from '../services/http-client.service';
import { AccountRepository } from './account.repository';

export interface TransactionFilter {
  accountId?: string;
  type?: string;
  startDate?: Date;
  endDate?: Date;
  minAmount?: number;
  maxAmount?: number;
  status?: string;
}

export interface TransactionPage {
  transactions: Transaction[];
  total: number;
  page: number;
  pageSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionRepository {
  private transactionsCache = new BehaviorSubject<Map<string, Transaction[]>>(new Map());
  private pendingTransactions = new BehaviorSubject<Transaction[]>([]);
  private readonly API_ENDPOINT = '/api/transactions';

  constructor(
    private httpClient: HttpClientService,
    private accountRepository: AccountRepository
  ) {}

  getTransactions(filters?: TransactionFilter): Observable<Transaction[]> {
    const queryParams = this.buildQueryParams(filters);
    return this.httpClient.get<Transaction[]>(`${this.API_ENDPOINT}?${queryParams}`).pipe(
      map(transactions => transactions.map(tx => this.hydrateTransaction(tx))),
      tap(transactions => this.updateCache(transactions, filters?.accountId)),
      catchError(error => {
        console.error('Error fetching transactions:', error);
        return of([]);
      })
    );
  }

  getTransactionById(transactionId: string): Observable<Transaction | undefined> {
    return this.httpClient.get<Transaction>(`${this.API_ENDPOINT}/${transactionId}`).pipe(
      map(transaction => transaction ? this.hydrateTransaction(transaction) : undefined),
      catchError(error => {
        console.error('Error fetching transaction:', error);
        return of(undefined);
      })
    );
  }

  getTransactionsByAccount(accountId: string): Observable<Transaction[]> {
    const cached = this.transactionsCache.value.get(accountId);
    if (cached && cached.length > 0) {
      return of(cached);
    }

    return this.accountRepository.getAccountTransactions(accountId).pipe(
      tap(transactions => this.transactionsCache.value.set(accountId, transactions)),
      catchError(error => {
        console.error('Error fetching account transactions:', error);
        return of([]);
      })
    );
  }

  createTransaction(transaction: Partial<Transaction>): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.API_ENDPOINT, transaction).pipe(
      map(created => this.hydrateTransaction(created)),
      tap(created => this.addPendingTransaction(created)),
      catchError(error => {
        console.error('Error creating transaction:', error);
        return throwError(() => new Error('Failed to create transaction'));
      })
    );
  }

  updateTransaction(transactionId: string, updates: Partial<Transaction>): Observable<Transaction> {
    return this.httpClient.put<Transaction>(`${this.API_ENDPOINT}/${transactionId}`, updates).pipe(
      map(updated => this.hydrateTransaction(updated)),
      tap(updated => this.updateInCache(updated)),
      catchError(error => {
        console.error('Error updating transaction:', error);
        return throwError(() => new Error('Failed to update transaction'));
      })
    );
  }

  deleteTransaction(transactionId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_ENDPOINT}/${transactionId}`).pipe(
      tap(() => this.removeFromCache(transactionId)),
      catchError(error => {
        console.error('Error deleting transaction:', error);
        return throwError(() => new Error('Failed to delete transaction'));
      })
    );
  }

  getTransactionsPaged(page: number, pageSize: number, filters?: TransactionFilter): Observable<TransactionPage> {
    const queryParams = this.buildQueryParams(filters);
    return this.httpClient.get<TransactionPage>(
      `${this.API_ENDPOINT}/paged?page=${page}&pageSize=${pageSize}&${queryParams}`
    ).pipe(
      map(page => ({
        ...page,
        transactions: page.transactions.map(tx => this.hydrateTransaction(tx))
      })),
      catchError(error => {
        console.error('Error fetching paged transactions:', error);
        return of({
          transactions: [],
          total: 0,
          page,
          pageSize
        });
      })
    );
  }

  getTransactionsByDateRange(accountId: string, startDate: Date, endDate: Date): Observable<Transaction[]> {
    return this.getTransactions({
      accountId,
      startDate,
      endDate
    });
  }

  getTransactionsByType(accountId: string, type: string): Observable<Transaction[]> {
    return this.getTransactions({
      accountId,
      type
    });
  }

  getPendingTransactions(): Observable<Transaction[]> {
    return this.pendingTransactions.asObservable();
  }

  clearPendingTransactions(): void {
    this.pendingTransactions.next([]);
  }

  clearCache(): void {
    this.transactionsCache.next(new Map());
  }

  private buildQueryParams(filters?: TransactionFilter): string {
    if (!filters) return '';
    
    const params: string[] = [];
    if (filters.accountId) params.push(`accountId=${filters.accountId}`);
    if (filters.type) params.push(`type=${filters.type}`);
    if (filters.startDate) params.push(`startDate=${filters.startDate.toISOString()}`);
    if (filters.endDate) params.push(`endDate=${filters.endDate.toISOString()}`);
    if (filters.minAmount !== undefined) params.push(`minAmount=${filters.minAmount}`);
    if (filters.maxAmount !== undefined) params.push(`maxAmount=${filters.maxAmount}`);
    if (filters.status) params.push(`status=${filters.status}`);
    
    return params.join('&');
  }

  private hydrateTransaction(data: any): Transaction {
    const transaction = new Transaction(
      data.id,
      data.accountId,
      data.type,
      data.amount,
      data.currency,
      data.description,
      data.createdAt,
      data.status,
      data.referenceNumber
    );
    transaction.relatedAccountId = data.relatedAccountId || null;
    transaction.fee = data.fee || 0;
    transaction.tax = data.tax || 0;
    transaction.metadata = data.metadata || {};
    return transaction;
  }

  private updateCache(transactions: Transaction[], accountId?: string): void {
    if (accountId) {
      const currentCache = this.transactionsCache.value;
      currentCache.set(accountId, transactions);
      this.transactionsCache.next(currentCache);
    }
  }

  private updateInCache(transaction: Transaction): void {
    const currentCache = this.transactionsCache.value;
    const accountTransactions = currentCache.get(transaction.accountId);
    if (accountTransactions) {
      const index = accountTransactions.findIndex(tx => tx.id === transaction.id);
      if (index !== -1) {
        accountTransactions[index] = transaction;
        currentCache.set(transaction.accountId, accountTransactions);
        this.transactionsCache.next(currentCache);
      }
    }
  }

  private removeFromCache(transactionId: string): void {
    const currentCache = this.transactionsCache.value;
    for (const [accountId, transactions] of currentCache.entries()) {
      const filtered = transactions.filter(tx => tx.id !== transactionId);
      if (filtered.length !== transactions.length) {
        currentCache.set(accountId, filtered);
        this.transactionsCache.next(currentCache);
        break;
      }
    }
  }

  private addPendingTransaction(transaction: Transaction): void {
    const current = this.pendingTransactions.value;
    this.pendingTransactions.next([...current, transaction]);
  }
}

// === ARCHIVO: src/app/data/services/http-client.service.ts ===
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, timeout, map } from 'rxjs/operators';

export interface HttpRequestConfig {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  params?: HttpParams | { [param: string]: string | string[] };
  reportProgress?: boolean;
  responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
  withCredentials?: boolean;
}

export interface HttpResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: HttpHeaders;
}

export interface HttpError {
  message: string;
  status: number;
  statusText: string;
  url?: string;
  error?: any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private readonly DEFAULT_TIMEOUT = 30000;
  private readonly DEFAULT_RETRIES = 3;
  private readonly BASE_URL = 'https://api.fintech-app.com';

  constructor(private http: HttpClient) {}

  get<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.get<T>(fullUrl, requestConfig).pipe(
      timeout(config?.reportProgress ? this.DEFAULT_TIMEOUT : 15000),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  post<T>(url: string, body: any, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.post<T>(fullUrl, body, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  put<T>(url: string, body: any, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.put<T>(fullUrl, body, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  patch<T>(url: string, body: any, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.patch<T>(fullUrl, body, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  delete<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.delete<T>(fullUrl, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  head<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.head<T>(fullUrl, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      catchError(this.handleError)
    );
  }

  options<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.options<T>(fullUrl, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      catchError(this.handleError)
    );
  }

  request<T>(method: string, url: string, config?: HttpRequestConfig & { body?: any }): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.request<T>(method, fullUrl, {
      ...requestConfig,
      body: config?.body
    }).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      catchError(this.handleError)
    );
  }

  private buildFullUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `${this.BASE_URL}${url.startsWith('/') ? url : '/' + url}`;
  }

  private buildRequestConfig(config?: HttpRequestConfig): any {
    const defaultConfig: any = {
      responseType: 'json',
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    if (!config) {
      return defaultConfig;
    }

    if (config.headers) {
      if (config.headers instanceof HttpHeaders) {
        defaultConfig.headers = config.headers;
      } else {
        defaultConfig.headers = new HttpHeaders(config.headers);
      }
    }

    if (config.params) {
      defaultConfig.params = config.params instanceof HttpParams 
        ? config.params 
        : new HttpParams({ fromObject: config.params });
    }

    if (config.responseType) {
      defaultConfig.responseType = config.responseType;
    }

    if (config.withCredentials !== undefined) {
      defaultConfig.withCredentials = config.withCredentials;
    }

    if (config.reportProgress !== undefined) {
      defaultConfig.reportProgress = config.reportProgress;
    }

    return defaultConfig;
  }

  private handleError = (error: HttpErrorResponse): Observable<never> => {
    let errorMessage: string;
    const httpError: HttpError = {
      message: '',
      status: error.status,
      statusText: error.statusText,
      url: error.url,
      error: error.error
    };

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error del cliente: ${error.error.message}`;
      httpError.message = errorMessage;
    } else {
      switch (error.status) {
        case 0:
          errorMessage = 'No se pudo conectar con el servidor. Verifica tu conexión a internet.';
          break;
        case 400:
          errorMessage = error.error?.message || 'Solicitud incorrecta. Verifica los datos enviados.';
          break;
        case 401:
          errorMessage = 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.';
          break;
        case 403:
          errorMessage = 'No tienes permiso para realizar esta acción.';
          break;
        case 404:
          errorMessage = 'El recurso solicitado no fue encontrado.';
          break;
        case 408:
          errorMessage = 'La solicitud tardó demasiado. Intenta de nuevo.';
          break;
        case 422:
          errorMessage = error.error?.message || 'Los datos enviados no son válidos.';
          break;
        case 429:
          errorMessage = 'Demasiadas solicitudes. Por favor, espera un momento.';
          break;
        case 500:
          errorMessage = 'Error interno del servidor. Intenta más tarde.';
          break;
        case 502:
          errorMessage = 'El servidor no está disponible temporalmente.';
          break;
        case 503:
          errorMessage = 'El servicio no está disponible. Intenta más tarde.';
          break;
        case 504:
          errorMessage = 'El servidor tardó demasiado en responder.';
          break;
        default:
          errorMessage = `Error inesperado (${error.status}): ${error.statusText}`;
      }
      httpError.message = errorMessage;
    }

    console.error('HTTP Error:', httpError);
    return throwError(() => httpError);
  }
}

// === ARCHIVO: src/app/presentation/pages/auth/login.page.ts ===
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../../../domain/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private navController: NavController,
    private alertController: AlertController
  ) {}

  async onLogin(): Promise<void> {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor complete todos los campos';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    try {
      const success = await this.authService.login(this.email, this.password);
      
      if (success) {
        this.navController.navigateForward('/accounts');
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    } catch (error) {
      this.errorMessage = 'Error al iniciar sesión. Intente de nuevo.';
      await this.showErrorAlert();
    } finally {
      this.isLoading = false;
    }
  }

  private async showErrorAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No se pudo conectar con el servidor. Verifique su conexión a internet.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  goToRegister(): void {
    this.navController.navigateForward('/register');
  }

  onEmailChange(event: any): void {
    this.email = event.detail?.value || '';
  }

  onPasswordChange(event: any): void {
    this.password = event.detail?.value || '';
  }
}

// === ARCHIVO: src/app/presentation/pages/auth/login.page.html ===
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>Iniciar Sesión</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div class="login-container">
    <div class="logo-section">
      <h1>Fintech App</h1>
      <p>Gestiona tus finanzas</p>
    </div>

    <form (ngSubmit)="onLogin()">
      <ion-item>
        <ion-label position="floating">Correo electrónico</ion-label>
        <ion-input
          type="email"
          [(ngModel)]="email"
          name="email"
          (ionChange)="onEmailChange($event)"
          required>
        </ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input
          type="password"
          [(ngModel)]="password"
          name="password"
          (ionChange)="onPasswordChange($event)"
          required>
        </ion-input>
      </ion-item>

      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <ion-button
        type="submit"
        expand="block"
        [disabled]="isLoading"
        class="login-button">
        <ion-spinner *ngIf="isLoading" name="lines-small"></ion-spinner>
        <span *ngIf="!isLoading">Iniciar Sesión</span>
      </ion-button>
    </form>

    <div class="register-link">
      <p>¿No tienes cuenta? <a (click)="goToRegister()">Regístrate</a></p>
    </div>
  </div>
</ion-content>

// === ARCHIVO: src/app/presentation/pages/accounts/accounts.page.ts ===
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonLoading, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { Account } from '../../../domain/entities/account.entity';
import { AccountService } from '../../../domain/services/account.service';
import { User } from '../../../domain/entities/user.entity';
import { AuthService } from '../../../domain/services/auth.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonLoading,
    IonRefresher,
    IonRefresherContent
  ]
})
export class AccountsPage implements OnInit, OnDestroy {
  accounts: Account[] = [];
  user: User | null = null;
  isLoading: boolean = true;
  errorMessage: string = '';
  totalBalance: number = 0;
  currency: string = 'USD';
  private destroy$ = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadUserData();
    this.loadAccounts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadUserData(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (err) => {
          console.error('Error loading user data:', err);
        }
      });
  }

  loadAccounts(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.accountService.getAccounts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (accounts) => {
          this.accounts = accounts;
          this.calculateTotalBalance();
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Error al cargar las cuentas. Intente de nuevo.';
          this.isLoading = false;
          console.error('Error loading accounts:', err);
        }
      });
  }

  private calculateTotalBalance(): void {
    this.totalBalance = this.accounts
      .filter(account => account.isActive)
      .reduce((sum, account) => sum + account.balance, 0);

    if (this.accounts.length > 0) {
      this.currency = this.accounts[0].currency;
    }
  }

  getAccountTypeLabel(type: string): string {
    const typeLabels: Record<string, string> = {
      'checking': 'Cuenta Corriente',
      'savings': 'Cuenta de Ahorros',
      'investment': 'Cuenta de Inversión',
      'credit': 'Tarjeta de Crédito'
    };
    return typeLabels[type] || type;
  }

  formatBalance(balance: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: this.currency
    }).format(balance);
  }

  navigateToDetail(accountId: string): void {
    console.log('Navigating to account detail:', accountId);
  }

  handleRefresh(event: any): void {
    this.loadAccounts();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  doDeposit(account: Account): void {
    console.log('Deposit to account:', account.id);
  }

  doWithdraw(account: Account): void {
    console.log('Withdraw from account:', account.id);
  }

  getActiveAccounts(): Account[] {
    return this.accounts.filter(account => account.isActive);
  }

  getInactiveAccounts(): Account[] {
    return this.accounts.filter(account => !account.isActive);
  }

  hasAccounts(): boolean {
    return this.accounts.length > 0;
  }

  getAccountCount(): number {
    return this.accounts.length;
  }

  getActiveAccountCount(): number {
    return this.getActiveAccounts().length;
  }
}

// === ARCHIVO: src/app/presentation/pages/accounts/accounts.page.html ===
<ion-header>
  <ion-toolbar color="primary">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/home"></ion-back-button>
    </ion-buttons>
    <ion-title>Mis Cuentas</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <div class="page-container">
    <div class="header-section">
      <h2 class="section-title">Cuentas Bancarias</h2>
      <p class="section-subtitle">Administra tus cuentas y consulta tu saldo</p>
    </div>

    <div class="accounts-summary" *ngIf="accounts.length > 0">
      <ion-card class="summary-card">
        <ion-card-header>
          <ion-card-subtitle>Saldo Total</ion-card-subtitle>
          <ion-card-title class="total-balance">{{ getTotalBalance() | currency:defaultCurrency }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <div class="summary-stats">
            <div class="stat-item">
              <span class="stat-label">Cuentas Activas</span>
              <span class="stat-value">{{ getActiveAccountsCount() }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Promedio</span>
              <span class="stat-value">{{ getAverageBalance() | currency:defaultCurrency }}</span>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
    </div>

    <div class="accounts-list" *ngIf="accounts.length > 0; else noAccounts">
      <ion-list lines="full" class="accounts-ion-list">
        <ion-item-group>
          <ion-item-divider color="light">
            <ion-label>Tus Cuentas</ion-label>
          </ion-item-divider>
          
          <app-account-card 
            *ngFor="let account of accounts; trackBy: trackByAccountId"
            [account]="account"
            (accountSelected)="onAccountSelected($event)"
            (accountAction)="onAccountAction($event)">
          </app-account-card>
        </ion-item-group>
      </ion-list>
    </div>

    <ng-template #noAccounts>
      <div class="empty-state">
        <ion-icon name="wallet-outline" class="empty-icon"></ion-icon>
        <h3>No tienes cuentas registradas</h3>
        <p>Contacta con tu banco para abrir una cuenta</p>
        <ion-button expand="block" (click)="refreshAccounts()">
          <ion-icon slot="start" name="refresh"></ion-icon>
          Actualizar
        </ion-button>
      </div>
    </ng-template>

    <div class="action-buttons">
      <ion-button expand="block" color="secondary" (click)="openNewAccountModal()">
        <ion-icon slot="start" name="add-circle"></ion-icon>
        Nueva Cuenta
      </ion-button>
      <ion-button expand="block" fill="outline" (click)="refreshAccounts()">
        <ion-icon slot="start" name="sync"></ion-icon>
        Sincronizar
      </ion-button>
    </div>
  </div>

  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content
      pullingText="Desliza para actualizar"
      refreshingSpinner="circles"
      refreshingText="Actualizando cuentas...">
    </ion-refresher-content>
  </ion-refresher>

  <ion-infinite-scroll (ionInfinite)="loadMoreAccounts($event)">
    <ion-infinite-scroll-content
      loadingSpinner="bubbles"
      loadingText="Cargando más cuentas...">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>

<ion-footer>
  <ion-toolbar>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
          <ion-icon name="home"></ion-icon>
          <ion-label>Inicio</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="accounts" selected="true">
          <ion-icon name="wallet"></ion-icon>
          <ion-label>Cuentas</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="transactions">
          <ion-icon name="swap-horizontal"></ion-icon>
          <ion-label>Movimientos</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile">
          <ion-icon name="person"></ion-icon>
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-toolbar>
</ion-footer>

// === ARCHIVO: src/app/presentation/pages/transactions/transactions.page.ts ===
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Account } from '../../../domain/entities/account.entity';
import { Transaction } from '../../../domain/entities/transaction.entity';
import { AccountService } from '../../../domain/services/account.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone: false
})
export class TransactionsPage implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  accounts: Account[] = [];
  selectedAccountId: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  searchTerm: string = '';
  filterType: string = 'all';
  sortOrder: 'date' | 'amount' | 'type' = 'date';
  currentPage: number = 1;
  pageSize: number = 20;
  totalTransactions: number = 0;

  constructor(
    private accountService: AccountService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAccounts();
    this.loadTransactions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAccounts(): void {
    this.accountService.getAccounts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (accounts) => {
          this.accounts = accounts;
          if (accounts.length > 0 && !this.selectedAccountId) {
            this.selectedAccountId = accounts[0].id;
          }
        },
        error: (error) => {
          console.error('Error loading accounts:', error);
          this.showError('No se pudieron cargar las cuentas');
        }
      });
  }

  loadTransactions(): void {
    if (!this.selectedAccountId) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const account = this.accounts.find(a => a.id === this.selectedAccountId);
    if (account && account.transactions) {
      this.transactions = account.transactions;
      this.totalTransactions = this.transactions.length;
      this.applyFilters();
      this.isLoading = false;
    } else {
      this.accountService.getTransactionsByAccount(this.selectedAccountId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (transactions) => {
            this.transactions = transactions;
            this.totalTransactions = transactions.length;
            this.applyFilters();
            this.isLoading = false;
          },
          error: (error) => {
            this.isLoading = false;
            this.errorMessage = 'Error al cargar transacciones';
            console.error('Error loading transactions:', error);
            this.showError(this.errorMessage);
          }
        });
    }
  }

  onAccountChange(event: any): void {
    this.selectedAccountId = event.detail.value;
    this.currentPage = 1;
    this.loadTransactions();
  }

  applyFilters(): void {
    let result = [...this.transactions];

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(t => 
        t.description.toLowerCase().includes(term) ||
        t.referenceNumber.toLowerCase().includes(term) ||
        t.type.toLowerCase().includes(term)
      );
    }

    if (this.filterType !== 'all') {
      result = result.filter(t => t.type === this.filterType);
    }

    result.sort((a, b) => {
      switch (this.sortOrder) {
        case 'date':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'amount':
          return Math.abs(b.amount) - Math.abs(a.amount);
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });

    this.filteredTransactions = result.slice(0, this.currentPage * this.pageSize);
  }

  onSearchChange(event: any): void {
    this.searchTerm = event.detail.value;
    this.currentPage = 1;
    this.applyFilters();
  }

  onFilterChange(event: any): void {
    this.filterType = event.detail.value;
    this.currentPage = 1;
    this.applyFilters();
  }

  onSortChange(event: any): void {
    this.sortOrder = event.detail.value;
    this.applyFilters();
  }

  loadMore(event: any): void {
    setTimeout(() => {
      this.currentPage++;
      this.applyFilters();
      event.target.complete();
      
      if (this.filteredTransactions.length >= this.totalTransactions) {
        event.target.disabled = true;
      }
    }, 500);
  }

  async refreshTransactions(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Actualizando transacciones...',
      spinner: 'circles'
    });
    await loading.present();

    this.loadTransactions();
    
    setTimeout(async () => {
      await loading.dismiss();
      const toast = await this.toastController.create({
        message: 'Transacciones actualizadas',
        duration: 2000,
        color: 'success',
        position: 'bottom'
      });
      await toast.present();
    }, 1000);
  }

  async showTransactionDetails(transaction: Transaction): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Detalle de Transacción',
      message: `
        <div class="transaction-details">
          <p><strong>Tipo:</strong> ${this.getTransactionTypeLabel(transaction.type)}</p>
          <p><strong>Monto:</strong> ${this.formatAmount(transaction)}</p>
          <p><strong>Descripción:</strong> ${transaction.description}</p>
          <p><strong>Fecha:</strong> ${this.formatDate(transaction.createdAt)}</p>
          <p><strong>Referencia:</strong> ${transaction.referenceNumber}</p>
          <p><strong>Estado:</strong> ${this.getStatusLabel(transaction.status)}</p>
          ${transaction.fee > 0 ? `<p><strong>Comisión:</strong> ${transaction.fee.toFixed(2)}</p>` : ''}
          ${transaction.tax > 0 ? `<p><strong>Impuesto:</strong> ${transaction.tax.toFixed(2)}</p>` : ''}
        </div>
      `,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        },
        {
          text: 'Compartir',
          handler: () => {
            this.shareTransaction(transaction);
          }
        }
      ]
    });
    await alert.present();
  }

  getTransactionTypeLabel(type: string): string {
    const typeLabels: Record<string, string> = {
      'deposit': 'Depósito',
      'withdrawal': 'Retiro',
      'transfer': ' Transferencia',
      'payment': 'Pago',
      'fee': 'Comisión',
      'interest': 'Interés',
      'dividend': 'Dividendo',
      'refund': 'Reembolso'
    };
    return typeLabels[type.toLowerCase()] || type;
  }

  formatAmount(transaction: Transaction): string {
    const sign = transaction.type === 'deposit' || transaction.type === 'refund' ? '+' : '-';
    return `${sign}$${Math.abs(transaction.amount).toFixed(2)} ${transaction.currency}`;
  }

  formatDate(date: Date | string): string {
    const d = new Date(date);
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getStatusLabel(status: string): string {
    const statusLabels: Record<string, string> = {
      'pending': 'Pendiente',
      'completed': 'Completada',
      'failed': 'Fallida',
      'cancelled': 'Cancelada',
      'reversed': 'Reversada'
    };
    return statusLabels[status.toLowerCase()] || status;
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      'pending': 'warning',
      'completed': 'success',
      'failed': 'danger',
      'cancelled': 'medium',
      'reversed': 'tertiary'
    };
    return colors[status.toLowerCase()] || 'primary';
  }

  getTransactionIcon(type: string): string {
    const icons: Record<string, string> = {
      'deposit': 'arrow-down-circle',
      'withdrawal': 'arrow-up-circle',
      'transfer': 'swap-horizontal',
      'payment': 'card',
      'fee': 'remove-circle',
      'interest': 'trending-up',
      'dividend': 'gift',
      'refund': 'return-up-back'
    };
    return icons[type.toLowerCase()] || 'help-circle';
  }

  async shareTransaction(transaction: Transaction): Promise<void> {
    const message = `Transacción ${this.getTransactionTypeLabel(transaction.type)}\nMonto: ${this.formatAmount(transaction)}\nFecha: ${this.formatDate(transaction.createdAt)}\nReferencia: ${transaction.referenceNumber}`;
    
    const toast = await this.toastController.create({
      message: 'Compartir transacción: ' + message,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }

  async showError(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  trackByTransactionId(index: number, transaction: Transaction): string {
    return transaction.id;
  }

  getTransactionCount(): number {
    return this.filteredTransactions.length;
  }

  getTotalAmount(): number {
    return this.filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
  }

  getFilteredCount(): number {
    return this.filteredTransactions.length;
  }

  hasMoreTransactions(): boolean {
    return this.filteredTransactions.length < this.totalTransactions;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.filterType = 'all';
    this.sortOrder = 'date';
    this.currentPage = 1;
    this.applyFilters();
  }

  exportTransactions(): void {
    const csvContent = this.generateCSV();
    console.log('Exporting transactions:', csvContent);
  }

  private generateCSV(): string {
    const headers = ['Fecha', 'Tipo', 'Monto', 'Descripción', 'Referencia', 'Estado'];
    const rows = this.filteredTransactions.map(t => [
      this.formatDate(t.createdAt),
      this.getTransactionTypeLabel(t.type),
      t.amount.toString(),
      t.description,
      t.referenceNumber,
      this.getStatusLabel(t.status)
    ]);
    
    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  }

  navigateToAccountDetails(accountId: string): void {
    this.router.navigate(['/accounts', accountId]);
  }
}

// === ARCHIVO: src/app/presentation/pages/transactions/transactions.page.html ===
<ion-header>
  <ion-toolbar color="primary">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/home"></ion-back-button>
    </ion-buttons>
    <ion-title>Movimientos</ion-title>
    <ion-buttons slot="end">
      <ion-button (click)="exportTransactions()">
        <ion-icon slot="icon-only" name="download-outline"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <div class="page-container">
    <div class="header-section">
      <h2 class="section-title">Historial de Transacciones</h2>
      <p class="section-subtitle">Consulta todos tus movimientos financieros</p>
    </div>

    <div class="account-selector" *ngIf="accounts.length > 0">
      <ion-item lines="none" class="account-select-item">
        <ion-label position="floating">Seleccionar Cuenta</ion-label>
        <ion-select 
          [(ngModel)]="selectedAccountId" 
          (ionChange)="onAccountChange($event)"
          interface="popover"
          class="account-select">
          <ion-select-option *ngFor="let account of accounts" [value]="account.id">
            {{ account.accountType }} - {{ account.accountNumber | slice:-4 }}
          </ion-select-option>
        </ion-select>
      </ion-item>
    </div>

    <div class="filters-section">
      <ion-searchbar
        [(ngModel)]="searchTerm"
        (ionChange)="onSearchChange($event)"
        placeholder="Buscar por descripción o referencia"
        [debounce]="300"
        show-clear-button="always">
      </ion-searchbar>

      <div class="filter-row">
        <ion-select
          [(ngModel)]="filterType"
          (ionChange)="onFilterChange($event)"
          interface="popover"
          placeholder="Tipo"
          class="filter-select">
          <ion-select-option value="all">Todos</ion-select-option>
          <ion-select-option value="deposit">Depósitos</ion-select-option>
          <ion-select-option value="withdrawal">Retiros</ion-select-option>
          <ion-select-option value="transfer">Transferencias</ion-select-option>
          <ion-select-option value="payment">Pagos</ion-select-option>
        </ion-select>

        <ion-select
          [(ngModel)]="sortOrder"
          (ionChange)="onSortChange($event)"
          interface="popover"
          placeholder="Ordenar"
          class="filter-select">
          <ion-select-option value="date">Fecha</ion-select-option>
          <ion-select-option value="amount">Monto</ion-select-option>
          <ion-select-option value="type">Tipo</ion-select-option>
        </ion-select>

        <ion-button fill="clear" (click)="clearFilters()" *ngIf="searchTerm || filterType !== 'all'">
          <ion-icon slot="icon-only" name="close-circle"></ion-icon>
        </ion-button>
      </div>
    </div>

    <div class="transactions-summary" *ngIf="filteredTransactions.length > 0">
      <ion-card class="summary-card">
        <ion-card-content>
          <div class="summary-stats">
            <div class="stat-item">
              <span class="stat-label">Total Transacciones</span>
              <span class="stat-value">{{ getFilteredCount() }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Monto Total</span>
              <span class="stat-value" [class.positive]="getTotalAmount() > 0" [class.negative]="getTotalAmount() < 0">
                {{ getTotalAmount() | currency }}
              </span>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
    </div>

    <div class="transactions-list" *ngIf="!isLoading && filteredTransactions.length > 0; else noTransactions">
      <ion-list lines="full" class="transactions-ion-list">
        <app-transaction-item
          *ngFor="let transaction of filteredTransactions; trackBy: trackByTransactionId"
          [transaction]="transaction"
          [typeLabel]="getTransactionTypeLabel(transaction.type)"
          [statusLabel]="getStatusLabel(transaction.status)"
          [statusColor]="getStatusColor(transaction.status)"
          [icon]="getTransactionIcon(transaction.type)"
          (transactionClick)="showTransactionDetails($event)">
        </app-transaction-item>
      </ion-list>
    </div>

    <ng-template #noTransactions>
      <div class="empty-state">
        <ion-icon name="receipt-outline" class="empty-icon"></ion-icon>
        <h3 *ngIf="!isLoading">No hay transacciones</h3>
        <p *ngIf="!isLoading">
          {{ searchTerm || filterType !== 'all' ? 'No hay resultados para los filtros aplicados' : 'No hay movimientos en esta cuenta' }}
        </p>
        <ion-button expand="block" (click)="clearFilters()" *ngIf="searchTerm || filterType !== 'all'">
          <ion-icon slot="start" name="refresh"></ion-icon>
          Limpiar Filtros
        </ion-button>
        <ion-button expand="block" (click)="refreshTransactions()" *ngIf="!searchTerm && filterType === 'all'">
          <ion-icon slot="start" name="sync"></ion-icon>
          Actualizar
        </ion-button>
      </div>
    </ng-template>

    <div *ngIf="isLoading" class="loading-container">
      <ion-spinner name="bubbles" class="loading-spinner"></ion-spinner>
      <p>Cargando transacciones...</p>
    </div>

    <div *ngIf="errorMessage" class="error-container">
      <ion-icon name="error-outline" class="error-icon"></ion-icon>
      <p>{{ errorMessage }}</p>
      <ion-button expand="block" (click)="loadTransactions()">
        <ion-icon slot="start" name="refresh"></ion-icon>
        Reintentar
      </ion-button>
    </div>
  </div>

  <ion-refresher slot="fixed" (ionRefresh)="refreshTransactions()">
    <ion-refresher-content
      pullingText="Desliza para actualizar"
      refreshingSpinner="circles"
      refreshingText="Actualizando transacciones...">
    </ion-refresher-content>
  </ion-refresher>

  <ion-infinite-scroll (ionInfinite)="loadMore($event)" [disabled]="!hasMoreTransactions()">
    <ion-infinite-scroll-content
      loadingSpinner="bubbles"
      loadingText="Cargando más transacciones...">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>

<ion-footer>
  <ion-toolbar>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
          <ion-icon name="home"></ion-icon>
          <ion-label>Inicio</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="accounts">
          <ion-icon name="wallet"></ion-icon>
          <ion-label>Cuentas</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="transactions" selected="true">
          <ion-icon name="swap-horizontal"></ion-icon>
          <ion-label>Movimientos</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile">
          <ion-icon name="person"></ion-icon>
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-toolbar>
</ion-footer>

// === ARCHIVO: src/app/presentation/components/account-card.component.ts ===
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../../domain/entities/account.entity';

@Component({
  selector: 'app-account-card',
  standalone: false,
  moduleId: 'module.id',
  template: `
    <ion-card class="account-card" (click)="onCardClick()">
      <ion-card-header>
        <ion-card-title class="account-number">{{ account.accountNumber }}</ion-card-title>
        <ion-card-subtitle class="account-type">{{ account.accountType }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <div class="balance-section">
          <span class="balance-label">Saldo disponible</span>
          <span class="balance-amount">{{ account.currency }} {{ account.balance.toFixed(2) }}</span>
        </div>
        <div class="account-details">
          <div class="detail-row">
            <span class="detail-label">Límite de sobregiro:</span>
            <span class="detail-value">{{ account.currency }} {{ account.overdraftLimit.toFixed(2) }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Última transacción:</span>
            <span class="detail-value">{{ formatDate(account.lastTransactionDate) }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Estado:</span>
            <span class="detail-value" [class.active]="account.isActive" [class.inactive]="!account.isActive">
              {{ account.isActive ? 'Activa' : 'Inactiva' }}
            </span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Creada:</span>
            <span class="detail-value">{{ formatDate(account.createdAt) }}</span>
          </div>
        </div>
        <div class="actions">
          <ion-button fill="outline" size="small" (click)="onDeposit($event)">Depositar</ion-button>
          <ion-button fill="outline" size="small" (click)="onWithdraw($event)">Retirar</ion-button>
          <ion-button fill="clear" size="small" (click)="onViewTransactions($event)">Ver transacciones</ion-button>
        </div>
      </ion-card-content>
    </ion-card>
  `,
  styles: [`
    .account-card {
      margin: 16px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .account-number {
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .account-type {
      text-transform: uppercase;
      font-size: 0.8rem;
      color: var(--ion-color-medium);
    }
    .balance-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid var(--ion-color-light);
    }
    .balance-label {
      font-size: 0.9rem;
      color: var(--ion-color-medium);
    }
    .balance-amount {
      font-size: 2rem;
      font-weight: bold;
      color: var(--ion-color-primary);
    }
    .account-details {
      padding: 12px 0;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      font-size: 0.9rem;
    }
    .detail-label {
      color: var(--ion-color-medium);
    }
    .detail-value.active {
      color: var(--ion-color-success);
    }
    .detail-value.inactive {
      color: var(--ion-color-danger);
    }
    .actions {
      display: flex;
      justify-content: space-between;
      padding-top: 12px;
      border-top: 1px solid var(--ion-color-light);
    }
  `]
})
export class AccountCardComponent {
  @Input() account: Account | null = null;
  @Output() cardClick = new EventEmitter<Account>();
  @Output() depositClick = new EventEmitter<Account>();
  @Output() withdrawClick = new EventEmitter<Account>();
  @Output() viewTransactionsClick = new EventEmitter<Account>();

  constructor() {}

  onCardClick(): void {
    if (this.account) {
      this.cardClick.emit(this.account);
    }
  }

  onDeposit(event: Event): void {
    event.stopPropagation();
    if (this.account) {
      this.depositClick.emit(this.account);
    }
  }

  onWithdraw(event: Event): void {
    event.stopPropagation();
    if (this.account) {
      this.withdrawClick.emit(this.account);
    }
  }

  onViewTransactions(event: Event): void {
    event.stopPropagation();
    if (this.account) {
      this.viewTransactionsClick.emit(this.account);
    }
  }

  formatDate(date: Date | null): string {
    if (!date) {
      return 'Sin transacciones';
    }
    const d = new Date(date);
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}

// === ARCHIVO: src/app/presentation/components/transaction-item.component.ts ===
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../domain/entities/transaction.entity';
import { Account } from '../../domain/entities/account.entity';

@Component({
  selector: 'app-transaction-item',
  standalone: false,
  moduleId: 'module.id',
  template: `
    <ion-item class="transaction-item" (click)="onItemClick()">
      <ion-icon 
        [name]="getTransactionIcon()" 
        [color]="getTransactionColor()" 
        slot="start"
        class="transaction-icon">
      </ion-icon>
      <ion-label>
        <div class="transaction-header">
          <span class="transaction-type">{{ transaction.type }}</span>
          <span class="transaction-amount" [class.positive]="isPositive()" [class.negative]="!isPositive()">
            {{ isPositive() ? '+' : '-' }}{{ transaction.currency }} {{ transaction.amount.toFixed(2) }}
          </span>
        </div>
        <div class="transaction-description">{{ transaction.description }}</div>
        <div class="transaction-meta">
          <span class="transaction-reference">Ref: {{ transaction.referenceNumber }}</span>
          <span class="transaction-date">{{ formatDate(transaction.createdAt) }}</span>
        </div>
        <div class="transaction-details" *ngIf="showDetails">
          <div class="detail-item" *ngIf="transaction.fee > 0">
            <span>Comisión:</span>
            <span>{{ transaction.currency }} {{ transaction.fee.toFixed(2) }}</span>
          </div>
          <div class="detail-item" *ngIf="transaction.tax > 0">
            <span>Impuesto:</span>
            <span>{{ transaction.currency }} {{ transaction.tax.toFixed(2) }}</span>
          </div>
          <div class="detail-item" *ngIf="transaction.relatedAccountId">
            <span>Cuenta relacionada:</span>
            <span>{{ transaction.relatedAccountId }}</span>
          </div>
          <div class="detail-item">
            <span>Estado:</span>
            <span [class]="'status-' + transaction.status.toLowerCase()">{{ transaction.status }}</span>
          </div>
        </div>
      </ion-label>
      <ion-button 
        fill="clear" 
        slot="end" 
        (click)="toggleDetails($event)" 
        *ngIf="transaction.fee > 0 || transaction.tax > 0 || transaction.relatedAccountId">
        <ion-icon [name]="showDetails ? 'chevron-up' : 'chevron-down'"></ion-icon>
      </ion-button>
    </ion-item>
  `,
  styles: [`
    .transaction-item {
      --padding-start: 16px;
      --padding-end: 16px;
      --padding-top: 12px;
      --padding-bottom: 12px;
      border-bottom: 1px solid var(--ion-color-light);
    }
    .transaction-icon {
      font-size: 24px;
      margin-right: 12px;
    }
    .transaction-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .transaction-type {
      font-weight: 600;
      font-size: 1rem;
      text-transform: capitalize;
    }
    .transaction-amount {
      font-size: 1.1rem;
      font-weight: bold;
    }
    .transaction-amount.positive {
      color: var(--ion-color-success);
    }
    .transaction-amount.negative {
      color: var(--ion-color-danger);
    }
    .transaction-description {
      color: var(--ion-color-medium);
      font-size: 0.9rem;
      margin-bottom: 4px;
    }
    .transaction-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: var(--ion-color-medium);
    }
    .transaction-reference {
      font-family: monospace;
    }
    .transaction-details {
      margin-top: 12px;
      padding: 8px;
      background: var(--ion-color-light);
      border-radius: 8px;
    }
    .detail-item {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      font-size: 0.85rem;
    }
    .status-completed {
      color: var(--ion-color-success);
    }
    .status-pending {
      color: var(--ion-color-warning);
    }
    .status-failed {
      color: var(--ion-color-danger);
    }
  `]
})
export class TransactionItemComponent {
  @Input() transaction: Transaction | null = null;
  @Input() relatedAccount: Account | null = null;
  @Output() itemClick = new EventEmitter<Transaction>();
  
  showDetails: boolean = false;

  constructor() {}

  onItemClick(): void {
    if (this.transaction) {
      this.itemClick.emit(this.transaction);
    }
  }

  toggleDetails(event: Event): void {
    event.stopPropagation();
    this.showDetails = !this.showDetails;
  }

  isPositive(): boolean {
    if (!this.transaction) return false;
    return this.transaction.type.toLowerCase() === 'deposit' || 
           this.transaction.type.toLowerCase() === 'credit' ||
           this.transaction.amount > 0;
  }

  getTransactionIcon(): string {
    if (!this.transaction) return 'help-circle';
    const type = this.transaction.type.toLowerCase();
    switch (type) {
      case 'deposit':
        return 'arrow-down-circle';
      case 'withdraw':
      case 'withdrawal':
        return 'arrow-up-circle';
      case 'transfer':
        return 'swap-horizontal';
      case 'payment':
        return 'card';
      case 'fee':
        return 'remove-circle';
      case 'interest':
        return 'trending-up';
      default:
        return 'cash';
    }
  }

  getTransactionColor(): string {
    if (!this.transaction) return 'medium';
    if (this.isPositive()) return 'success';
    return 'danger';
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

// === ARCHIVO: src/app/presentation/shared/app.module.ts ===
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { AccountCardComponent } from '../components/account-card.component';
import { TransactionItemComponent } from '../components/transaction-item.component';

import { LoginPage } from '../pages/auth/login.page';
import { AccountsPage } from '../pages/accounts/accounts.page';
import { TransactionsPage } from '../pages/transactions/transactions.page';

@NgModule({
  declarations: [
    AccountCardComponent,
    TransactionItemComponent,
    LoginPage,
    AccountsPage,
    TransactionsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot({
      mode: 'ios',
      backButtonText: 'Atrás',
      backButtonIcon: 'arrow-back',
      swipeBackEnabled: true,
      animated: true
    }),
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPage },
      { path: 'accounts', component: AccountsPage },
      { path: 'transactions', component: TransactionsPage },
      { path: 'transactions/:accountId', component: TransactionsPage },
      { path: '**', redirectTo: '/login' }
    ], {
      useHash: true,
      enableTracing: false
    })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AccountCardComponent,
    TransactionItemComponent,
    LoginPage,
    AccountsPage,
    TransactionsPage
  ],
  bootstrap: []
})
export class AppModule {
  constructor() {
    console.log('AppModule inicializado');
  }
}

// === ARCHIVO: src/app/app.component.ts ===
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AuthService } from './domain/services/auth.service';
import { AccountService } from './domain/services/account.service';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-menu *ngIf="isAuthenticated" content-id="main-content" type="overlay">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>FinTech App</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-menu-toggle auto-hide="false">
              <ion-item button (click)="navigateTo('/accounts')">
                <ion-icon slot="start" name="wallet"></ion-icon>
                <ion-label>Cuentas</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle auto-hide="false">
              <ion-item button (click)="navigateTo('/transactions')">
                <ion-icon slot="start" name="swap-horizontal"></ion-icon>
                <ion-label>Transacciones</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle auto-hide="false">
              <ion-item button (click)="logout()">
                <ion-icon slot="start" name="log-out"></ion-icon>
                <ion-label>Cerrar Sesión</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      
      <div class="ion-page" id="main-content">
        <ion-header *ngIf="showHeader">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button *ngIf="isAuthenticated"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ pageTitle }}</ion-title>
            <ion-buttons slot="end">
              <ion-button (click)="refreshData()" *ngIf="isAuthenticated">
                <ion-icon slot="icon-only" name="refresh"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-router-outlet></ion-router-outlet>
        </ion-content>
      </div>
    </ion-app>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
    ion-menu {
      --width: 280px;
    }
    .ion-page {
      height: 100%;
    }
    ion-content {
      --background: var(--ion-background-color, #f8f9fa);
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  showHeader = true;
  pageTitle = 'FinTech';
  
  private routerSubscription?: Subscription;
  private authSubscription?: Subscription;

  constructor(
    private platform: Platform,
    private router: Router,
    private alertController: AlertController,
    private menuController: MenuController,
    private authService: AuthService,
    private accountService: AccountService
  ) {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.setupStatusBar();
      this.setupBackButtonHandler();
      this.checkAuthenticationStatus();
    });
  }

  private setupStatusBar(): void {
    if (this.platform.is('android')) {
      this.platform.backButton.subscribeWithPriority(10, () => {
        this.handleBackButton();
      });
    }
  }

  private setupBackButtonHandler(): void {
    document.addEventListener('ionBackButton', (event: Event) => {
      const customEvent = event as CustomEvent;
      customEvent.detail.register(10, () => {
        this.handleBackButton();
      });
    });
  }

  private handleBackButton(): void {
    const url = this.router.url;
    if (url === '/login' || url === '/') {
      this.showExitConfirmation();
    } else {
      this.router.navigate(['/accounts']);
    }
  }

  private async showExitConfirmation(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Desea salir de la aplicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salir',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  private checkAuthenticationStatus(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      authenticated => {
        this.isAuthenticated = authenticated;
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  ngOnInit(): void {
    this.setupRouteTracking();
    this.loadInitialData();
  }

  private setupRouteTracking(): void {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const navigationEnd = event as NavigationEnd;
      this.updatePageTitle(navigationEnd.urlAfterRedirects);
      this.updateHeaderVisibility(navigationEnd.urlAfterRedirects);
    });
  }

  private updatePageTitle(url: string): void {
    if (url.includes('/accounts')) {
      this.pageTitle = 'Mis Cuentas';
    } else if (url.includes('/transactions')) {
      this.pageTitle = 'Transacciones';
    } else if (url.includes('/login')) {
      this.pageTitle = 'Iniciar Sesión';
    } else {
      this.pageTitle = 'FinTech';
    }
  }

  private updateHeaderVisibility(url: string): void {
    this.showHeader = !url.includes('/login') && this.isAuthenticated;
  }

  private loadInitialData(): void {
    if (this.isAuthenticated) {
      this.accountService.loadAccounts().subscribe({
        error: (error) => console.error('Error loading accounts:', error)
      });
    }
  }

  navigateTo(path: string): void {
    this.menuController.close();
    this.router.navigate([path]);
  }

  async logout(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Está seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Cerrar Sesión',
          handler: () => {
            this.authService.logout();
            this.menuController.close();
          }
        }
      ]
    });
    await alert.present();
  }

  refreshData(): void {
    this.accountService.loadAccounts().subscribe({
      next: () => {
        this.showRefreshNotification();
      },
      error: (error) => {
        console.error('Error refreshing data:', error);
        this.showErrorNotification();
      }
    });
  }

  private async showRefreshNotification(): Promise<void> {
    const toast = await this.alertController.create({
      message: 'Datos actualizados correctamente',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    await toast.present();
  }

  private async showErrorNotification(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No se pudieron actualizar los datos. Intente nuevamente.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
    this.authSubscription?.unsubscribe();
  }
}

// === ARCHIVO: android/app/src/main/AndroidManifest.xml ===
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.fintech.app"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.USE_BIOMETRIC" />
    <uses-permission android:name="android.permission.USE_FINGERPRINT" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />

    <application
        android:allowBackup="false"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme"
        android:usesCleartextTraffic="false"
        android:networkSecurityConfig="@xml/network_security_config"
        android:hardwareAccelerated="true"
        android:largeHeap="true"
        tools:targetApi="31">

        <activity
            android:name=".MainActivity"
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode"
            android:exported="true"
            android:launchMode="singleTask"
            android:windowSoftInputMode="adjustResize"
            android:screenOrientation="portrait"
            android:theme="@style/AppTheme">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
            <intent-filter android:label="@string/app_name">
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="https" android:host="fintech.app" />
            </intent-filter>
            <intent-filter android:label="@string/app_name">
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="http" android:host="fintech.app" />
            </intent-filter>
        </activity>

        <service
            android:name="com.getcapacitor.CapacitorFirebaseMessagingService"
            android:exported="false">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>

        <receiver
            android:name="com.getcapacitor.BootReceiver"
            android:enabled="true"
            android:exported="false">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
            </intent-filter>
        </receiver>

        <meta-data
            android:name="com.google.firebase.messaging.default_notification_icon"
            android:resource="@mipmap/ic_launcher" />
        <meta-data
            android:name="com.google.firebase.messaging.default_notification_color"
            android:resource="@color/ic_launcher_background" />
        <meta-data
            android:name="com.google.firebase.messaging.default_notification_channel_id"
            android:value="fintech_notifications" />

    </application>

    <queries>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="https" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="http" />
        </intent>
        <intent>
            <action android:name="android.intent.action.SEND" />
            <data android:mimeType="*/*" />
        </intent>
    </queries>

</manifest>
```
