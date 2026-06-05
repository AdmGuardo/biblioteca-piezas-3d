# Carpeta de piezas

Aquí se almacena cada pieza en su propia carpeta. El nombre debe seguir el formato:

```
XXX-nombre-pieza
```

Ejemplo: `007-pinza-neumatica`

---

## Estructura de cada pieza

```
piezas/
└── 007-pinza-neumatica/
    ├── ficha.json        ← OBLIGATORIO (alimenta el catálogo web)
    ├── preview.png       ← Imagen que aparece en la tarjeta de la web
    ├── pieza.stl         ← Archivo de impresión 3D
    ├── pieza.f3d         ← Archivo fuente editable (Fusion 360 u otro)
    └── plano.pdf         ← Plano técnico (si existe)
```

---

## Archivos obligatorios

- `ficha.json` — sin este archivo la pieza no aparece en el catálogo web
- `pieza.stl` — archivo para impresión

## Archivos recomendados

- `preview.png` — imagen de portada de la tarjeta
- `pieza.f3d` — archivo fuente para poder modificar el diseño
- `plano.pdf` — documentación técnica

---

> Consulta la guía completa en [normas/como-subir-una-pieza.md](../normas/como-subir-una-pieza.md)
