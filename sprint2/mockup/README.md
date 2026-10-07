# CompanIA — Mockup conceptual

Aplicación estática para una presentación universitaria de Ética del Dato e Inteligencia Artificial. Representa un concepto de robot doméstico de asistencia para aproximadamente 2030.

## Abrir

Abre `index.html` con Safari, Chrome, Edge o Firefox. No requiere instalación, compilación, backend ni conexión a Internet. Mantén todos los archivos en la misma carpeta al trasladarlos a otro ordenador.

Opcionalmente, desde esta carpeta:

```sh
python3 -m http.server 8080
```

Después abre http://localhost:8080. Detén el servidor con Ctrl+C.

## Recorrido para la presentación

1. Cambia entre vista frontal, lateral y trasera.
2. Selecciona los puntos numerados o utiliza el desplegable. El panel explica función, justificación de diseño e implicación ética de 17 componentes. Al elegir un componente que no aparece en la vista actual, cambia a una vista donde es visible.
3. Activa **Modo privacidad**: cierra visualmente el obturador y apaga los indicadores de cámara y micrófonos. No se permite iniciar la detección visual de caídas mientras está activo. Los sensores de distancia, fuerza y contacto permanecen disponibles en el concepto.
4. Desactiva privacidad y pulsa **Simular detección de caída**. Tras 1,6 segundos pregunta al usuario. Puedes pulsar **Estoy bien** para terminar sin aviso; tras 8 segundos sin respuesta pasa al protocolo y 2,2 segundos después muestra el contacto simulado. Los tiempos están comprimidos para la presentación y no constituyen criterios de seguridad. **Reiniciar** cancela todos los temporizadores. Activar privacidad también cancela esta demostración: no representa una política final para emergencias reales.
5. Revisa **¿Cómo funciona CompanIA?**: sensores → percepción → lenguaje y planificación → motor de decisión y reglas de seguridad → control → actuadores. ROS comunica los componentes. La seguridad crítica requiere mecanismos independientes del modelo de lenguaje.

## Diseño y materiales

Las tres vistas comparten la misma geometría de cabeza, torso, brazos y base. La carcasa marfil mate contrasta con el acolchado de tono piedra y microtextura sellada: hombros, brazos, antebrazos, laterales y frontal del torso y defensa perimetral. Las juntas quedan cubiertas; se mantienen la limitación mecánica de fuerza, los sensores y el modo seguro conceptual. Las manos conservan tres dedos robóticos con puntas blandas. El apoyo corporal requiere validación física; el acolchado no acredita capacidad de carga.

La pantalla utiliza dos marcas neutras de atención, un anillo de procesamiento, una onda de escucha y un símbolo de alerta. Cambia durante la simulación y muestra un candado en modo privacidad, sin expresiones emocionales. El punto 17 explica las superficies de contacto.

## Archivos

- `index.html`: estructura y contenido principal.
- `styles.css`: estilos, diseño adaptable, impresión y estados visuales.
- `robot.js`: ilustración SVG original, tres vistas, materiales, componentes y coordenadas de puntos interactivos (lienzo 600 × 650). No usa imágenes externas.
- `app.js`: fichas de componentes y lógica de privacidad y simulación.
- `assets/favicon.svg`: icono local.

## Alcance y accesibilidad

Concepto visual, no diseño mecánico validado ni producto sanitario. No acredita cargas, fuerzas, estabilidad ni cumplimiento normativo. No sustituye a profesionales sanitarios, cuidadores o familiares. Altura nominal: 1,38 m; base aproximada: 66 × 72 cm. El brazo y las pinzas no se presentan como un sistema para elevar todo el peso de una persona.

No solicita permisos de cámara o micrófono, no realiza llamadas, no captura datos, no usa analítica y no envía información. Todos los cambios ocurren en memoria y se reinician al recargar. Los controles físicos del robot son ilustrativos; el interruptor de privacidad y los controles de demostración de la página son funcionales.

Controles de teclado: Tab para recorrer botones, puntos SVG y desplegable; Enter o Espacio para activar puntos y botones; flechas para seleccionar opciones del desplegable. Los cambios de ficha y simulación se anuncian con regiones accesibles. Incluye foco visible, reducción de movimiento y adaptación a pantallas pequeñas. Es aconsejable usar pantalla completa para presentar en portátil.
