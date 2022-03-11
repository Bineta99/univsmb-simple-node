const Fichier = require('file.js')

class GestionFichierjson extends GestionFichier{
    constructor(monFichier){
        super(monFichier)
    }
    
lireJson(){
    this.lireJson(this.Fichier)
    console.log(this.contenuJson.key)


}
    
}

module.exports = FichierJson