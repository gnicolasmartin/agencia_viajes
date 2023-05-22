var erroresFormulario = "";
var formularioError = false;

var cuadroTextoNombre = document.getElementsByName('nombre')[0];
var cuadroTextoMail = document.getElementsByName('mail')[0];
var cuadroTextoTelefono = document.getElementsByName('telefono')[0];
var cuadroTextoFechaInicio = document.getElementsByName('fecha_inicio')[0];
var cuadroTextoFechaFin = document.getElementsByName('fecha_fin')[0];

var entradaOfertas = document.getElementById('container_ofertas');
var entradaPaquetes = document.getElementById('container_paquetes');

var ofertas = [
    {
        "nombre": "Año Nuevo en Paris",
        "precio": "5.000usd",
        "fecha_inicio": "26/12/23",
        "fecha_fin": "2/01/24",
        "imagen": "img/paris_anio_nuevo.jpg"
    },
    {
        "nombre": "Ski Week en Las Leñas",
        "precio": "1.000usd",
        "fecha_inicio": "06/08/23",
        "fecha_fin": "13/08/23",
        "imagen": "img/las_lenias.jpg"
    },
    {
        "nombre": "Finde Patrio en el NOA",
        "precio": "300usd",
        "fecha_inicio": "25/05/23",
        "fecha_fin": "28/05/23",
        "imagen": "img/noa.jpg"
    },
    {
        "nombre": "Conocé el Caribe",
        "precio": "3.000usd",
        "fecha_inicio": "20/08/23",
        "fecha_fin": "24/08/23",
        "imagen": "img/cayo_caulker.jpg"
    }
];

var paquetes = [
    {
        "nombre": "Bariloche Clásico",
        "precio": "500usd",
        "imagen": "img/bariloche.jpg"
    },
    {
        "nombre": "Río de Janeiro y Buzios",
        "precio": "600usd",
        "imagen": "img/rio.jpg"
    },
    {
        "nombre": "Tucumán, Salta y Jujuy",
        "precio": "300usd",
        "imagen": "img/tucsaltajujuy.jpg"
    }
];



var verificarAtributos = function(e){
    cambiarColorCuadrosForm();
    validarCompletitudNombre(e);
    validarCompletitudMail(e);
    validarCompletitudTelefono(e);
    validarCompletitudFechas(e);
    if(formularioError==true)
    {
        alert(erroresFormulario);
        erroresFormulario = "";
    }
};

var validarCompletitudNombre = function(e){
    if(formulario.nombre.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El nombre no puede estar vacío\n";
        formularioError = true;
        cuadroTextoNombre.style.borderColor='red';
    }
};

var validarCompletitudMail = function(e){
    if(formulario.mail.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El e-mail no puede estar vacío\n";
        formularioError = true
        cuadroTextoMail.style.borderColor='red';
    }
};

var validarCompletitudTelefono = function(e){
    if(formulario.telefono.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El telefono no puede estar vacío\n";
        formularioError = true
        cuadroTextoTelefono.style.borderColor='red';
    }
};

var validarCompletitudFechas = function(e){
    if(formulario.fecha_inicio.value==0 || formulario.fecha_fin.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "Debe seleccionar fechas de inicio y fin de viaje\n";
        formularioError = true;
        cuadroTextoFechaInicio.style.borderColor='red';
        cuadroTextoFechaFin.style.borderColor='red';
    }
};

function cambiarColorCuadrosForm(){
    cuadroTextoFechaInicio.style.borderColor="#ced4da";
    cuadroTextoFechaFin.style.borderColor="#ced4da";
    cuadroTextoNombre.style.borderColor="#ced4da";
    cuadroTextoMail.style.borderColor="#ced4da";
    cuadroTextoTelefono.style.borderColor="#ced4da";
}

formulario.addEventListener("submit", verificarAtributos);

var contenido_ofertas = "";

contenido_ofertas += `
<div class="row row-cols-1 row-cols-md-3 g-4">
`;

for(let i=0;i<ofertas.length;i++){

    contenido_ofertas += `
    <div class="col">
        <a href="ofertas.html"><div class="card style="width: 18rem;">
            <div class="card_img_container">
                <img class="card-img-top" src="${ofertas[i].imagen}"></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">${ofertas[i].nombre}</h5>
                <p class="card-text">${ofertas[i].precio}</p>
            </div>
        </div></a>
    </div>
            `

}

contenido_ofertas += `</div>`;

entradaOfertas.innerHTML = contenido_ofertas;

var contenido_paquetes = "";

contenido_paquetes += `
<div class="row row-cols-1 row-cols-md-3 g-4">
`;

for(let i=0;i<paquetes.length;i++){

    contenido_paquetes += `
    <div class="col">
        <a href="paquetes.html"><div class="card style="width: 18rem;">
            <div class="card_img_container">
                <img class="card-img-top" src="${paquetes[i].imagen}"></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">${paquetes[i].nombre}</h5>
                <p class="card-text">${paquetes[i].precio}</p>
            </div>
        </div></a>
    </div>
            `

}

contenido_paquetes += `</div>`;

entradaPaquetes.innerHTML = contenido_paquetes;