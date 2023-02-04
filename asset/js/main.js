console.log('api')

document.querySelector("#cp").addEventListener('input',function (){
    if (this.value.length ==5){
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=json&geometry=centre\n`;
        fetch(url).then(response=>
            response.json().then(data => {
                console.log(data)
                const renseigner = document.querySelector('.rs');
                renseigner.innerText = '';
                if (data == ''){
                    const aff = `Cet ville nest pas renseigné dans l'API`;
                    renseigner.innerText = aff;
                }
                 let affichage = '<ul>';
                  for (let ville of data ){
                      affichage += `<li>${ville.nom}<strong> - ${ville.population} Habitant</strong></li>`;
                  }
                  affichage += '</ul>';
                document.querySelector("#ville").innerHTML = affichage
            }))
        .catch(err=> console.log('Erreur : '+ err));
    }
});
