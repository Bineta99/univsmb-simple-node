const fs = require("fs");
class GestionFichier{
    constructor(File){
        this.file = File
    }
    read(){
        let contenu = fs.readFileSync(this.file,{encoding:"utf8",flag:'r'})
        console.log(contenu)
    }

    write(contenu){
            fs.writeFileSync(this.file,'\n' + contenu,{encoding:"utf8",flag:'a'})
          }

    delete(){
       fs.rmSync(this.file)
    }
   affichage(){
     if(this.contenu != undefined)
        console.log("Mon contenu est : \n" + this.contenu)
    }

}
let myfile = new GestionFichier('fichier.txt')
myfile.read()
myfile.write("Coucou")
myfile.write("Tp web")
myfile.affichage()
//myfile.delete()