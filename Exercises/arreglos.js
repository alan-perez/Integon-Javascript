
    let productos =[];
    let listaProductos = document.getElementById("listaElementos");
    
    function agregarElemento(){
    let newElement = window.prompt('Nuevo Elemento');
    if(newElement != null){
        productos.push(newElement)
    }
    console.log(productos);
    
    while(listaProductos.firstChild)
        listaProductos.removeChild(listaProductos.firstChild);

    productos.forEach((producto)=>{
        let nuevoProducto = document.createElement("li");
        let numeroDeProductos = listaProductos.children.length;
        nuevoProducto.setAttribute('id', numeroDeProductos);
        nuevoProducto.innerHTML = `${producto} <button onclick = 'eliminaProducto(${numeroDeProductos})'>Eliminar</button>`;
        listaProductos.appendChild(nuevoProducto);
    });

        // productos.forEach(agregarElementoLista);
    }

    function eliminaProducto(cual){;
        alert( `Eliminar producto ${cual}`);
       listaProductos.removeChild(listaProductos.childNodes[cual]);
    }


    // function agregarElementoLista(e){
    //     let nuevoProducto = document.createElement("li");
    //     nuevoProducto.innerText = e;
    //     listaProductos.appendChild(nuevoProducto);
    // }
