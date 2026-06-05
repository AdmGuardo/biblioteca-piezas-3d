# Biblioteca de Piezas 3D — Mantenimiento Electromecánico

Repositorio colaborativo para recopilar, documentar y conservar piezas diseñadas e impresas en 3D por alumnos y profesores del ciclo de **Mantenimiento Electromecánico**.

🌐 **Web del catálogo:** [admguardo.github.io/biblioteca-piezas-3d](https://admguardo.github.io/biblioteca-piezas-3d/)

---

## ¿Qué hay en este repositorio?

| Carpeta | Contenido |
|---------|-----------|
| `piezas/` | Una carpeta por pieza con su `ficha.json`, archivos STL/F3D, imágenes y planos |
| `plantillas/` | Plantillas para crear fichas nuevas |
| `normas/` | Reglas de nombrado y guía paso a paso para subir una pieza |
| `docs/` | Memorias, manuales y recursos educativos generales |
| `imagenes/` | Logos y recursos gráficos del proyecto |

---

## ¿Cómo añado mi pieza?

Consulta la guía completa aquí: [normas/como-subir-una-pieza.md](normas/como-subir-una-pieza.md)

En resumen:

1. Crea una carpeta en `piezas/` con el formato `XXX-nombre-pieza` (ej: `004-pinza-neumatica`)
2. Copia la plantilla `plantillas/ficha-pieza.json` y rellénala como `ficha.json`
3. Sube tu imagen `preview.png`, archivos STL/F3D y planos
4. Haz commit — GitHub actualizará el catálogo web automáticamente en menos de un minuto

---

## ¿Cómo funciona el catálogo web?

Cada vez que se hace un commit, GitHub Actions lee todos los `ficha.json` del repositorio, genera `piezas/index.json` y la web se actualiza sola. No hay que tocar nada más.

Puedes ver el estado de ese proceso en la pestaña **Actions** del repositorio.

---

## Estado del proyecto

| Nº  | Pieza                | Estado        |
|-----|----------------------|---------------|
| 001 | Engranaje Helicoidal | En desarrollo |

---

## Departamento

**Mantenimiento Electromecánico** · Curso 2024-2025
