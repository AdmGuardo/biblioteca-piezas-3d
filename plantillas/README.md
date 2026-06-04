# Uso de la plantilla

Esta biblioteca recopila piezas impresas en 3D desarrolladas por alumnos del Departamento de Electromecánica.

Para mantener una estructura homogénea y facilitar la consulta de los recursos, todas las nuevas piezas deben seguir el mismo formato.

## Cómo añadir una nueva pieza

### 1. Crear una carpeta para la pieza

Dentro de la carpeta `piezas/`, crea una nueva carpeta con el siguiente formato:

```text
XXX-nombre-pieza
```

Ejemplo:

```text
007-pinza-neumatica
```

### 2. Copiar la plantilla

Copia el archivo `ficha-pieza.md` dentro de la carpeta de la nueva pieza y renómbralo como:

```text
ficha.md
```

### 3. Rellenar la ficha

Completa todos los apartados de la ficha:

- Nombre de la pieza
- Autor
- Curso académico
- Profesor responsable
- Descripción
- Material utilizado
- Tiempo de impresión
- Aplicación

### 4. Subir los archivos

Añade toda la documentación disponible:

- Archivo STL
- Archivo Fusion 360 (.f3d)
- Fotografías
- Planos técnicos
- Manuales o documentación adicional

La estructura final debería ser similar a:

```text
007-pinza-neumatica/
├── ficha.md
├── pinza-neumatica.stl
├── pinza-neumatica.f3d
├── plano.pdf
└── foto.jpg
```

### 5. Realizar un commit

Guarda los cambios en GitHub mediante un commit.

Ejemplos de mensajes:

```text
Añadida pieza 007 - Pinza neumática
```

```text
Actualizada documentación del soporte de motor
```

## Objetivo

El objetivo de esta biblioteca es crear un catálogo reutilizable de diseños 3D para proyectos de electromecánica, permitiendo que futuros alumnos y profesores puedan consultar, descargar y mejorar los recursos disponibles.
