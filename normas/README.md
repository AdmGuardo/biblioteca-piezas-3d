# Normas de la biblioteca

---

## Estructura de carpetas

Las piezas se organizan por categoría dentro de `piezas/`:

```
piezas/
├── engranajes/
├── soportes/
├── DIN/
└── otros/
```

Dentro de cada categoría, una carpeta por pieza con el formato:

```
XXX-nombre-descriptivo
```

Ejemplo completo: `piezas/engranajes/107-pinza-neumatica/`

---

## Nombrado de carpetas

- `XXX` = número correlativo de tres dígitos: 301, 402, 203...
- Nombre en minúsculas, con guiones, sin espacios ni tildes ni caracteres especiales.

| Correcto | Incorrecto |
|----------|------------|
| `201-helicoidal` | `1-Helicoidal` |
| `307-pinza-neumatica` | `07 pinza neumática` |
| `112-tapa-motor` | `012_tapa_motor` |

---

## Archivos obligatorios por pieza

| Archivo | Descripción |
|---------|-------------|
| `ficha.json` | Metadatos — sin este archivo la pieza no aparece en la web |
| `pieza.stl` | Archivo para impresión 3D |

## Archivos recomendados

| Archivo | Descripción |
|---------|-------------|
| `preview.png` | Imagen de portada en la tarjeta web |
| `plano.pdf` | Plano técnico |

---

## Mensajes de commit

Es una descripción aditiva no obligatoria, usa mensajes descriptivos:

```
Añadida pieza 007 - Pinza neumática
Actualizada ficha del engranaje helicoidal
Corregido STL de soporte motor 
```

---

## Guía completa para subir una pieza

👉 [como-subir-una-pieza.md](como-subir-una-pieza.md)
