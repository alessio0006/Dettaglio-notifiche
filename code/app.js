galert("hai molte notifiche da leggere");
app = {
    init : function () { //init diventa n metodo della classe anonima di cui la variabile app fa parte. In questo modo app diventa l'unica variabile globale
        console.log("init!"); //messaggio presente nel debug
        $("title").text("Dettaglio Notifiche"); // ha preso il tag title e ho cambiato titolo
        $.get("data.json").done(app.onSuccess).fail(app.onError);
      
    },
    onSuccess:function (jsonData) {
        console.log(jsonData);
        let lista=dataJson.notificationlist;
		lista.forEach(element => {let materia=`
		<li>
	        ${element.messaggio}<br>${element.timestamp}
	        </li>
$("#lista").append(lista);
     
        },
        onError:function(e){
            console.log("error!");
            console.log(JSON.stringify(e));
        }
};
$(document).ready(app.init);// implemento la funzione init presente nella classe di app
