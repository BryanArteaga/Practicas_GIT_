//Grupo: E          Integrantes: Patiño Angulo Alex - Arteaga Santana Bryan - Chicaiza Morales Shalim
let i:number;
class FuncionesMenu{
    elementos:string[]
    //Constructor
    constructor(){
        this.elementos=["Aphelios","Mordekaiser","Pyke","Xayah","Ezreal","Sylas"]
    }
    //Métodos
    AgregarElmnt(personajes:string){
        this.elementos.push(" "+personajes)
    }
    Actualizacion(datos:string){
        let i:number=parseInt(prompt("Ingrese el indice del elemento que desea modificar","Numeros entre 1 y 6"))
        this.elementos[i-1]=(" "+datos)
    }
    Quitar(){
        this.elementos.pop()
    }
    filtro(fltr:string): string[]{
        return this.elementos.filter(verificacion=>verificacion.includes(fltr))
    }
    MostrarArreglo(){
        document.write(`Los elementos del vector son: ${this.elementos}`)
    }
}
//Clase para opcion 5 del menú
class AprobacionVacaciones{
    Nombre:String
    TiempoTrabajado:number
    DiasVacacionesDisponibles:number
    constructor(){
        this.Nombre=prompt("Ingrese el nombre del trabajador o trabajadora")
        this.TiempoTrabajado=parseInt(prompt("Ingrese el tiempo trabajado en meses de: "+this.Nombre))
        this.DiasVacacionesDisponibles=parseFloat(prompt("Ingrese la cantidad vacaciones disponibles en días: "))
    }
    Verificacion(){
        let estado:string
        document.write(`Nombre: ${this.Nombre}<br>Meses trabajados: ${this.TiempoTrabajado}<br>Dias de vacaciones disponibles: ${this.DiasVacacionesDisponibles}<br>`)
        if (this.TiempoTrabajado>=24 && this.DiasVacacionesDisponibles>=15)
        {
            estado="Sus vacaciones han sido aprobadas"
        }
        else
        {
            estado="Sus vacaciones han sido denegadas"
        }
        document.write(estado)
    }
}
let MenuOp:number=parseInt(prompt("----------------------------Menú de opciones----------------------------\n1.Agregar Elemento al final de un array\n\n2.Actualizar Elemento cualquiera.\n\n3.Eliminar el último Elemento del array.\n\n4.Filtrar elementos de acuerdo a la condición que le indique a través del promt\n\n5.Aprobación de caso\n\n6.Imprimir los datos del array."))
let mensaje=new FuncionesMenu()
console.log(`La lista de personajes inicial es: <br><br>${mensaje.elementos}<br>`)
    switch (MenuOp) {
        case 1:
            const LoL1=new FuncionesMenu()
            let personajes:string=prompt("Ingrese nuevo personaje")
            LoL1.AgregarElmnt(personajes)
            document.write(`El elemento nuevo es: ${LoL1.elementos[6]}<br>Nueva lista: ${LoL1.elementos}`)
            break;
        case 2:
            const LoL2=new FuncionesMenu()
            let datos:string=prompt("Ingrese el personaje")
            LoL2.Actualizacion(datos)
            document.write(`Los personajes con los datos actualizados son: ${LoL2.elementos}`)
            break;
        case 3:
            const LoL3=new FuncionesMenu()
            LoL3.Quitar()
            document.write(`La nueva lista de personajes es: ${LoL3.elementos}`)
            break;
        case 4:
            const LoL4=new FuncionesMenu()
            let LetraFiltro:string=prompt("Ingrese la letra que quiera filtrar\n")
            document.write(`El filtro es: ${LetraFiltro}<br>Resultado: ${LoL4.filtro(LetraFiltro)}`)
            break;
        case 5:
            const LoL5=new AprobacionVacaciones()
            LoL5.Verificacion()
            break;
        case 6:
            const LoL6=new FuncionesMenu()
            LoL6.MostrarArreglo()
            break;
        default:
            document.write("La opción seleccionada es incorrecta ")
    }
