# Servidor del microservicio

* **list** Lista los documentos y los devuelve en forma de Array 
* **get** Devuelve el documento solicitado con el parametro ID en forma de objeto.  
* **insert** Inserta un documento en la coleccion usando el body de la peticion
* **update** Actualiza el campo o campos solicitados en el body de la peticion 
* **updatePush** Añade un elemento o documento dentro de un array del documento solicitado con el parametro ID
* **remove** Elimina el documento solicitado con el paramentro ID

## list
Puede recibir un body con los campos **query** y **projec**. 

## get
Puede recibir un body con los campos **query** y **projec**. Como es un get, la query no es necesaria y en caso se envie, solo se usara query el parametro ID

## insert
Insertara el documento enviado por el body de la peticion 

## update
Actualizara el campos especificado en el body de la peticion

## updatePush
Añadira un elemento o documento a un array de elementos o documentos. Si el array no existe, creara uno.

## update
Actualizara el campos especificado en el body de la peticion

## remove
Eliminara un documento dentro de la coleccion


> **query:** Es la query que se ejecutara al buscar registros en la coleccion

> **project:** Es la forma en la que queremos que los datos sean devueltos por Mongodb

> Nota: En la carpeta 'apiNode/postman/mongodb/' hay un archivo txt que puede importar en postman y probar el funcionamiento. Primero intente ejecutar el método create para generar datos de prueba en la API