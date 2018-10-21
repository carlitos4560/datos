let  gasas =[{ 
    	nombre : "Curitas",
    	descripcion : "para heridas leves"
    },
    {
        nombre : "vendas",
        descripcion : "Ayudan a recubrir heridas"
    },
    {
        nombre : "Rollos de gaza",
        descripcion : "Tambien conocidos como vendas"
    },
    {
        nombre : "Hisopos de algodón",
        descripcion : "Ayuda al limpiado de heridas"
    },
    {
        nombre : "Rollos de cinta adhesiva",
        descripcion : "Ayuda a sostener las vendas"
    }
];


let alimentos = [{
    agua: {
        nombre: "Agua",
        descripcion: "3.9 Litros por persona"
        }
    },
    {
        galletas: {
            nombre:"Galletas",
            descripcion:"galletas integrales o galletas no saladas"
        }
    },
    {
        enlatados:{
            nombre:"Enlatados/Conservas",
            descripcion:"Enlatados de atún, carne, frutas, otros."
        }
    },
    {
        golosinas:{
            nombre:"Golosinas",
            descripcion:"Golosinas"
        }
    }
];
let medicamentos = [{
            nombre: "aspirina",
            descripcion: "aspirina para dolores de cabeza"
        },
        {
            nombre: "ibuprofeno",
            prioridad :1,
            descripcion : "calmante"
        },{
            nombre: "amoxicilina",
            descripcion : "antibiotico"
        },
        {
            nombre : "alcohol",
            descripcion : "desinfectante"
        },
        {
            nombre : "Agua oxigenada",
            descripcion : "para lavar y desinfectar heridas" 
        },     
        {
            nombre : "Ungento ",
            descripcion : "antiviotico"
        },
        {
            nombre : "Toallas de Alcohol",
            descripcion : "para desinfectar heridas"
        },
        {
            nombre : "Diarreicos",
            descripcion: "evitan la diarrea"
        },
        {
            nombre : "Gotas",
            descripcion:"Gotas para los ojos"
        }

];

let metalicos = [{
        nombre : "tijeras",
        tamanio : 3.5,
    },
    {
        nombre : "pinzas",
        tamanio : "pequenio",
    },
    {
        nombre : "Navaja de bolsillo",
        tamanio : "pequenio",
    },
];

let utensilios = [{
    termometro : {
        nombre : "termometro",
        descripcion : "para medir la temperatura"        
    },
    libro : {
        nombre : "Primeros Auxilicios el buen doctor",
        descripcion : "Libro de consulta en caso de accidente"
    },
    jabon :{
        nombre : "Jabon",
        descripcion : "Ayuda en el lavado de heridas"
    },
    pañuelos :{
        nombre : "Paños de papel",
        descripcion : "Usados para limpiar heridas"
    },
    protector_solar : {
        nombre : "Protector solar",
        descripcion : "Crema para protejerce de los rayos utra violeta"
    },
    vasos_de_papel : {
        nombre : "Vasos de papel",
        descripcion : "usados en momentos de sed "
    },
    Bolsas_plastias :{
        nombre : "bolsas plasticas",
        descripcion : "para levantar cosas que necesiten llevarse"
    },
    alfiler: {
        nombre : "alfiler",
        descripcion : "sirve para sujetar las vendas "
    },
    hilo_aguja : {
        nombre : "hilo y aguja",
        descripcion : "para suturar heridas"
    },
    enfriadores : {
        nombre : "enfriadores",
        descripcion : "sirve para bajar la temperatura del cuerpo "
    },
    toallas_sanitarias :{
        nombre : "toallas sanitarias",
        descripcion : "para hacer precion sobre emorageas"
    },
    tablillas : {
        nombre : "tablillas",
        descripcion :"en casos de entablillar una fracturua"
    }
}];

let documentos = [
    {
       pasaporte:{
           nombre:"Pasaporte",
           descripcion:"Pasaporte "
       } 
    },
    {
        certificadoDeNacimiento:{
            nombre:"Certificado de nacimiento",
            descripcion:""
        } 
     },         
     {
        certificadoDeTítulosAcadémicos:{
            nombre:"Certificado de títulos académicos",
            descripcion:""
        } 
     },{
        carnetDeVacunas:{
            nombre:"Certificado de enfermedades alergias vacunas",
            descripcion:""
        } 
     },{
        ci:{
            nombre:"Cédula de identidad",
            descripcion:"Cédula de identidad o fotocopia"
        } 
     }
];
// datos del botiquin
let botiquin = {
    nombre : "sunamis",
    gasas : gasas,
    medicamentos : medicamentos,
    metalicos : metalicos,
    utensilios : utensilios,
    documentos : documentos
}
