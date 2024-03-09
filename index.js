// alert('try harder untill it breaks.');

document.addEventListener('keydown', function(event){

    let keypressed = event.key;
    
    if(keypressed === 'w')
    {
        var audio = new Audio('tom-1.mp3');
        audio.play();
        // keyplayed = 'w';
    }
    if(keypressed === 'a')
    {
        var audio = new Audio('tom-2.mp3');
        audio.play();
        // keyplayed = 'a';
    }
    if(keypressed === 's')
    {
        var audio = new Audio('tom-3.mp3');
        audio.play();
        // keyplayed = 's';
    }
    if(keypressed === 'd')
    {
        var audio = new Audio('tom-4.mp3');
        audio.play();
        // keyplayed = 'd';
    }
    if(keypressed === 'j')
    {
        var audio = new Audio('snare.mp3');
        audio.play();
        // keyplayed = 'j';
    }
    if(keypressed === 'k')
    {
        var audio = new Audio('crash.mp3');
        audio.play();
        // keyplayed = 'k';
        
    }
    if(keypressed === 'l')
    {
        var audio = new Audio('kick-bass.mp3');
        audio.play();
        // keyplayed = 'l';
    }

    document.querySelector('.'+keypressed).style.transition = 'transform 0.2s ease';
    document.querySelector('.'+keypressed).style.transform = 'scale(0.96)';

});

document.addEventListener('keyup', function(event){
    let keypressed = event.key;
    document.querySelector('.'+keypressed).style.transition = 'transform 0.2s ease';
    document.querySelector('.'+keypressed).style.transform = 'scale(1)';
});

for(var i = 0; i<document.querySelectorAll('.drum').length; i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        var thisButton = this.innerHTML;
        if(thisButton === 'w')
        {
            var audio = new Audio('tom-1.mp3');
            audio.play();
            
        }
        if(thisButton === 'a')
        {
            var audio = new Audio('tom-2.mp3');
            audio.play();
        }
        if(thisButton === 's')
        {
            var audio = new Audio('tom-3.mp3');
            audio.play();
        }
        if(thisButton === 'd')
        {
            var audio = new Audio('tom-4.mp3');
            audio.play();
        }
        if(thisButton === 'j')
        {
            var audio = new Audio('snare.mp3');
            audio.play();
        }
        if(thisButton === 'k')
        {
            var audio = new Audio('crash.mp3');
            audio.play();
        }
        if(thisButton === 'l')
        {
            var audio = new Audio('kick-bass.mp3');
            audio.play();
        }
        document.querySelector('.'+thisButton).style.transition = 'transform 0.1s ease';
        document.querySelector('.'+thisButton).style.transform = 'scale(0.96)';
        setTimeout(()=>
        {
            document.querySelector('.'+thisButton).style.transition = 'transform 0.1s ease';
            document.querySelector('.'+thisButton).style.transform = 'scale(1)';
        }, 100 );
    });
}

