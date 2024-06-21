function callback(callback:any,newName:string){
    callback(newName)
}
let arrofunc = (name:string) => {
    console.log(`Hellow\n Mr / Mrs : ${name.toUpperCase()}`);
    
}
callback(arrofunc,"Saif")