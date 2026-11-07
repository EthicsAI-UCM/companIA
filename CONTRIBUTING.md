# Guía de Contribución a CompanIA

¡Gracias por interesarte en contribuir a **CompanIA**! Este proyecto universitario busca desarrollar un asistente robótico seguro y ético para personas vulnerables.

Debido a la naturaleza crítica de nuestro sistema (asistencia física en el hogar y manejo de datos de salud), aplicamos una filosofía **safetyista**: la seguridad, la estabilidad y la privacidad son nuestras máximas prioridades antes de incorporar cualquier nueva funcionalidad.

---

## 1. Principios Generales de Contribución

Antes de enviar cualquier aportación, asegúrate de que tu propuesta cumple con nuestros criterios éticos básicos:
1. **Privacidad por defecto:** Los datos sensibles del usuario no deben salir del dispositivo (*Edge AI*) sin cifrado o anonimización previa.
2. **Supervisión Humana (*Human-in-the-loop*):** Ninguna función crítica (salud, decisiones de emergencia) debe ser totalmente autónoma sin mecanismo de control humano.
3. **Parada de Emergencia:** No se aceptará código que interfiera o modifique los sistemas físicos de parada (*kill-switches*) sin una revisión estricta de seguridad.

---

## 2. ¿Cómo puedo contribuir?

### Reportar Errores (*Bugs*) o Vulnerabilidades
Si encuentras un fallo técnico o una vulnerabilidad de privacidad/seguridad:
1. Revisa los *Issues* existentes para comprobar que no se haya reportado antes.
2. Abre un nuevo *Issue* usando la etiqueta **`bug`** o **`security`**.
3. Describe detalladamente los pasos para reproducir el problema y el impacto potencial en la seguridad del usuario.

### Proponer Mejoras o Funcionalidades
1. Abre un *Issue* con la etiqueta **`feature request`** justificando el valor de la funcionalidad propuesta.
2. Incluye una breve **evaluación de riesgos éticos y de seguridad** que la nueva función pueda introducir.

---

## 3. Proceso de Pull Requests (PR)

Para enviar cambios de código o documentación:

1. Haz un *Fork* del repositorio y crea una rama específica para tu trabajo (`git checkout -b feature/nueva-funcionalidad`).
2. Sigue las convenciones de código y comentarios del proyecto.
3. Asegúrate de incluir pruebas unitarias para cualquier módulo técnico crítico.
4. Completa la plantilla de Pull Request explicando qué cambios introduces y cómo se han mitigado los posibles riesgos asociados.
5. Todo PR requerirá la aprobación explícita de al menos uno de los administradores del repositorio antes de poder fusionarse (*merge*).

---

## 4. Contacto y Licencia

Al contribuir a este repositorio, aceptas que tus aportaciones sean licenciadas bajo la **Licencia Apache 2.0** que rige el proyecto.
