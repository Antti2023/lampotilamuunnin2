function muunnaftoc(F) {
    if (F < -459.67) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        // Palautetaan 0, jos ehto ei täyty
        return 0;
    }
    // Fahrenheit	Celsius	°C = (°F − 32) / 1,8
    return (F - 32) / 1.8
}

function muunnactof(C) {
    if (C < -273.15) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        // Palautetaan 0, jos ehto ei täyty
        return 0;
    }
    //  Celsius	Fahrenheit	°F = (°C) · 1,8 + 32
    return (C * 1.8) + 32
}

function muunnaftok(F) {
    if (F < -459.67) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        // Palautetaan 0, jos ehto ei täyty
        return 0;
    }
    // Fahrenheit	Kelvin	K = (°F + 459,67) / 1,8
    return (F + 459.67) / 1.8;
}
function muunnaktof(K) {
    if (K < 0) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        // Palautetaan 0, jos ehto ei täyty
        return 0;
    }
    // Kelvin	Fahrenheit	°F = K · 1,8 − 459,67
    return (K * 1.8) - 459.67
}

function muunnaktoc(K) {
    //Kelvin	Celsius	°C = K − 273,15
    if (K < 0) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        // Palautetaan 0, jos ehto ei täyty
        return 0;
    }
    return K - 273.15
}

function muunnactok(C) {
    if (C < -273.15) {
        alert("Huomio: Lämpötila on pienempi kuin absoluuttinen nollapiste.");
        // Palautetaan 0, jos ehto ei täyty
        return 0;
    }
    // Celsius	Kelvin	K = °C + 273,15
    return C + 273.15
}

function muunnaLampotila() {

    // hae käyttäjän syöttämä lämpötila
    const lampotila = parseFloat(document.getElementById("lampotila-input").value);
    console.log("Lämpölila-input", lampotila);
    // hae käyttäjän valitsema muunnos
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
    // kutsu oikeaa muunnosfunktiota
}
