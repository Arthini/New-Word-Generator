const newWords=[{
    word:`Mellifluous`,
    meaning:`Pleasingly smooth and musical; pleasant to hear`,
    example:`The pianist's mellifluous melodies enchanted the audience.`
},{
    word:`Tranquil`,
    meaning:`--Calm and peaceful`,
    example:`The lake reflected the tranquil beauty of the surrounding mountains.`
},{
    word:`Harmony`,
    meaning:` --A state of peaceful coexistence or agreement.`,
    example:`The choir sang in perfect harmony, creating a beautiful melody.`
},{
    word:`Ponder`,
    meaning:`--To think about something carefully.`,
    example:`She sat by the window, pondering the events of the day.`
},{
    word:`Jovial`,
    meaning:`--Cheerful and friendly`,
    example:`The jovial atmosphere at the party made everyone feel welcome.`
},{
    word:`Vibrant`,
    meaning:`--Full of energy and enthusiasm`,
    example:`The garden was filled with vibrant colors from blooming flowers.`
},{
    word:`Glimpse`,
    meaning:`--A momentary or quick view.`,
    example:`As she walked by, I caught a glimpse of the beautiful sunset.`
},{
    word:`Mirth`,
    meaning:`--Amusement, especially as expressed in laughter.`,
    example:`The comedian's jokes filled the room with mirth.`
},{
    word:`Drowsy`,
    meaning:` --Sleepy and lethargic.`,
    example:`After a large meal, I felt drowsy and decided to take a short nap.`
},{
    word:`Optimistic`,
    meaning:`--Having a positive outlook on life.`,
    example:`Despite the challenges, she remained optimistic about the future.`
}]

const word=document.querySelector(".word"),
meaning=document.querySelector(".meaning"),
example=document.querySelector(".example"),
nextBtn=document.querySelector("button")
soundBtn=document.querySelector(".sound");
copyBtn=document.querySelector(".copy");

nextBtn.addEventListener("click", function(){
    let random=Math.floor(Math.random()*newWords.length);
    word.innerHTML=newWords[random].word;
    meaning.innerHTML=newWords[random].meaning;
    example.innerHTML=newWords[random].example; 
    // example.innerHTML = example.innerHTML.replace(newWords[random].word, '<span class="highlight">' + newWords[random].word + '</span>');
    example.innerHTML = example.innerHTML.replace(new RegExp(newWords[random].word, 'gi'), '<span class="highlight">$&</span>');
});

soundBtn.addEventListener("click",()=>{
    let utterance=new SpeechSynthesisUtterance(`${word.innerHTML}`);
    speechSynthesis.speak(utterance);
})
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(word.innerHTML,example.innerHTML)
})
