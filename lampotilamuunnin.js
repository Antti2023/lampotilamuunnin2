function muunnaftoc(F) {
    if (F < -459.67) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        
        return 0;
    }
    
    return (F - 32) / 1.8
}

function muunnactof(C) {
    if (C < -273.15) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        
        return 0;
    }
    
    return (C * 1.8) + 32
}

function muunnaftok(F) {
    if (F < -459.67) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        
        return 0;
    }
   
    return (F + 459.67) / 1.8;
}
function muunnaktof(K) {
    if (K < 0) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        
        return 0;
    }
    
    return (K * 1.8) - 459.67
}

function muunnaktoc(K) {
   
    if (K < 0) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
       
        return 0;
    }
    return K - 273.15
}

function muunnactok(C) {
    if (C < -273.15) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        
        return 0;
    }
    
    return C + 273.15
}

function muunnaLampotila() {

    
    const lampotila = parseFloat(document.getElementById("lampotila-input").value);
    console.log("Lämpölila-input", lampotila);
   
    if (isNaN(lampotila)) {
        alert("Virhe: Anna kelvollinen lämpötila.");
        return;
    }


    console.log("Lämpölila-input", lampotila);
    const muunnos = document.getElementById("muunnos").value;
    console.log("Muunnos:", muunnos);

    let lampotilamuunnos = 0;
    switch (muunnos) {
        case "f-c":
            lampotilamuunnos = muunnaftoc(lampotila);
            break;
        case "c-f":
            lampotilamuunnos = muunnactof(lampotila);
            break;
        case "f-k":
            lampotilamuunnos = muunnaftok(lampotila);
            break;
        case "k-f":
            lampotilamuunnos = muunnaktof(lampotila);
            break;
        case "k-c":
            lampotilamuunnos = muunnaktoc(lampotila);
            break;
        case "c-k":
            lampotilamuunnos = muunnactok(lampotila);
    }

    console.log("Tulos:", lampotilamuunnos);
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "lämpötila: " + lampotilamuunnos.toFixed(document.getElementById("lämpötila")["desimaali"].value);
    
}
