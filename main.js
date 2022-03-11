const Fichier = require('/file.js')
const FichierJson = require('./jsonfile.js')
//part 1 lecture simple

/*let myfile = new GestionFichier('fichier.txt')
myfile.read()
myfile.write("Coucou")
myfile.write("Tp web")
myfile.affichage()
myfile.delete()*/
//part 2 lecture dimple d'un fichier Json

let monFichierJson = new FichierJson('myjsonfile.json')
monFichierJson.lireJson()