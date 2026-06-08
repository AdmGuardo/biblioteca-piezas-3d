# Biblioteca de Piezas 3D — Mantenimiento Electromecánico

Repositorio colaborativo para recopilar, documentar y conservar piezas diseñadas e impresas en 3D por alumnos y profesores del ciclo de **Mantenimiento Electromecánico**.

🌐 **Web del catálogo:** [admguardo.github.io/biblioteca-piezas-3d](https://admguardo.github.io/biblioteca-piezas-3d/)

---

## ¿Qué hay en este repositorio?

| Carpeta | Contenido |
|---------|-----------|
| `piezas/` | Piezas organizadas por categoría (`engranajes/`, `soportes/`, `din/`, `otros/`) |
| `plantillas/` | Plantillas para crear fichas nuevas |
| `normas/` | Reglas de nombrado y guía paso a paso para subir una pieza |
| `docs/` | Memorias, manuales y recursos educativos generales |
| `imagenes/` | Logos y recursos gráficos del proyecto |

---

## ¿Cómo añado mi pieza?

Consulta la guía completa aquí: [normas/como-subir-una-pieza.md](normas/como-subir-una-pieza.md)

En resumen:
1. Crea 'new file'
2. Elige la categoría correcta: `engranajes`, `soportes`, `din` u `otros`
3. Asigna el ID según el rango de tu categoría (ver tabla abajo) y comprueba que no esté en uso en `piezas/index.json`
4. Crea una carpeta en `piezas/CATEGORIA/XXX-nombre-pieza/` (ej: `piezas/engranajes/101-conico/`)
5. Copia la plantilla `plantillas/ficha-pieza.json` y rellénala como `ficha.json`
6. Sube tu `preview.png`, archivo STL y planos
7. Haz commit — GitHub actualizará el catálogo web automáticamente en menos de un minuto

### Rangos de ID por categoría

| Categoría | Rango | IDs válidos |
|-----------|-------|-------------|
| `engranajes` | 1XX | 101 – 199 |
| `soportes` | 2XX | 201 – 299 |
| `din` | 3XX | 301 – 399 |
| `otros` | 9XX | 901 – 999 |

> El número X00 (100, 200, 300, 900) está reservado y no se puede usar.

---

## ¿Cómo funciona el catálogo web?

Cada vez que se hace un commit, GitHub Actions lee todos los `ficha.json` del repositorio, genera `piezas/index.json` y la web se actualiza sola. No hay que tocar nada más.

Puedes ver el estado de ese proceso en la pestaña **Actions** del repositorio.

---

## Estados de los proyectos.

| Nº  | Pieza                | Estado        |
|-----|----------------------|---------------|
| 101 | Engranaje            | En desarrollo |
| 102 | Engranaje            | En revision   |
| 103 | Engranaje            | Finalizado    |

---

## Departamento

**Mantenimiento Electromecánico** · Curso 2025-2026
