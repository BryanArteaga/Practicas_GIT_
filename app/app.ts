//
function lista(...datos: string[]): void{
    const dato1: string | null = prompt("Ingresar especies de animales:");
     if (dato1 !== null && dato1 !== "") {
         datos.push(dato1);
         lista(...datos);
}else {
    mostrar(datos);
    }
}
function mostrar(datos: string[]): void {
    for (let i = 0; i < datos.length; i++) {
    document.write(datos[i]);
  }
}    
