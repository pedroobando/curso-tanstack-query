# curso-tanstack-query
Excelente curso como todos los cursos de Fernando Herrera.

## Contenido

### cripto random
Aquí haremos una pequeña aplicación que les dará una pequeña pincelada de los beneficios rápidos con las configuraciones de React Query por defecto contra una aplicación que no lo use.


### issues
Una aplicacion mas elaborada, dando un mejor ejemplo de la herramienta _tanstack-query_, siempre utilizando peticiones _GET_. En este caso nos conectamos al repositorio de GITHUB, especificamente al de facebook/react. - Esta apps vale la pena estudiarla de nuevo.

- Configuración de React Query
- DevTools
- Caché
  - Fresh
  - Stale
  - Inactive
  - Fetching
- Propiedades como:
  - stale time
  - placeholderData
  - initialDate

  - Pre-fetch de queries
  - Establecer data en el caché 
  - Establecer data en caché específico
  - Cargar data bajo demanda
  - QueryClient 

- Paginación tradicional
  - Siguiente página
  - Página anterior
  - Número de página
  - Caché por página y condiciones
- Infinite Scroll
  - Cargar siguientes registros
  - Manejar caché del infinite scroll


### store
Ejemplo rapido de como se podria manejar un ecommerce, "esto no tiene, carrito de compras, ni maneja Store Global, tipo redux", es una sencilla apps, para aplicar lo aprendido en **issues**. Utiliza un backend rapido, que esta en **04-fake-api-backend**
  - React Router 6+
  - Parámetros de ruta
  - Query Client
  - PreFetch de queries
  - Objetos como query keys
  - Custom Hooks
  - Integraciones con NextUI y Tailwind

En sí, el objetivo es empezar un nuevo proyecto que nos sirva para afianzar y reforzar lo aprendido anteriormente con un ejercicio real.

### api-backend
Un backend fake, realizado con _Json-Server_

