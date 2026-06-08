# Cómo subir una pieza al catálogo

## ¿Qué es un commit?

GitHub funciona como un historial de versiones. Cada vez que guardas cambios se llama **commit**, cuando pulsas el botón verde **"Commit changes"** al final de una página, los cambios se guardan y publican automáticamente.


---

## Nueva estructura de carpetas

Las piezas ahora se organizan por categoría. La ruta de tu pieza será:

```
piezas/
└── CATEGORIA/
    └── XXX-nombre-pieza/
        ├── ficha.json      ← OBLIGATORIO
        ├── preview.png     ← Imagen que aparece en la web
        ├── pieza.stl       ← Archivo de impresión
        └── plano.pdf       ← Plano técnico
```

### Categorías disponibles y rangos de ID

Cada categoría tiene reservado un rango de IDs de tres cifras. El número X00 (100, 200, 300, 900) está reservado y **no se puede usar**.

| Carpeta | Rango de IDs | IDs válidos | Tipo de piezas |
|---------|-------------|-------------|----------------|
| `engranajes` | 1XX | 101 – 199 | Engranajes helicoidales, cónicos, rectos... |
| `soportes` | 2XX | 201 – 299 | Soportes de motores, sensores, guías... |
| `din` | 3XX | 301 – 399 | Piezas normalizadas según norma DIN... |
| `otros` | 9XX | 901 – 999 | Cualquier pieza que no encaje arriba |

> ⚠️ Antes de crear tu ficha, comprueba en `piezas/index.json` qué IDs ya están en uso para elegir el siguiente disponible.

### Formato del nombre de carpeta

```
XXX-nombre-descriptivo
```

Ejemplos: `002-engranaje-conico`, `007-pinza-neumatica`, `012-tapa-rele`

---

## Paso a paso desde la web de GitHub

### Paso 1 — Crear el archivo ficha.json

1. Ve al repositorio en GitHub
2. Pulsa **"Add file"** → **"Create new file"**
3. Escribe la ruta completa en el campo del nombre, por ejemplo:
   ```
   piezas/engranajes/002-conico/ficha.json
   ```
   > Al escribir `/` GitHub crea las carpetas automáticamente

4. Pega este contenido y rellena tus datos:

```json
{
  "id": "002",
  "nombre": "Engranaje Cónico",
  "descripcion": "Descripción breve de qué hace y para qué sirve.",
  "categoria": "engranajes",
  "estado": "desarrollo",
  "autor": "Tu nombre y apellidos",
  "curso": "2024-2025",
  "imagen": "piezas/engranajes/002-conico/preview.png",
  "archivos": {
    "stl": "piezas/engranajes/002-conico/pieza.stl",
    "plano": "piezas/engranajes/002-conico/plano.pdf"
  }
}
```

> ⚠️ Las rutas en `imagen` y `archivos` deben ser la ruta completa desde la raíz del repositorio, no una ruta relativa.

5. Escribe un mensaje descriptivo abajo, por ejemplo: `Añado engranaje cónico`
6. Pulsa **"Commit changes"**

---

### Paso 2 — Subir la imagen de preview

1. Entra en la carpeta `piezas/engranajes/002-conico/` que acabas de crear
2. Pulsa **"Add file"** → **"Upload files"**
3. Sube tu imagen con el nombre `preview.png`
4. Pulsa **"Commit changes"**

---

### Paso 3 — Subir STL y planos

1. Dentro de tu carpeta pulsa **"Add file"** → **"Upload files"**
2. Arrastra todos los archivos (STL, PDF...)
3. Pulsa **"Commit changes"**

---

## ¿Qué pasa después?

GitHub ejecuta automáticamente un proceso que:

1. Recorre todas las carpetas de `piezas/` buscando archivos `ficha.json`
2. Genera el índice `piezas/index.json` actualizado
3. La web se actualiza en menos de un minuto

Puedes comprobar que fue bien en la pestaña **Actions** del repositorio. Círculo verde ✅ = todo correcto.

---

## Resumen rápido

| Qué hacer | Cómo |
|-----------|------|
| Crear `ficha.json` | "Add file" → "Create new file" → escribe la ruta completa |
| Subir imagen y archivos | Entrar en la carpeta → "Add file" → "Upload files" |
| Guardar cambios | Pulsar el botón verde **"Commit changes"** |
| Comprobar resultado | Pestaña **Actions** → círculo verde |

---

*Departamento de Mantenimiento Electromecánico · Curso 2024-2025*
