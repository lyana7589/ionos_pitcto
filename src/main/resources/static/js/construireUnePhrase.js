var tags;
var mot;
var idMot;
var tableauMots;
var tableauId;
var tableauTags;
var tableauSingulierPluriel;
var tableauFemininMasculin;
var phrase;

function updateTableauMots() {

    tableauMots = [];
    tableauId = [];
    tableauTags = [];
    tableauSingulierPluriel = [];
    tableauFemininMasculin = [];

    $(".target .item2").each(function(index) {
      mot = $(this).data('mot-nom');
      tags = $(this).data('mot-tags');
      idMot = $(this).data('mot-id');

      if (index === 0) {
        mot = mot.charAt(0).toUpperCase() + mot.slice(1);
      }

    //  verifClasseGrammaticale();
    //  tableauMots.push(mot);

   //  tableauTags.push(tags);

      var singulierPlurielPrecedent = tableauSingulierPluriel[tableauSingulierPluriel.length - 1];
      var femininMasculinPrecedent = tableauFemininMasculin[tableauFemininMasculin.length - 1];

      if(tags.includes("pronom_ou_determinant") && tags.includes("'singulier'")){
            tableauSingulierPluriel.push("singulier")
      } else if(tags.includes("'pluriel'") || singulierPlurielPrecedent == "pluriel"){
         tableauSingulierPluriel.push("pluriel")
      } else {
         tableauSingulierPluriel.push("singulier")
      }

      if(tags.includes("'feminin'") || femininMasculinPrecedent == "feminin"){
         tableauFemininMasculin.push("feminin")
      } else if (tags.includes("'nom'") && tags.includes("'masculin'")){
         tableauFemininMasculin.push("masculin")
      }else {
         tableauFemininMasculin.push("masculin")
      }

        verifClasseGrammaticale();
        tableauMots.push(mot);
        tableauId.push(idMot);
        tableauTags.push(tags);

    });

    phrase = tableauMots.join(' ').replace(/'\s+/g, "'"); // Le replace supprime l'espace du join si le mot finit par une apostrophe

    $("#contenuPhrase").text(phrase);

    indexMotActuel = 0;
}



// Vérification de la nature du mot
function verifClasseGrammaticale(){
    if(tags.includes("'verbe'")){
        conjugaisonPresent();

    } else if (tags.includes("'nom'")) {
        accordNom();
    } else if (tags.includes("'adjectif'")) {
        accordAdjectif();
    }
}

// Fonction textToSpeech
function textToSpeech(messageToSpeech){
    if ('speechSynthesis' in window) {
      var message = new SpeechSynthesisUtterance();
      message.text = messageToSpeech;

      var voices = speechSynthesis.getVoices();
      message.voice = voices[0];
      message.rate = 1;
      message.volume = 0.8;

      speechSynthesis.speak(message);
    }
}

// Lecture de la phrase
$("#lecturePhrase").click(function(){
    if(phrase == undefined){
        phrase = "La phrase est vide";
    }
    textToSpeech(phrase);
});


// Lecture mot à mot
var indexMotActuel = 0;
var motPrecedent

$("#lectureMotAmot").click(function(){
      if (phrase != undefined) {
        var phraseALire = phrase.split(" ");
        if(indexMotActuel < phraseALire.length){
            var motActuel = phraseALire[indexMotActuel];
            if(motActuel == motPrecedent){
                motActuel = phraseALire[indexMotActuel + 1]
            }
            textToSpeech(motActuel);
            let phraseMotSurbrillance = phrase.replace(motActuel, '<span class="surbrillance">' + motActuel + '</span>')
            $("#contenuPhrase").html(phraseMotSurbrillance);
            indexMotActuel++;
        }

        if(indexMotActuel == phraseALire.length){
            indexMotActuel--;
        }
      }
});

//Mot à mot à l'envers
$("#lectureMotAmotReverse").click(function(){
     if (phrase != undefined) {
       var phraseALire = phrase.split(" ");
       if(indexMotActuel > 0){
           indexMotActuel--;
           motPrecedent = phraseALire[indexMotActuel];
           let phraseMotSurbrillance = phrase.replace(motPrecedent, '<span class="surbrillance">' + motPrecedent + '</span>')
           $("#contenuPhrase").html(phraseMotSurbrillance);
           textToSpeech(motPrecedent);
       }
     }
});




