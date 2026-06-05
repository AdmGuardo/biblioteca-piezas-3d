# Cómo subir una pieza al catálogo

## ¿Qué es un commit y un push?

GitHub funciona como un historial de versiones de tu proyecto. Cada vez que guardas cambios se llama **commit**, y subir esos cambios a GitHub se llama **push**.

Desde la web de GitHub **no necesitas saber nada de esto** — cuando terminas de crear o editar un archivo y pulsas el botón verde **"Commit changes"**, estás haciendo el commit y el push a la vez en un solo clic.

**Main** es la rama principal del repositorio, es decir, la versión oficial que se publica en la web.

---

## Estructura de tu carpeta

Crea una carpeta dentro de `piezas/` con el nombre de tu pieza en minúsculas y sin espacios (usa guiones):

```
piezas/
└── nombre-de-tu-pieza/
    ├── ficha.json            ← OBLIGATORIO
    ├── imagenes/
    │   └── preview.png       ← Imagen que aparece en la web
    ├── archivos/
    │   ├── pieza.stl
    │   └── pieza.f3d
    └── docs/
        └── plano.pdf
```

---

## Cómo crear los archivos desde la web de GitHub

### Paso 1 — Crear el archivo ficha.json

1. Ve al repositorio en GitHub
2. Pulsa **"Add file"** → **"Create new file"**
3. En el campo del nombre escribe la ruta completa, por ejemplo:
   `piezas/mi-engranaje/ficha.json`
   > Al escribir `/` GitHub crea las carpetas automáticamente
4. En el editor pega este contenido y rellena tus datos:

```json
{
  "id": "004",
  "nombre": "Nombre de tu pieza",
  "descripcion": "Descripción breve de qué hace y para qué sirve.",
  "categoria": "engranajes",
  "estado": "desarrollo",
  "autor": "Tu nombre y apellidos",
  "curso": "2024-2025",
  "material": "PLA",
  "peso": "0.50 kg",
  "imagen": "imagenes/preview.png",
  "archivos": {
    "stl": "archivos/pieza.stl",
    "plano": "docs/plano.pdf"
  }
}
```

5. Abajo escribe un mensaje descriptivo, por ejemplo: `Añado engranaje cónico`
6. Pulsa el botón verde **"Commit changes"**

### Valores válidos

| Campo | Opciones |
|-------|----------|
| `categoria` | `engranajes`, `soportes`, `carcasas`, `otros` |
| `estado` | `desarrollo`, `finalizado`, `revision` |

---

### Paso 2 — Subir la imagen de preview

1. Entra en la carpeta `piezas/nombre-de-tu-pieza/` que acabas de crear
2. Pulsa **"Add file"** → **"Upload files"**
3. Arrastra tu imagen y renómbrala `preview.png`
4. Pulsa **"Commit changes"**

---

### Paso 3 — Subir los archivos STL, F3D y planos

1. Dentro de tu carpeta pulsa **"Add file"** → **"Upload files"**
2. Arrastra todos tus archivos (STL, F3D, PDF...)
3. Pulsa **"Commit changes"**

---

## ¿Qué pasa después?

Al hacer el último commit, GitHub ejecuta automáticamente un proceso que:

1. Lee todos los `ficha.json` del repositorio
2. Genera un índice actualizado
3. La web se actualiza en menos de un minuto

Puedes ver si el proceso fue bien en la pestaña **Actions** del repositorio. Si hay un círculo verde ✅, todo correcto.

---

## Resumen rápido

| Qué hacer | Cómo |
|-----------|------|
| Crear `ficha.json` | "Add file" → "Create new file" → escribe la ruta |
| Subir imagen y archivos | "Add file" → "Upload files" |
| Guardar cambios | Pulsar el botón verde **"Commit changes"** |

---

*Departamento de Mantenimiento Electromecánico · Curso 2024-2025*
