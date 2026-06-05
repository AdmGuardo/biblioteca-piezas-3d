# Normas de la biblioteca

---

## Nombrado de carpetas

Formato obligatorio:

```
XXX-nombre-pieza
```

- `XXX` es el número correlativo con tres dígitos (001, 002, 003...)
- El nombre en minúsculas y con guiones, sin espacios ni caracteres especiales

Ejemplo:

```
007-pinza-neumatica
```

---

## Archivos obligatorios por pieza

| Archivo | Descripción |
|---------|-------------|
| `ficha.json` | Datos de la pieza — alimenta el catálogo web |
| `pieza.stl` | Archivo para impresión 3D |

## Archivos recomendados

| Archivo | Descripción |
|---------|-------------|
| `preview.png` | Imagen de portada en la tarjeta web |
| `pieza.f3d` | Archivo fuente editable |
| `plano.pdf` | Plano técnico |

---

## Mensajes de commit

Usa mensajes descriptivos para que el historial sea útil:

```
Añadida pieza 007 - Pinza neumática
Actualizada documentación del soporte de motor
Corregido STL de engranaje helicoidal
```

---

## Guía completa

Si es la primera vez que subes una pieza, sigue la guía paso a paso:
👉 [como-subir-una-pieza.md](como-subir-una-pieza.md)
