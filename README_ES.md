# `> SEÑAL INTERCEPTADA` — La Arena del Agregador

```text
╔══════════════════════════════════════════════════════════════════════╗
║  ORIGEN DE TRANSMISIÓN: Sector 42, Subred Ω-7                        ║
║  CIFRADO: HMAC-SHA256 (obviamente)                                   ║
║  PRIORIDAD: IMPROBABILIDAD ABSOLUTA                                  ║
║  ESTADO: QUE NO CUNDA EL PÁNICO                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```

En algún lugar de los vastos, extensos y empapados de neón
restos de un cosmos que funciona con sistemas distribuidos y
café frío, un Operador espera.

No sabe exactamente lo que quiere. Esto es estándar para seres
que gestionan plataformas de casino en el borde del ciberespacio
conocido.

Lo que sí sabe es que debe:

- Listar miles de juegos de casino a través de reinos de datos
  fragmentados
- Filtrarlos con la elegancia de una red neuronal procesando
  estática
- Lanzarlos sin colapsar el continuo espaciotemporal local
- Verse presentable para humanoides de base carbono que aún
  usan ratones
- Funcionar admirablemente cuando 50 conexiones simultáneas
  golpean como un DDoS de una dimensión paralela

Y lo necesitan en tres horas.

Esto, por supuesto, es perfectamente razonable de la misma
manera que construir un bypass hiperespacial a través del
planeta de alguien es *perfectamente razonable*.

Tú y tu equipo han sido conectados a la Arena para construir
un **Agregador de Juegos y Portal de Operador** — una tarea
más o menos equivalente a recompilar el tejido de la realidad
mientras el kernel aún está arrancando, el firewall es
consciente y alguien sigue haciendo `rm -rf` a los archivos
de configuración.

**Que no cunda el pánico.** Podrás entrar en pánico después.
Ahora mismo, vacía tu buffer y concéntrate.

---

## `> cat /sys/arena/situation.log`

A través del paisaje de datos calcinado por neón del submundo
digital yacen nodos dispersos de juegos:

- **Proveedores** de Tragamonedas y Mesas, cada uno ejecutando
  protocolos propietarios que no se han actualizado desde las
  Grandes Guerras de Formato del '09,
- **Dominios** de RTP y Volatilidad, donde los porcentajes a
  veces son decimales, a veces cadenas de texto, y
  ocasionalmente se expresan como vibras,
- **Artefactos** tanto Habilitados como Inactivos, con sus bits
  de estado parpadeando como LEDs moribundos en un rack de
  servidores abandonado.

Estos reinos están desconectados, son caóticos y profundamente
resentidos con la estandarización.

El Alto Consejo de Acceso Root ha emitido un decreto,
transmitido en todas las frecuencias:

> ```text
> DE: root@alto-consejo.arena.net
> PARA: *
> ASUNTO: UNIFICAR O SER DEPRECADO
>
> Unifiquen los proveedores. Impongan orden al caos.
> Hagan la interfaz usable por mortales.
> Y por el amor de todo lo concurrente,
> hagan que el Ritual de Lanzamiento funcione
> bien esta vez.
>
> Tienen 2–3 horas.
>
> El té es opcional. El uptime no.
> ```

---

## `> whoami` — La Hermandad de la Terminal

Son un equipo de 3–5 ingenieros, lo que en términos de hacker
cósmico es una fuerza de ataque zero-day altamente eficiente
o un conflicto de merge cortésmente coordinado — dependiendo
enteramente de si definieron sus interfaces antes de escribir
código.

Cada uno debe asumir un rol. Elijan sabiamente. O no. Al
compilador no le importan sus sentimientos.

### `> sudo -u guardian_backend` — El Guardián del Backend

*Custodio de Contratos. Guardián de la Lógica de Validación.
El Que Retorna Códigos de Estado Apropiados.*

```text
 ╔═══╗
 ║ G ║  "Un 500 no es una respuesta. Es una confesión."
 ║ B ║
 ╚═══╝
```

Detrás de cada UI elegante hay un backend que se comporta
impecablemente o colapsa bajo escrutinio como un desbordamiento
de pila un martes recursivo.

El Guardián del Backend debe:

- Definir contratos OpenAPI estrictos (porque el caos no es un
  patrón de arquitectura, sin importar lo que tu última startup
  afirmara).
- Validar todos los payloads entrantes (porque los usuarios son
  adversarios por naturaleza y creativos por accidente).
- Aplicar reglas de negocio (especialmente la doctrina sagrada:
  *"los juegos deshabilitados no se lanzarán en modo real"*).
- Generar tokens de sesión que parezcan convincentemente
  criptográficos.
- Responder consistentemente, con dignidad y códigos de estado
  HTTP apropiados.

Los Jueces automatizados de la Arena son procesos fríos y
deterministas. No les impresiona lo casi-correcto. No aceptan
`200 OK` cuando esperaban `404 Not Found`.

> Simplemente fallarán la prueba. Y no se sentirán mal por ello.

### `> sudo -u ilusionista_frontend` — El Ilusionista del Frontend

*Arquitecto del Orden en un Flujo Infinito de JSON. El Que
Hace que `undefined` Parezca una Funcionalidad.*

```text
 ╔═══╗
 ║ I ║  "Si está cargando, muestra un spinner. Si está roto,
 ║ F ║   muestra un mensaje. Si está en blanco, has fallado."
 ╚═══╝
```

El Ilusionista transforma JSON crudo en algo que los operadores
pueden interpretar sin temor existencial.

Debes crear:

- Una vista de catálogo que liste juegos sin abrumar a los
  mortales o colapsar sus pestañas del navegador.
- Filtros para reducir lo infinito a lo manejable.
- Mecanismos de ordenamiento para imponer jerarquía a la
  entropía.
- Una vista de detalle que revele las propiedades de cada
  artefacto con la precisión de un volcado hexadecimal y la
  belleza de un tema de terminal bien diseñado.
- Un flujo de lanzamiento que no se sienta como un sacrificio
  ritual a los dioses de `window.location`.
- Estados de carga que informen en lugar de abandonar al
  usuario en un vacío de espacios en blanco.
- Manejo de errores que guíe en lugar de engañar.

Los errores deben ser claros. Los estados de carga deben
existir. Nada debe parpadear como un framebuffer embrujado.

**Fuente de datos:** Los equipos que omitan el backend pueden
conectar su UI directamente al **evaluador de referencia**
corriendo en el puerto `3000` (vía Docker Compose). Sirve la
API completa con CORS habilitado. No se requiere trabajo de
backend — toda tu puntuación viene de la calidad de tu
interfaz.

Si el Ilusionista falla, el Operador asumirá que todo el
sistema ha hecho segfault.

### `> sudo -u mago_fullstack` — El Mago Full-Stack

*Traductor Entre Reinos. Caminante de Ambos Stacks. El Cuyo
`git log` Cuenta la Historia Real.*

```text
 ╔═══╗
 ║ M ║  "El frontend dice que la API cambió.
 ║ F ║   El backend dice que no.
 ╚═══╝   Ambos están equivocados. Yo verifiqué."
```

Algunos ingenieros se especializan. Otros evitan que los
especialistas redefinan accidentalmente el contrato a mitad de
la implementación y desplieguen esquemas incompatibles a
producción a las 2 AM.

El Mago:

- Establece acuerdos de API temprano, antes de que la esperanza
  se convierta en deuda técnica.
- Asegura que frontend y backend hablen el mismo dialecto de
  JSON.
- Previene bloqueos donde ambos lados esperan a que el otro
  haga merge primero.
- Ve el sistema como un organismo único en lugar de dos
  microservicios discutiendo sobre tipos de contenido en un
  hilo de Slack.

Sin este rol, la integración se vuelve… *educativa*.

---

## `> ./run_trials --mode=arena` — Las Pruebas de la Arena

La Arena no se conquista con un `git push` dramático.

Se desarrolla en **10 Pruebas**, organizadas en tres niveles —
cada una un nodo en el árbol de habilidades del dominio de
sistemas distribuidos:

- **Pruebas Compartidas (I–IV):** Tanto backend como frontend
  contribuyen independientemente. Cada lado gana sus propios
  puntos. Se recomienda ejecución paralela.
- **Pruebas Solo-Backend (V–VII):** Ingeniería pura de API y
  sistemas. Donde `mutex` se encuentra con la realidad.
- **Pruebas Solo-Frontend (VIII–X):** Ingeniería pura de UI,
  disciplina UX, y el arte de hacer que los atributos
  `data-testid` realmente signifiquen algo.

Cada arquetipo de equipo — backend, frontend o full-stack —
puede alcanzar aproximadamente **95 puntos** maximizando su
camino natural.

---

## `> cat /sys/arena/scoreboard.dat`

```text
┌─────┬────────────────────────────────┬────────┬────────┬───────┐
│  #  │ Prueba                         │ BE pts │ FE pts │ Total │
├─────┼────────────────────────────────┼────────┼────────┼───────┤
│  I  │ El Despertar                   │    5   │    5   │   10  │
│ II  │ El Catálogo del Caos Infinito  │   15   │   15   │   30  │
│ III │ La Inspección del Artefacto    │   10   │   10   │   20  │
│ IV  │ El Ritual de Lanzamiento       │   15   │   15   │   30  │
│  V  │ El Guantelete de Normalización │   15   │    —   │   15  │
│ VI  │ La Bóveda de Txns Infinitas    │   20   │    —   │   20  │
│ VII │ El Sello de Autenticación      │   15   │    —   │   15  │
│VIII │ Gestión de Estado & UX Carga   │    —   │   20   │   20  │
│ IX  │ Accesibilidad & Rendimiento    │    —   │   15   │   15  │
│  X  │ El Panel de la Billetera       │    —   │   15   │   15  │
├─────┼────────────────────────────────┼────────┼────────┼───────┤
│     │ TOTALES POR COLUMNA            │   95   │   95   │  190  │
└─────┴────────────────────────────────┴────────┴────────┴───────┘
```

### Encuentros con Jefes (XP Bonus)

```text
┌──────────────────────────┬────────┬──────────────────────────┐
│ Jefe                     │ Puntos │ Condición de Activación  │
├──────────────────────────┼────────┼──────────────────────────┤
│ El Centinela Lighthouse  │  +10   │ Lighthouse perf ≥ 90     │
│ El Guardián de la Carga  │  +10   │ p95 < 200ms, 50 conc.   │
└──────────────────────────┴────────┴──────────────────────────┘
```

### Puntuación por Arquetipo de Equipo

| Tipo de Equipo | Pruebas                                     | Puntuación Máx. |
|----------------|---------------------------------------------|-----------------|
| Backend        | I(BE), II(BE), III(BE), IV(BE), V, VI, VII  | 95 (+10 jefe)   |
| Frontend       | I(FE), II(FE), III(FE), IV(FE), VIII, IX, X | 95 (+10 jefe)   |
| Full-Stack     | Todas las pruebas, ambos lados              | 190 (teórico)   |

En 2–3 horas, un equipo full-stack realista completa
~105–115 puntos. El objetivo efectivo para todos los tipos de
equipo es **~95 puntos** como puntuación perfecta para tu
arquetipo.

---

## `[NIVEL 0]` FUNDACIÓN COMPARTIDA — *"Primero, Demuestra que Existes"*

## Prueba I — El Despertar `[10 pts: 5 BE + 5 FE]`

> *"En el principio existía `localhost`, y estaba sin forma y
> vacío; y la oscuridad cubría la faz del puerto. Y el
> ingeniero dijo: Hágase un health check: y hubo
> `{"status":"ok"}`."*

Antes de poder unir reinos, tu sistema simplemente debe
*existir*. Esta es una barra más baja de lo que suena. Muchos
han fallado aquí.

### Componente Backend — Prueba I (5 pts)

- `/healthz` debe responder con `{"status":"ok"}` y HTTP
  `200`.
- El servidor API arranca en el puerto configurado sin
  crashear, entrar en pánico o caer en un bucle infinito de
  duda existencial.
- El README documenta cómo ejecutar el proyecto.

**Evaluación:** Petición HTTP a `/healthz`, verificar `200` +
forma JSON. Binario. Despiadado. Hermoso.

### Componente Frontend — Prueba I (5 pts)

- El frontend carga en la URL configurada sin errores de
  JavaScript.
- Un encabezado visible o elemento de marca confirma la
  identidad de la app.
- La consola del navegador tiene cero excepciones no capturadas
  en la carga inicial.

**Evaluación:** Playwright navega a la URL raíz, verifica que
no haya errores de consola, verifica que `document.title` o
`h1` no estén vacíos, capturas de pantalla confirman que algo
se renderizó.

Si tu proyecto no puede arrancar, la Arena silenciosamente hará
`kill -9` a tu puntuación y seguirá sin ti.

---

## `[NIVEL 1]` PRUEBAS COMPARTIDAS (II–IV) — *"Comienza el Guantelete"*

Cada una de estas pruebas tiene componentes **independientes**
de backend y frontend. Los equipos ganan puntos por el lado
o lados que construyan.

## Prueba II — El Catálogo del Caos Infinito `[30 pts: 15 BE + 15 FE]`

> *"La respuesta a '¿cuántos juegos hay?' es, por supuesto,
> 42 páginas de ellos. Más o menos unos cientos, dependiendo
> de tu `pageSize` y tu relación con el concepto de
> paginación."*

Cientos de juegos esperan en el flujo de datos. Los operadores
insisten en el orden. Los juegos insisten en la entropía. Tú
eres el middleware atrapado entre ambos.

### Componente Backend — Prueba II (15 pts)

`GET /api/games` con:

- Búsqueda por nombre (parámetro `search` o `name`)
- Filtro por `provider`, `category`, `enabled`
- Ordenamiento por `name` o `rtp`, ascendente/descendente
- Paginación con `page` y `pageSize`, retornando objeto `meta`
  con `total`, `page`, `pageSize`, `totalPages`
- Por defecto: `enabled=true`, `page=1`, `pageSize=20`

**Evaluación:** Aserciones HTTP — comparar conteos filtrados,
orden de clasificación, matemáticas de paginación contra la
implementación de referencia. Los Jueces tienen una referencia.
Tu implementación la iguala o no. No hay crédito parcial por
interpretación creativa.

### Componente Frontend — Prueba II (15 pts)

| Sub-criterio                                                          | Pts | Cómo se Evalúa                                                                              |
|-----------------------------------------------------------------------|-----|---------------------------------------------------------------------------------------------|
| Grid/lista de juegos renderiza nombre, proveedor, categoría por carta | 3   | DOM: `[data-testid="game-card"]` count > 0, cada uno tiene texto nombre/proveedor/categoría |
| Input de búsqueda filtra juegos por nombre                            | 3   | Escribir en búsqueda, conteo de cartas visibles disminuye, nombres contienen término        |
| Filtro de categoría funciona (dropdown, tabs o chips)                 | 3   | Activar categoría, todas las cartas visibles muestran esa categoría                         |
| Filtro de proveedor funciona                                          | 3   | Activar filtro de proveedor, resultados coinciden                                           |
| Paginación o scroll infinito maneja el dataset completo               | 3   | Render inicial no muestra todos los juegos; navegar/scroll para nuevo contenido             |

Si el filtrado miente, los Jueces lo sabrán. Si la paginación
cuenta mal, los Jueces lo sabrán. Si tu búsqueda retorna
resultados que no coinciden con la consulta — créelo — *los
Jueces lo sabrán*.

Están ejecutando Chromium headless a las 3 AM y tienen
paciencia infinita y cero empatía.

---

## Prueba III — La Inspección del Artefacto `[20 pts: 10 BE + 10 FE]`

> *"Cada juego en el catálogo es un artefacto — una reliquia
> digital con propiedades, metadatos, y ocasionalmente un RTP
> que parece sospechosamente generoso. Haz clic en uno.
> Aprende sus secretos. Intenta no recibir un `404`."*

Cuando un juego es seleccionado, debe revelar su naturaleza.

### Componente Backend — Prueba III (10 pts)

`GET /api/games/:id` retornando el objeto completo del juego
con:

- ID, proveedor, categoría, RTP, estado habilitado,
  características adicionales

Si un artefacto no existe, retornar `404` con:

```json
{ "code": "NOT_FOUND", "message": "...", "details": [] }
```

No un `500`. No silencio. No poesía de error interpretativa.
No un stack trace que revele tu estructura de directorios.
**Estructura. Siempre estructura.**

**Evaluación:** Peticiones HTTP con IDs válidos conocidos e
IDs inválidos, verificar formas de respuesta y códigos de
estado.

### Componente Frontend — Prueba III (10 pts)

| Sub-criterio                                                                                 | Pts | Cómo se Evalúa                                                       |
|----------------------------------------------------------------------------------------------|-----|----------------------------------------------------------------------|
| Clic en carta de juego abre vista de detalle                                                 | 2   | Clic en primera carta, vista de detalle aparece (cambio URL o modal) |
| Vista detalle muestra: nombre, proveedor, categoría, RTP, volatilidad, habilitado, miniatura | 4   | Aserciones DOM para cada campo en la vista de detalle                |
| Navegación atrás regresa al catálogo sin perder estado de filtro/scroll                      | 2   | Aplicar filtro, clic juego, volver, filtro sigue aplicado            |
| Juego inexistente muestra error amigable (no página en blanco o crash)                       | 2   | Navegar a `/games/nonexistent-id`, error visible, sin excepciones JS |

---

## Prueba IV — El Ritual de Lanzamiento `[30 pts: 15 BE + 15 FE]`

> *"Este es el momento. Donde `POST` se encuentra con la
> consecuencia. Donde los tokens de sesión se forjan en los
> fuegos de la validación y las URLs de lanzamiento se
> construyen con la precisión de un handshake criptográfico.
> NO dejes pasar juegos deshabilitados en modo real. El último
> ingeniero que lo hizo fue reasignado a mantener COBOL
> legacy."*

Este es el momento de la consecuencia.

### Componente Backend — Prueba IV (15 pts)

`POST /api/launch`

El sistema debe:

- Validar campos requeridos (`gameId`, `mode`).
- Aplicar la doctrina "no modo real en juegos deshabilitados".
  Esto no es negociable. Esto es la ley.
- Generar un token de sesión.
- Definir un timestamp de expiración.
- Construir una URL de lanzamiento que parezca intencionada y
  no sea solo un `console.log` que olvidaste eliminar.

**Evaluación:** Peticiones HTTP con payloads válidos/inválidos,
verificar aplicación de reglas de negocio y forma de respuesta.

### Componente Frontend — Prueba IV (15 pts)

| Sub-criterio                                                             | Pts | Cómo se Evalúa                                                                  |
|--------------------------------------------------------------------------|-----|---------------------------------------------------------------------------------|
| Botón de lanzamiento visible en detalle o carta del juego                | 2   | DOM: botón que coincide con `/launch/i` o `[data-testid="launch-button"]`       |
| Lanzamiento dispara petición y muestra estado de carga                   | 3   | Clic lanzar, indicador de carga aparece, se resuelve                            |
| Estado exitoso muestra info de sesión (ID sesión, URL o confirmación)    | 3   | Después de lanzar, mensaje de éxito o datos de sesión visibles                  |
| Estado de error para lanzamiento inválido muestra mensaje claro          | 3   | Lanzar juego deshabilitado, mensaje de error mostrado                           |
| Selector de modo (demo/real) presente y funcional                        | 2   | Radio buttons, toggle o dropdown para selección de modo                         |
| Juegos deshabilitados tienen indicación visual y lanzamiento restringido | 2   | Juegos deshabilitados muestran badge/gris; lanzamiento restringido en modo real |

Si se acepta input inválido, la entropía gana. Si se rechaza
input válido, la entropía gana de otra manera. La precisión
es la única arma.

---

## `[NIVEL 2]` PRUEBAS SOLO-BACKEND (V–VII)

> *"Donde `mutex` Se Encuentra con la Realidad"*

Estas pruebas son exclusivamente para equipos construyendo
servicios backend. Los equipos de frontend las omiten por
completo y deben dedicar sus ciclos al Nivel 3.

## Prueba V — El Guantelete de Normalización `[15 pts]`

> *"Los proveedores de juegos de la galaxia acordaron
> exactamente una cosa: que nunca estarían de acuerdo en nada.
> Ni nombres de campos. Ni formatos de fecha. Ni si RTP es un
> float, una cadena, un porcentaje o un decimal que necesita
> multiplicarse por 100. Bienvenido al Guantelete. Tu parser
> llorará."*

Recibirás datos de juegos de **tres proveedores**, cada uno
con su propio esquema JSON, convenciones de nombres, formatos
de fecha y desdén general por la interoperabilidad:

### Proveedor Alpha `// Moderno. Limpio. Casi sospechosamente razonable.`

```json
{
  "gameId": "game-00001-netent",
  "title": "Golden Nebula",
  "studio": "NetEnt",
  "type": "slots",
  "returnToPlayer": 95.42,
  "variance": "medium",
  "active": true,
  "launchDate": "2022-03-15T00:00:00Z",
  "thumbnail": "https://cdn.alpha.example.com/games/game-00001-netent.png",
  "features": ["megaways", "free-spins"]
}
```

### Proveedor Beta `// Legacy. Plano. Agresivamente abreviado.`

```json
{
  "game_code": "NETENT_00002",
  "game_name": "Golden Nebula",
  "provider_name": "NetEnt",
  "game_category": "SL",
  "rtp_value": "95.42",
  "risk_level": "MED",
  "is_enabled": 1,
  "release_date": "15/03/2022",
  "image_url": "https://assets.beta.example.com/NETENT_00002.jpg",
  "tag_list": "megaways,free-spins"
}
```

Códigos de categoría: `SL` (tragamonedas), `LV` (en vivo),
`TB` (mesa), `IN` (instantáneo), `JP` (jackpot).
Códigos de volatilidad: `LOW`, `MED`, `HIGH`.
Habilitado: `1` o `0`. RTP: cadena. Fecha: `DD/MM/YYYY`.
Tags: separados por comas.

### Proveedor Gamma `// Anidado. Verboso. Escrito por un comité.`

```json
{
  "data": {
    "id": "gm_00001",
    "attributes": {
      "display_name": "Golden Nebula",
      "provider": {
        "code": "netent",
        "label": "NetEnt"
      },
      "classification": {
        "category": "slots",
        "volatility": "medium"
      },
      "metrics": { "rtp": 0.9542 },
      "status": {
        "enabled": true,
        "released": "2022-03-15"
      },
      "media": {
        "thumbnail_url": "https://media.gamma.example.com/gm_00001/thumb.webp"
      },
      "tags": [
        { "slug": "megaways" },
        { "slug": "free-spins" }
      ]
    }
  }
}
```

RTP como decimal (`0.9542` = `95.42%`). Tags como array de
objetos. Proveedor como objeto anidado. Porque por qué usar
un nivel de anidamiento cuando siete sirven igual.

Tu sistema debe ingerir los tres feeds y exponerlos a través
de una **API unificada única** con el esquema canónico de las
Pruebas II–IV.

Si no puedes normalizar, no puedes agregar.
Y si no puedes agregar, simplemente estás alojando JSON
estático y llamándolo plataforma.

**Evaluación:** Comparar conteos de juegos, verificar juegos
específicos de cada proveedor para corrección de campos.

---

## Prueba VI — La Bóveda de Transacciones Infinitas `[20 pts]`

> *"Los créditos fluyen como paquetes a través de un router —
> rápidos, concurrentes, y catastróficamente incorrectos si
> olvidas hacer lock. Cincuenta workers están a punto de
> golpear tu endpoint de billetera simultáneamente. Tu `mutex`
> es lo único que se interpone entre el orden y un saldo
> negativo que viola las leyes de la física financiera."*

El dinero se mueve. A veces simultáneamente. A veces
maliciosamente. Siempre concurrentemente.

Cada operador comienza con un saldo de **10,000 créditos**.

### Endpoints

- `GET /api/wallet/balance` — saldo actual
- `POST /api/bet` — deducir del saldo
- `POST /api/settle` — agregar ganancias (debe referenciar
  una apuesta)
- `POST /api/rollback` — revertir una apuesta (debe
  referenciar una apuesta sin liquidar)

### Petición de Apuesta

```json
{
  "transactionId": "bet-abc-001",
  "amount": 10.00
}
```

### Petición de Liquidación

```json
{
  "transactionId": "settle-abc-001",
  "betTransactionId": "bet-abc-001",
  "amount": 15.00
}
```

### Petición de Reversión

```json
{
  "transactionId": "rollback-abc-001",
  "betTransactionId": "bet-abc-001"
}
```

### Las Leyes de la Bóveda

```text
1. SIN SALDOS NEGATIVOS     — Una apuesta debe fallar si
                              fondos insuficientes.
                              Los sobregiros no son una
                              funcionalidad.
2. LIQUIDAR REQUIERE APUESTA — No puedes liquidar lo que no
                              se ha apostado. Esto es
                              contabilidad, no magia.
3. REVERTIR REQUIERE APUESTA — Solo sin liquidar y sin
                              revertir. No puedes deshacer
                              lo que ya está resuelto.
4. LIQUIDADO = INMUTABLE     — Las apuestas liquidadas no
                              pueden revertirse. El tiempo
                              fluye hacia adelante. También
                              tu libro mayor.
5. IDEMPOTENCIA ES SAGRADA   — Mismo transactionId + mismo
                              payload = misma respuesta. Sin
                              doble procesamiento. Diferente
                              monto en mismo ID = 409
                              Conflict.
```

### La Prueba Real

El demonio de stress-test generará **50 goroutines
concurrentes**, cada una disparando secuencias rápidas de
apuesta/liquidación a tu endpoint de billetera. Si tu
implementación permite sobregiros, doble-deducciones o produce
un saldo final inconsistente — los Jueces revelarán la
discrepancia con la fría precisión de un auditor forense.

Esto no es un ejercicio teórico. Aquí es donde las primitivas
de concurrencia ganan su reputación.

**Evaluación:** La herramienta `stress-test/main.go` — fases
cubriendo salud, saldo, tormenta concurrente, idempotencia,
reversión e integridad del saldo final.

---

## Prueba VII — El Sello de Autenticación `[15 pts]`

> *"Cualquier URL de lanzamiento suficientemente avanzada es
> indistinguible de un token criptográfico firmado. Cualquier
> URL insuficientemente avanzada es indistinguible de una
> vulnerabilidad de seguridad."*

Las URLs de lanzamiento deben estar firmadas. Las URLs sin
firmar son cheques sin firmar. La Arena no acepta cheques sin
firmar.

Cuando `POST /api/launch` tiene éxito, la respuesta debe
incluir:

```json
{
  "sessionId": "sess-abc123",
  "launchUrl": "https://play.example.com/game-00001?session=sess-abc123&expires=1710600000&sig=<hmac>",
  "expiresAt": "2026-03-16T15:00:00Z"
}
```

La firma es **HMAC-SHA256** sobre `gameId|sessionId|expiresAt`
usando el secreto proporcionado vía la variable de entorno
`LAUNCH_SECRET`.

### Matriz de Verificación

`GET /api/verify-launch?token=<sessionId>&sig=<signature>`

```text
┌──────────────────────┬────────┬─────────────────────┐
│ Condición            │ Estado │ Código              │
├──────────────────────┼────────┼─────────────────────┤
│ Válido + no expirado │  200   │ —                   │
│ Firma manipulada     │  403   │ INVALID_SIGNATURE   │
│ Sesión expirada      │  410   │ SESSION_EXPIRED     │
│ Sesión desconocida   │  404   │ SESSION_NOT_FOUND   │
└──────────────────────┴────────┴─────────────────────┘
```

Si tus URLs de lanzamiento pueden ser falsificadas, no tienes
seguridad. Si no pueden ser verificadas, no tienes confianza.
Si expiran incorrectamente, no tienes gestión del tiempo.

**Evaluación:** Lanzar un juego, extraer firma, verificarla.
Manipular firma → `403`. Sesión expirada → `410`.
Sesión desconocida → `404`.

---

## `[NIVEL 3]` PRUEBAS SOLO-FRONTEND (VIII–X)

> *"La UI Es una Mentira (Hazla Convincente)"*

Estas pruebas son exclusivamente para equipos construyendo
interfaces frontend. Los equipos de backend las omiten por
completo.

## Prueba VIII — Gestión de Estado & UX de Carga `[20 pts]`

> *"La diferencia entre un producto y un prototipo es lo que
> sucede durante el estado de carga. Una página blanca vacía no
> es un estado de carga. Es una admisión de derrota renderizada
> a 60 frames por segundo."*

Esta es la prueba solo-frontend de mayor valor. Evalúa la
disciplina de ingeniería que separa un producto enviado de un
demo de hackathon que solo funciona en la máquina del
presentador.

| Sub-criterio                                                                | Pts | Cómo se Evalúa                                                                                       |
|-----------------------------------------------------------------------------|-----|------------------------------------------------------------------------------------------------------|
| Indicadores de carga durante fetch de datos (no página blanca vacía)        | 4   | Throttle red, navegar al catálogo, `[data-testid="loading"]` o `[aria-busy="true"]` aparece en 500ms |
| Boundary de error: API 500 o fallo de red muestra botón retry/mensaje       | 4   | Interceptar API, abortar peticiones, UI de error aparece, clic retry, datos cargan                   |
| Estado vacío: filtros con cero resultados muestran mensaje "sin resultados" | 4   | Buscar cadena sin sentido, mensaje "no se encontraron juegos" (no grid vacío)                        |
| Estado dirigido por URL: filtros/búsqueda/página en URL, refresh preserva   | 4   | Aplicar filtros, verificar parámetros URL, recargar, filtros siguen aplicados                        |
| Búsqueda con debounce: escribir no dispara petición por tecla               | 4   | Escribir 6 caracteres rápido, verificar 2 o menos peticiones de red (inicial + debounced)            |

Si tu catálogo muestra una página blanca vacía mientras carga,
el Operador asumirá que te desconectaste de la Matrix.

Si tu estado de error es una pantalla blanca de la muerte, el
Operador asumirá que la Matrix se desconectó de ti.

---

## Prueba IX — Accesibilidad & Rendimiento `[15 pts]`

> *"Un portal que excluye usuarios es un portal que excluye
> ingresos. Un portal que carga como si estuviera computando
> la respuesta a la Vida, el Universo y Todo Lo Demás en cada
> petición es un portal que los usuarios cerrarán antes de que
> termine de renderizar."*

Una UI funcional que excluye usuarios o carga como si corriera
en un Commodore 64 emulando un clúster de Kubernetes aún no
está completa.

| Sub-criterio                                                                | Pts | Cómo se Evalúa                                                                                       |
|-----------------------------------------------------------------------------|-----|------------------------------------------------------------------------------------------------------|
| Puntuación de accesibilidad Lighthouse de 80 o mayor                        | 4   | Lighthouse CI en Chrome headless                                                                     |
| Navegación por teclado: todos los elementos interactivos accesibles via Tab | 3   | Tab a través de búsqueda, filtros, cartas, botones; foco se mueve lógicamente                        |
| ARIA y HTML semántico: labels, alt text, landmarks                          | 3   | Auditoría axe-core: cero violaciones críticas/serias; `<img>` tiene `alt`, `<input>` tiene `<label>` |
| Puntuación de rendimiento Lighthouse de 70 o mayor                          | 3   | Auditoría de rendimiento Lighthouse CI                                                               |
| Layout responsivo: usable a 375px móvil y 1440px escritorio                 | 2   | Viewport 375px, sin scroll horizontal, cartas de juegos visibles                                     |

---

## Prueba X — El Panel de la Billetera `[15 pts]`

> *"Dale al Operador una ventana a la Bóveda. Déjalo ver sus
> créditos fluir. Déjalo apostar y observar el saldo
> actualizarse en tiempo real. Aunque no hayas construido la
> Bóveda tú mismo, puedes construir el cristal."*

Una interfaz visual para el sistema de billetera. Aunque no
hayas construido el backend, puedes construir la UI contra la
API de billetera del evaluador de referencia.

| Sub-criterio                                                                                | Pts | Cómo se Evalúa                                                                                 |
|---------------------------------------------------------------------------------------------|-----|------------------------------------------------------------------------------------------------|
| Saldo mostrado prominentemente, se actualiza después de operaciones                         | 3   | Elemento con `[data-testid="wallet-balance"]` muestra número; después de apuesta, valor cambia |
| Interacción de apuesta: input de monto + botón apostar, saldo decrece con feedback          | 4   | Ingresar monto, clic apostar, saldo se actualiza, feedback de éxito mostrado                   |
| Historial de transacciones: lista mostrando tipo (apuesta/liquidación/reversión), monto, ID | 4   | Después de apostar, lista contiene entrada con tipo "bet" y el monto                           |
| Error de fondos insuficientes: mensaje claro, no fallo silencioso                           | 2   | Apostar más que el saldo, mensaje de error visible                                             |
| Responsivo: billetera usable a 375px ancho móvil                                            | 2   | Viewport 375px, saldo, input apuesta, historial visible, sin scroll horizontal                 |

---

## `> man arena-codex` — El Códice

*Porque la Arena lee tus respuestas más cuidadosamente de lo
que tú lees su documentación.*

La Arena aplica:

- Validación estricta de contratos OpenAPI.
- Estructura de error consistente:

  ```json
  { "code": "ERROR", "message": "...", "details": [] }
  ```

- Códigos de estado HTTP apropiados. Cada. Una. De. Las. Veces.
- Esquemas predecibles. Sin sorpresas. Sin creatividad en tus
  payloads de error.

Los Jueces son automatizados. No admiran excusas ingeniosas.
No aceptan descripciones de pull request como evidencia.
Admiran la conformidad con la especificación. Veneran el
determinismo.

## `> grep -r "data-testid" ./evaluator-frontend/`

El evaluador de frontend usa atributos `data-testid` como
selectores primarios, con fallbacks semánticos. IDs de prueba
recomendados:

```text
┌──────────────────────┬─────────────────────┐
│ Elemento             │ data-testid         │
├──────────────────────┼─────────────────────┤
│ Carta de juego       │ game-card           │
│ Input de búsqueda    │ search-input        │
│ Filtro de categoría  │ category-filter     │
│ Filtro de proveedor  │ provider-filter     │
│ Vista detalle juego  │ game-detail         │
│ Botón de lanzamiento │ launch-button       │
│ Selector de modo     │ mode-selector       │
│ Indicador de carga   │ loading             │
│ Mensaje de error     │ error-message       │
│ Estado vacío         │ empty-state         │
│ Saldo billetera      │ wallet-balance      │
│ Input monto apuesta  │ bet-amount          │
│ Botón de apuesta     │ bet-button          │
│ Lista transacciones  │ transaction-list    │
│ Item transacción     │ transaction-item    │
└──────────────────────┴─────────────────────┘
```

Estos son **recomendados**, no requeridos. El evaluador recurrirá
a selectores semánticos (`input[type="search"]`,
`button:has-text("Launch")`, etc.) cuando los IDs de prueba
estén ausentes.

---

## `> uptime` — El Reloj

```text
 ┌────────────────────────────────────────────┐
 │         T - 180 MINUTOS Y CONTANDO         │
 │                                            │
 │   ██████████████████████░░░░░░░░░░  60%    │
 │                                            │
 │   ESTADO: COMPILANDO                       │
 │   CAFÉ: CRÍTICO                            │
 │   CONFLICTOS DE MERGE: INEVITABLES         │
 └────────────────────────────────────────────┘
```

Tienen 2–3 horas.

En ese tiempo, deben:

- Acordar contratos temprano. **Antes de escribir código.** Esto
  no es opcional. Esto es supervivencia.
- Dividir responsabilidades. Trabajo paralelo o sufrimiento
  en serie. Elijan sabiamente.
- Evitar bloquearse mutuamente. Si están esperando el endpoint
  de alguien más, mockéenlo y continúen.
- Entregar incrementalmente. Un endpoint `/healthz` funcional
  vale más que un sistema de billetera a medio terminar.
- Probar continuamente. El evaluador es su amigo. Ejecútenlo
  temprano. Ejecútenlo frecuentemente.

Sobreingeniería es un lujo reservado para equipos con máquinas
del tiempo. Pensar de menos es una ruta rápida hacia
`panic: runtime error`.

---

## `> cat /opt/arena/tooling/README.md`

### Generación de Datos (`db-seed/`)

Genera datos de juegos en 3 formatos de proveedor:

```bash
db-seed -n 2000 -seed 42 -format all
```

Esto produce `provider-alpha.json`, `provider-beta.json` y
`provider-gamma.json`. Tu sistema debe cargar y normalizar
los tres.

Usa `-format unified` para un solo archivo limpio (solo para
depuración — el mundo real nunca es tan amable).

### Implementación de Referencia (`evaluator/`)

Un servidor basado en Zig que implementa el comportamiento
correcto para todas las pruebas de backend. Sí, Zig. La Arena
no sigue tendencias.

```bash
cd evaluator
LAUNCH_SECRET=my-secret ./evaluator serve --port 3000 \
  --data provider-alpha.json,provider-beta.json,provider-gamma.json
```

Usa esto para comparar tus respuestas contra la salida
esperada.

**Equipos de frontend:** Conecten su UI a
`http://localhost:3000` — el evaluador sirve la API completa
con CORS habilitado. Esta es su fuente de datos. No se requiere
backend.

### Evaluador de Frontend (`evaluator-frontend/`)

Una suite de pruebas basada en Playwright que auto-puntúa las
pruebas de frontend:

```bash
cd evaluator-frontend
npm install
FRONTEND_URL=http://localhost:5173 npx playwright test
```

Cada prueba genera JSON estructurado `[SCORE]`. El reporter
personalizado lo agrega en `results.json`. Ejecútenlo. Lean
los fallos. Son sorprendentemente honestos.

### Stress Test (`stress-test/`)

Valida concurrencia e idempotencia de billetera:

```bash
cd stress-test
go run main.go -url http://localhost:8080 \
  -concurrency 50 -rounds 100
```

50 goroutines concurrentes. Transacciones a fuego rápido. Tu
`mutex` aguanta o no. No hay crédito parcial.

### Docker Compose

Ejecuta todo junto:

```bash
docker compose up
```

Esto inicia el evaluador en el puerto `3000`. Apunta tu
implementación a los mismos archivos de datos de juegos.

Ejecuta el evaluador de frontend:

```bash
docker compose --profile test-frontend up evaluator-frontend
```

---

## `> tail -f /var/log/arena/final_transmission.log`

```text
[2026-03-17T00:00:00Z] [INFO] Transmisión final del Sector 42:
```

Que no cunda el pánico.

Define la API primero. Luego implementa. Luego prueba. En ese
orden. No al revés. Nunca al revés.

Mantén las estructuras de error consistentes. Los Jueces
parsean tu JSON con la misma fría precisión que deberías usar
al escribirlo.

Haz que una cosa funcione completamente antes de agregar otra.
Un health check perfecto vale más que una billetera rota.

Lee los fallos de prueba cuidadosamente — son la revisión de
código más honesta que jamás recibirás.

Y pase lo que pase — sin importar qué conflictos de merge
surjan, qué condiciones de carrera aparezcan, qué crisis
existencial tu `Promise.all` provoque a la marca de dos
horas —

**Siempre sabe dónde está tu token de sesión.**

```text
[2026-03-17T00:00:01Z] [INFO] Fin de transmisión.
[2026-03-17T00:00:01Z] [INFO] La Arena espera.
[2026-03-17T00:00:02Z] [WARN] No olvides hacer commit.
```

---

*"Hasta luego, y gracias por todos los `200 OK`s."*
