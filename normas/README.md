# Normas de la biblioteca

---

## Estructura de carpetas

Las piezas se organizan por categoría dentro de `piezas/`:

```
piezas/
├── engranajes/
├── soportes/
├── carcasas/
└── otros/
```

Dentro de cada categoría, una carpeta por pieza con el formato:

```
XXX-nombre-descriptivo
```

Ejemplo completo: `piezas/engranajes/007-pinza-neumatica/`

---

## Nombrado de carpetas

- `XXX` = número correlativo de tres dígitos: 001, 002, 003...
- Nombre en minúsculas, con guiones, sin espacios ni tildes ni caracteres especiales

| Correcto | Incorrecto |
|----------|------------|
| `001-helicoidal` | `1-Helicoidal` |
| `007-pinza-neumatica` | `07 pinza neumática` |
| `012-tapa-motor` | `012_tapa_motor` |

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
| `pieza.f3d` | Archivo fuente editable |
| `plano.pdf` | Plano técnico |

---

## Mensajes de commit

Usa mensajes descriptivos:

```
Añadida pieza 007 - Pinza neumática
Actualizada ficha del engranaje helicoidal
Corregido STL de soporte motor NEMA
```

---

## Guía completa para subir una pieza

👉 [como-subir-una-pieza.md](como-subir-una-pieza.md)
