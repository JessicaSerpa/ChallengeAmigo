
Proyecto Amigo Secreto
Este proyecto es una aplicación sencilla para gestionar un juego de "Amigo Secreto". Permite a los usuarios ingresar los nombres de sus amigos y realizar un sorteo aleatorio para asignar un amigo secreto a cada participante. El código está basado en JavaScript, HTML y CSS para ofrecer una experiencia interactiva y fácil de usar.

Funcionalidades
1. Agregar amigos a la lista: El usuario puede agregar los nombres de sus amigos mediante un campo de texto. Al hacer clic en el botón "Añadir", el nombre se guarda en un arreglo listaNombres y se muestra en una lista en la interfaz. Si el campo de texto está vacío, se mostrará una alerta solicitando que ingrese un nombre.

2. Mostrar la lista de amigos: Una vez que los nombres se agregan a la lista, la función mostrarLista() actualiza la interfaz y muestra los nombres en una lista HTML (<ul>). Cada nombre agregado se coloca en un nuevo elemento de lista (<li>).

3. Limpiar el campo de texto: Después de agregar un nombre, el campo de texto se limpia automáticamente gracias a la función limpiarCaja().

4. Limpiar la lista de amigos: La función limpiarLista() elimina todos los elementos de la lista de amigos de la interfaz. Esta función es utilizada antes de realizar el sorteo para asegurarse de que solo se muestre el nombre del amigo secreto sorteado.

5. Sortear un amigo secreto: Al hacer clic en el botón "Sortear amigo", la función sortearAmigo() selecciona aleatoriamente un nombre de la lista de amigos. Se utiliza Math.random() para generar un índice aleatorio y obtener el nombre correspondiente. Este nombre es mostrado en un área específica de la interfaz (<div id="resultado">). Además, la lista de amigos se limpia antes de mostrar el resultado del sorteo.
