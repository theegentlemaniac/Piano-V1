const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");


let allkeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    console.log(allkeys);

    const clickedKey = document.querySelector(`\[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");

    }, 150);

}

pianoKeys.forEach(key => 
    {
        allkeys.push(key.dataset.key)
        key.addEventListener("click", () => playTune(key.dataset.key));
       
    }
    );

    const handleVolume = (e) =>{
        audio.volume = e.target.value;
    }

    const pressedKey = (e) => {
        if(allkeys.includes(e.key)) playTune(e.key);
    }

    const showHideKeys = (e) => {
        pianoKeys.forEach(key => key.classList.toggle("hide"));
    }
    
    document.addEventListener("keydown", pressedKey);
    volumeSlider.addEventListener("input", handleVolume);
    keysCheckbox.addEventListener("click", showHideKeys);
