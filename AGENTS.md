# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Mejora de calidad de código en aplicación móvil**.

| | |
|---|---|
| Tema | Técnicas de programación orientada a objetos |
| Nivel | advanced-l2 |
| Chapter | Móvil |
| Especialidad | Ionic |
| Stack | TypeScript / Angular 17 |
| Patron arquitectonico | clean-architecture |
| Tiempo estimado | 20 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, ionic.config.json y capacitor.config.ts en la raiz`
- `src/main.ts como bootstrap`
- `src/app con las rutas y paginas`
- `src/services con los clientes HTTP`
- `src/models del dominio`

Dependencias:

- @ionic/angular 8.3.0
- @angular/core 17.3.0
- @angular/common 17.3.0
- @angular/forms 17.3.0
- @angular/router 17.3.0
- @angular/platform-browser 17.3.0
- @angular/platform-browser-dynamic 17.3.0
- rxjs 7.8.1
- tslib 2.6.3
- zone.js 0.14.10
- @capacitor/core 6.1.0
- @capacitor/android 6.1.0
- @ionic-native/core 5.40.0
- @ionic-native/http 5.36.0
- @ionic/app-scripts 3.2.4
- typescript 5.4.5

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Análisis del código existente**: Documento de análisis que detalla las áreas de mejora identificadas.
- **Fase 2 — Aplicación de herencia y abstracción**: Código refactorizado que demuestra la aplicación de herencia y abstracción.
- **Fase 3 — Implementación de polimorfismo y encapsulamiento**: Código refactorizado que demuestra la aplicación de polimorfismo y encapsulamiento.
- **Fase 4 — Evaluación de cohesión y acoplamiento**: Documento que detalla la evaluación y mejoras realizadas en cohesión y acoplamiento.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/app/domain/services/auth.service.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- [ ] `src/app/presentation/pages/auth/login.page.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- [ ] `src/app/presentation/pages/auth/login.page.html` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.

## Lo que falta y tenes que completar

### 1. Referencias colgando (15)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `src/app/domain/entities/user.entity.ts` — `Address.push`
      Se invoca `push` sobre `Address`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/domain/entities/account.entity.ts` — `Transaction.push`
      Se invoca `push` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/domain/entities/account.entity.ts` — `Transaction.filter`
      Se invoca `filter` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/domain/entities/account.entity.ts` — `Transaction.forEach`
      Se invoca `forEach` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/data/repositories/transaction.repository.ts` — `Transaction.map`
      Se invoca `map` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/data/repositories/transaction.repository.ts` — `Transaction.filter`
      Se invoca `filter` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/presentation/pages/accounts/accounts.page.ts` — `AccountService.getAccounts`
      Se invoca `getAccounts` sobre `AccountService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/presentation/pages/accounts/accounts.page.ts` — `Account.filter`
      Se invoca `filter` sobre `Account`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/presentation/pages/transactions/transactions.page.ts` — `AccountService.getAccounts`
      Se invoca `getAccounts` sobre `AccountService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/presentation/pages/transactions/transactions.page.ts` — `Account.find`
      Se invoca `find` sobre `Account`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/presentation/pages/transactions/transactions.page.ts` — `AccountService.getTransactionsByAccount`
      Se invoca `getTransactionsByAccount` sobre `AccountService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/presentation/pages/transactions/transactions.page.ts` — `Transaction.reduce`
      Se invoca `reduce` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/presentation/pages/transactions/transactions.page.ts` — `Transaction.map`
      Se invoca `map` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/app.component.ts` — `AccountService.loadAccounts`
      Se invoca `loadAccounts` sobre `AccountService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `package.json` — `@ionic-native/core@5.40.0`
      @ionic-native/core declara la version 5.40.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

### Presentes (29)

- `package.json`
- `ionic.config.json`
- `capacitor.config.ts`
- `src/app/domain/entities/user.entity.ts`
- `src/app/domain/entities/account.entity.ts`
- `src/app/domain/entities/transaction.entity.ts`
- `src/app/domain/value-objects/address.value-object.ts`
- `tsconfig.json`
- `src/main.ts`
- `src/app/domain/interfaces/user-repository.interface.ts`
- `src/app/domain/interfaces/account-repository.interface.ts`
- `src/app/domain/interfaces/transaction-repository.interface.ts`
- `src/app/domain/services/auth.service.ts`
- `src/app/domain/services/account.service.ts`
- `src/app/data/repositories/user.repository.ts`
- `src/app/data/repositories/account.repository.ts`
- `src/app/data/repositories/transaction.repository.ts`
- `src/app/data/services/http-client.service.ts`
- `src/app/presentation/pages/auth/login.page.ts`
- `src/app/presentation/pages/auth/login.page.html`
- `src/app/presentation/pages/accounts/accounts.page.ts`
- `src/app/presentation/pages/accounts/accounts.page.html`
- `src/app/presentation/pages/transactions/transactions.page.ts`
- `src/app/presentation/pages/transactions/transactions.page.html`
- `src/app/presentation/components/account-card.component.ts`
- `src/app/presentation/components/transaction-item.component.ts`
- `src/app/presentation/shared/app.module.ts`
- `src/app/app.component.ts`
- `android/app/src/main/AndroidManifest.xml`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/domain/entities`
- `src/app/domain/interfaces`
- `src/app/domain/services`
- `src/app/data/repositories`
- `src/app/data/services`
- `src/app/presentation/pages/auth`
- `src/app/presentation/pages/accounts`
- `src/app/presentation/pages/transactions`
- `src/app/presentation/components`
- `src/app/presentation/shared`

## Verificacion

```bash
npm install && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **clean-architecture**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Movil, Especialidad Desarrollador, Tecnología Ionic, Advanced
- Brecha que el reto ataca: Examina las principales características de la POO (herencia, cohesión, abstracción, polimorfismo, acoplamiento y encapsulamiento) y las aplicas para mejorar la calidad general del código
- Mision: Candidato con experiencia avanzada en desarrollo mobile, enfocado en patrones de arquitectura y calidad de código

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
