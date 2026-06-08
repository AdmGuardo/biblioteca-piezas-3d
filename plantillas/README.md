# Plantillas

Plantillas para documentar una pieza nueva.

---

## Archivos disponibles

| Archivo | Para qué sirve |
|---------|----------------|
| `ficha-pieza.json` | **Plantilla principal** — es la que alimenta el catálogo web. Cópiala como `ficha.json` dentro de tu carpeta de pieza |

---

## Cómo usar la plantilla JSON

1. Copia `ficha-pieza.json` en la ruta de tu pieza:
   ```
   piezas/CATEGORIA/XXX-nombre-pieza/ficha.json
   ```
   Ejemplo: `piezas/engranajes/202-conico/ficha.json`

2. Rellena todos los campos del JSON

3. Respeta los valores válidos:

| Campo | Valores aceptados |
|-------|-------------------|
| `categoria` | `engranajes`, `soportes`, `DIN`, `otros` |
| `estado` | `desarrollo`, `finalizado`, `revision` |

4. En los campos `imagen` y `archivos`, usa la ruta completa desde la raíz del repositorio:
   ```
   "imagen": "piezas/engranajes/302-conico/preview.png"
   ```

5. Haz commit — el catálogo web se actualiza automáticamente

---

> Guía paso a paso: [normas/como-subir-una-pieza.md](../normas/como-subir-una-pieza.md)
