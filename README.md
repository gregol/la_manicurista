# La Manicurista app with React, Next.js and TypeScript

This is an architecture proposal for La Manicurista WEB app.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Run on local machine

# To install all packages, run this comand, on the project forlder.

`yarn`

# To run on local machine run this comand.

`yarn dev`

# Go to your Browser (Like Brave or Chrome) and write.

http://loacalhost:3000

# Arquitectura pnateada.

Utilice Next JS por la potencia que est framework junto a React le da a las plataformar front-end, Next Js tiene todas las ventajas de Server side Rendering
es altamente excalable y muy amigable para los desarrolladores.

React, NextJS y TypeScript.

# La estructura.

src
|
|\_components (Contiene Todos los componentes que se reutilizaran en la aplicacion, EJ Buttons, Layouts etc)
|\_conatiner (contiene Todos los modulos de la aplicacion, Ej: Users, Cart, Products etc)
|\_hooks (Contendra todos los hooks (para react especificamente), reutilizables en la app)
|\_i18n (Toda aplicacion excalable debe estar pensada para soportar mas de un idioma, aca debe ir todos los mensajes en los diferentes lenguajes)
|\_interfaces (Contiene las definiciones de lasinterfaces (Para tipos de datos complejos en TypeScript), ejemplo, User, Productos. Orders, etc)
|\_site-setting (Configuracion de la aplicacion, que no necesiten de muschos cambios en el futuro, ejemplo Nombe, redes sociales, slogan, etc).
|\_pages (El core de Next necesita esta carpeta, y es donde se almacena los controladores frontales de la aplicacion, ejemplo, index (pagina principal), about_us, products, orders, users etc)
|\_store (Pensando en usar redux, aca estaran las deficniciones para el manejo de los stados con Redux )
| |\_User (Esta carpeta contendra, UserActions.ts, UserReducer.ts, UserType.ts etc)
|\_utils (Utilidades que puedan ser de provecho par toda la plataform, EJ. Funciona pra crear Slugs, Validadores de correo electronico etc )

Es posible crear otras carpetas conforme crezca el proyecto, perocon esta estructura inicial la plataforma puede crecer sin problema.
Ademas dependiendo de la necesitada se puede utilizar el paradigma de Micro-Frontend (Similar a los micro-services) pero apr afrontends, lo buenos es
que NextJs y React soportan este pradigma aunado a los mono-repo. (https://dev.to/abhinavnigam2207/an-approach-to-micro-frontend-architecture-mvp-with-nextjs-2l84)
