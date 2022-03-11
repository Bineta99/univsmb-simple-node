
 const fs = require("fs");
class GestionFichier{
    constructor(aFile){
        this.file = aFile
    }

 read()
    {
    
       fs.open("nouveauFichier.txt", "w", function (err, file) {
          if (err) throw err;
          console.log("Fichier de Bineta crée avec succès !");
       });
    }
   
 write()
    {
    
    
    fs.appendFile("nouveauFichier.txt", "Premier Code JavaScript ", function (err) {
       if (err) throw err;
       console.log("Nouveau fichier !");
    });
    
    }
    
     delete()
    {
       
    
        fs.unlink("fichier.txt",(err) => {
           if (err) throw err;
           console.log("Fichier supprimé !");
        });
        
        
    
    }
    
    

}



var MyFile = new GestionFichier('Mon fichier')
MyFile.read()
MyFile.write()