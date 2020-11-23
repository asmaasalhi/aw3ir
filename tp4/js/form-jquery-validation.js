$( document ).ready(function() {

    
    console.log("DOM ready!");


   $("#gps").on("click", function () {
        getLocation();

    });

   
    $('#nom').keyup(function() {
 
        // Le script qui devra calculer et afficher le nombre de caractères

        var nombreCaractere = $(this).val().length;
        
        var msg =   nombreCaractere + ' car.';
        $('#id').text(msg);
      

       });


    $('#prenom').keyup(function () {

        var nombreCaractere = $(this).val().length;

        var msg = nombreCaractere + ' car.';
        $('#idd').text(msg);


    });


 $("#valider").on("click", function ()
    {


     var 
	    nom = $("#nom").val(),
        prenom = $("#prenom").val(),
        date = $("#date").val(),
        add = $("#add").val(),
        email = $("#email").val();


     contactStore.add(nom, prenom, date, add, email);

     var list = contactStore.getList();
    
     
        for(var i in list){

        $("table").append("<tr><td>"+list[i].name+"</td><td>"+list[i].firstname+"</td><td>"+list[i].date+"</td><td>"+list[i].adress+"</td><td>"+list[i].mail+"</td></tr>");


     }

    });


});