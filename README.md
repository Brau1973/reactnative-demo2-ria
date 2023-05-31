# Battle Pokémon

## Configuracion e instalacion:
Si tienes un proyecto de React Native ya creado con Expo, sigue estos pasos para configurar e instalar el proyecto:

1. Requisitos previos:
   - Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo e instalarlo desde el sitio web oficial de Node.js.
   - Asegúrate de tener un administrador de paquetes JavaScript como npm (incluido con Node.js) o Yarn instalado en tu sistema.

2. Instalación de Expo CLI:
   - Abre tu terminal o línea de comandos.
   - Ejecuta el siguiente comando para instalar el Expo CLI de forma global en tu sistema:
     ```
     npm install -g expo-cli
     ```
     o
     ```
     yarn global add expo-cli
     ```

3. Navegación al directorio del proyecto:
   - En tu terminal o línea de comandos, navega hasta la ubicación donde se encuentra tu proyecto de React Native con Expo.

4. Instalación de dependencias:
   - Ejecuta el siguiente comando para instalar las dependencias del proyecto:
     ```
     npm install
     ```
     - En caso de que el comando no funcionase utilizar:
        ```
       npm install --force
       ```
     o
     ```
     yarn install
     ```
5. Ejecución del proyecto:
   - Ejecuta el siguiente comando para iniciar el proyecto:
     ```
     npx expo start
     ```
     - En caso de tener problemas con la conexión utilizar:
        ```
       npm install --force
       ```

     Esto abrirá una ventana del navegador con la interfaz de Expo DevTools y generará un código QR.
    
6. Ejecución en un dispositivo físico o emulador:
   - Si deseas ejecutar la aplicación en un dispositivo físico, escanea el código QR generado con la aplicación Expo Go (disponible en la App Store o Google Play Store).
   - Si deseas ejecutar la aplicación en un emulador de Android o iOS, sigue las instrucciones proporcionadas en la interfaz de Expo DevTools para iniciar el emulador correspondiente y luego haz clic en "Run on Android device/emulator" o "Run on iOS simulator".


## Mockup:

Planteamos este Mockup con el propósito de una autoayuda para guiarnos en el proceso de creación de este, tratando de realizar una interfaz fácil, amigable y sencilla de utilizar.
Procurando dejar todos los componentes con un fácil acceso sin necesidad de saturar la vista del usuario mostrando mucha información.
Esto se realizó optando en el inicio con un simple logo de bienvenida con el nombre de la app, también como se verá en el Mockup  proporcionando una simple barra de herramientas que permitirá al usuario cambia de plantilla fácilmente, debido a que esta estará ubicada en la parte inferior lo que permitirá al usuario utilizar la app muy fácilmente teniendo todo al alcance de su mano.
En el apartado de la visualización se optó por entregar una lista scrollable que obtendrá los pokemon, y los desplegara mostrado datos básicos para en nuestra opinión, no saturar la vista del usuario con mucha informacion, tambien se opto que los colores de esta lista, se adapten al color del pokémon que salga lo que permite que la aplicación se vea más viva ya que generalmente los pokemones cuentan con colores muy vivos lo que le dará una mejor ambientación, además de permitir que el pokémon no quede opacado por el color de fondo de este.
A la hora de visualizar un pokemon se optó por entregar una ambientación que nos muestre en grande la figura del pokemon  y si se no es posible que el color tambien se adapte al pokémon que seleccionaron para que atraiga primero la atención del usuario ya que será lo que más resalta, lo que provocará en la mayoría de usuarios que  empiece mirando de arriba hacia abajo mostrando la información de una forma más ordenada y agradable a la vista, terminando en la barra de navegación lo que le permitirá volver rápidamente al listado si lo desea.
Por el resto de plantillas se optó por un estilo básico como el menú de inicio, obvio que manteniendo siempre la barra de navegación abajo para que el usuario pueda moverse de forma rápida y sencilla

![](https://raw.githubusercontent.com/Brau1973/reactnative-demo2-ria/main/assets/Inicio-ee560.png) ![](https://github.com/Brau1973/reactnative-demo2-ria/blob/main/assets/Cuenta-cba9b.png?raw=true) ![](https://github.com/Brau1973/reactnative-demo2-ria/blob/main/assets/Favoritos-7930e.png?raw=true)

![](https://github.com/Brau1973/reactnative-demo2-ria/blob/main/assets/Pokemos-1f026.png?raw=true) ![](https://github.com/Brau1973/reactnative-demo2-ria/blob/main/assets/Datospokemons-c54bb.png?raw=true)

## Ver Mockup interactivo:



<img src="assets/link.png" alt="Descripción de la imagen" width="50" height="auto">[Ver Mock up iterativo](https://app.uizard.io/p/ca356865)



## Mapa de navegación:
![](https://lucid.app/publicSegments/view/07983fa3-a427-4c66-9f4e-33569dcc664f/image.png)
## Diseño de sistema:
![](https://github.com/Brau1973/reactnative-demo2-ria/blob/ce4c9efb33b92e10fa73fa7d18557da1b1523464/src/assets/img.png?raw=true)
## Historias de Usuario:

| Título: Ver Listado de Pokémons. |
| ------ |
| Como el usuario quiero poder acceder a la lista de todos los Pokémons para poder realizar otras acciones con ellos posteriormente. |

| Título: Ver Información del Pokémon. |
| ------ |
| Como el usuario quiero poder ver los detalles de un Pokémon que elegido de la lista. |

| Título: Batalla de Pokémons. |
| ------ |
| Como el usuario quiero poder elegir dos Pokémons desde la lista para batallar, y que luego me muestre el ganador. |

## Tecnologías Utilizadas:

- React Native: Un potente framework de desarrollo nativo para plataformas móviles creada por Facebook en 2015, basado en el framework React.
- REST: Siglas para Representational State Transfer, es una arquitectura de software diseñada para realizar comunicación cliente-servidor a través del protocolo HTTP.
- Asincronismo: Es un enfoque de desarrollo que permite que los programas ejecuten tareas de manera secuencial, de manera que algunas de ellas pasan a segundo plano y esperan a su turno para que su ejecución sea reanudada.

## Servicio Rest Utilizado:

Link a documentacion de la API consumida: <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Descripción de la imagen" width="100" height="auto"> [https://pokeapi.co/](https://pokeapi.co/)

 - Este sitio web proporciona una interfaz API RESTful para acceder a datos detallados sobre Pokémon. La API incluye información exhaustiva sobre los Pokémon, como sus características, movimientos, habilidades, tipos, grupos de huevos y más. Utilizando esta API, puedes obtener fácilmente datos precisos relacionados con la franquicia de videojuegos de Pokémon. Explora y accede a toda la información que necesites sobre los Pokémon y su universo a través de esta plataforma sin necesidad de utilizar multiples APIS existentes para conseguir multiples datos de distintos pokemons, proporcionado está una unica API fuente confiable con todos los datos de la otras.<br><br>
 - PokéAPI V1 fue creado por Paul Hallett <br><br>
- Esta es una API solo de consumo : solo el método HTTP GET <br><br>
- No se requiere autenticación para acceder a esta API
<br><br><br>
### Colaboradores

<a href="https://github.com/Brau1973">

<img src="https://avatars.githubusercontent.com/u/55444408?v=4" alt="Nombre del colaborador 1" width="100" style="border-radius: 50%;">
</a>
<a href="https://github.com/Dmirrour">
  <img src="https://avatars.githubusercontent.com/u/81434341?v=4" alt="Nombre del colaborador 1" width="100" style="border-radius: 50%;">
</a>
<a href="https://github.com/Galatheus">
  <img src="https://avatars.githubusercontent.com/u/33265899?v=4" alt="Nombre del colaborador 1" width="100" style="border-radius: 50%;">
</a>

