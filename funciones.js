function agregarCarrito(){

    let producto = document.getElementById('iProducto').value;
    let cantidad = parseInt(document.getElementById('iCantidad').value);
    let precio = parseInt(document.getElementById('iPrecio').value);
    
    if(producto == '' || cantidad < 0 || precio < 0){
        mensaje('error','Datos Incompletos', 'Llenar Datos');
    }else{
        document.getElementById('iProd').value = producto;
        document.getElementById('iCant').value = cantidad;
        document.getElementById('iPre').value = precio;
        document.getElementById('iTotal').value = cantidad * precio;
        
        document.getElementById('iProducto').value = '';
        document.getElementById('iCantidad').value = '';
        document.getElementById('iPrecio').value = '';
    }
}

function cupon(){
    let cupon = document.getElementById('iDescuento').value;
    let total = parseInt(document.getElementById('iTotal').value);

    if(isNaN(total)){
        mensaje('error','Datos Incompletos', 'Llenar Datos');
    }else{
        if(cupon === 'CM'){
            document.getElementById('iTotal').value = total - (total*0.30);
            mensaje('success', 'Descuento Aplicado', 'NAH');
        }else if(cupon === 'JV'){
            document.getElementById('iTotal').value = total - (total*0.50);
            mensaje('success', 'Descuento Aplicado', 'NAH');
        }
    }

}

function mensaje(icono, mensaje, resultado){
    Swal.fire({
        icon: icono,
        title: mensaje,
        text: resultado,
      });
};