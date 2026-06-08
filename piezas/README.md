# Carpeta de piezas

Las piezas están organizadas por categoría. Dentro de cada categoría, cada pieza tiene su propia carpeta.

---

## Estructura

```
piezas/ 

├── index.json              ← Para en catálogo web, generado automáticamente. 

├── engranajes/             ← Carpeta de la categoria. 

│   ├── 101-nombre-pieza/   ← Carpeta de la pieza. 

│   │   ├── ficha.json      ← OBLIGATORIO crearlo y editarlo. 

│   │   ├── preview.png 

│   │   ├── pieza.stl 

│   │   └── plano.pdf 

├── soportes/ 

│   └── 203-nombre-pieza/ 

│       └── ficha.json 

│   │   ├── preview.png 

│   │   ├── pieza.stl 

│   │   └── plano.pdf 

│   │ 

└── carcasas/ 

│   └── 004-nombre-pieza/ 

│   │   └── ficha.json 

│   │   ├── preview.png 

│   │   ├── pieza.stl 

│   │   └── plano.pdf 
```

---

## Categorías disponibles

| Carpeta | Descripción |
|---------|-------------|
| `engranajes/` | Engranajes de cualquier tipo (helicoidal, cónico, recto...) |
| `soportes/` | Soportes y anclajes para motores, sensores, etc. |
| `carcasas/` | Carcasas, cajas y cubiertas |
| `otros/` | Piezas que no encajan en las categorías anteriores |

---

## Nombrado de carpetas de pieza

Formato: `XXX-nombre-descriptivo`

- `XXX` = número correlativo de tres dígitos (001, 002, 003...)
- nombre en minúsculas y con guiones, sin espacios ni tildes

Ejemplos correctos: `001-helicoidal`, `007-pinza-neumatica`, `012-tapa-motor`

---

## Archivos por pieza

| Archivo | Carácter | Descripción |
|---------|----------|-------------|
| `ficha.json` | **Obligatorio** | Metadatos que alimentan el catálogo web |
| `preview.png` | Recomendado | Imagen de portada en la tarjeta web |
| `pieza.stl` | **Obligatorio** | Archivo para impresión 3D |
| `pieza.f3d` | Recomendado | Archivo fuente editable (Fusion 360) |
| `plano.pdf` | Recomendado | Plano técnico |

> ⚠️ Sin `ficha.json` la pieza no aparece en el catálogo web.

---

> Guía completa para subir una pieza: [normas/como-subir-una-pieza.md](../normas/como-subir-una-pieza.md)
