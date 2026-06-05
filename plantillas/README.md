# Plantillas

Esta carpeta contiene las plantillas para documentar una pieza nueva.

---

## Archivos disponibles

| Archivo | Para qué sirve |
|---------|----------------|
| `ficha-pieza.json` | **Plantilla principal** — es la que alimenta el catálogo web. Cópiala como `ficha.json` dentro de tu carpeta en `piezas/` |
| `ficha-pieza.md` | Plantilla en texto plano — útil como referencia o para documentación adicional, pero no es la que lee el sistema |

---

## Cómo usar la plantilla JSON

1. Copia `ficha-pieza.json` en tu carpeta de pieza: `piezas/XXX-nombre-pieza/ficha.json`
2. Rellena todos los campos
3. Respeta los valores válidos:

| Campo | Valores aceptados |
|-------|-------------------|
| `categoria` | `engranajes`, `soportes`, `carcasas`, `otros` |
| `estado` | `desarrollo`, `finalizado`, `revision` |

4. Haz commit — el catálogo web se actualiza solo

---

> Guía paso a paso: [normas/como-subir-una-pieza.md](../normas/como-subir-una-pieza.md)
