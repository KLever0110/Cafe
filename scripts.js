;(function cup(){
    let coffe = document.querySelector('.JavaCof__img');
    let top_c = 100;
    let old_y = 0;
    let rotate_c = 35;
    let left_c = 100;
    
    window.addEventListener('scroll',function(){
        if(window.scrollY>old_y){
            top_c += 10;
            rotate_c -= 0.5;
            left_c -= 7;
        }
        else{
            top_c -= 10;
            rotate_c += 0.5;
            left_c += 7;
            
        }
        if(left_c > 100){
            left_c = 100;
        }
        if(left_c<-225){
            left_c = -225;
        }
        if(rotate_c>35){
            rotate_c = 35;
        }
        if(rotate_c<0){
            rotate_c = 0;
        }
        if(top_c < 100){
            top_c = 100;
        }
        if(top_c > 800){
            top_c = 800;
        }
        coffe.style.top = top_c+'px';
        coffe.style.left = left_c+'px';
        old_y = window.scrollY
        coffe.style.transform = 'rotate('+rotate_c+'deg)'
    })
})();

// ;(function menu(){
//     let strouke = document.querySelector('.main__strouke')
//     let p = document.querySelector('.strouke__menu')
//     for(let i = 0; i < 100; i++){
//         strouke.innerHTML += '<p class="strouke__menu">menu</p>'
//     }
//     let arr__p = document.querySelectorAll('.strouke__menu')
//     let x = -1000
//     setInterval(function(){
//         x+=1
//         for(let elem of arr__p){
//             elem.style.color = 'white'
//             elem.style.transform = 'translateX('+x+'px'+')'
//         }
//         if(x >= 0){
//             x = -1000
//         }
//     }, 10)
//     // let strouke = document.querySelector('.main__strouke')
//     // let p = document.querySelector('.strouke__menu')
//     // for(let i = 0; i < 10; i++){
//     //     strouke.innerHTML += '<p class="strouke__menu">menu</p>'
//     // }
//     // setInterval(function(){
//     //     let text = document.createElement('p')
//     //     text.className = 'strouke__menu'
//     //     text.innerHTML = 'menu'
//     //     strouke.prepend(text)

//     // },1000)
    
//     // let x = -100
//     // setInterval(function(){
//     //     let arr__p = document.querySelectorAll('.strouke__menu')
//     //     x+=1
//     //     for(let elem of arr__p){
//     //         elem.style.color = 'white'
//     //         elem.style.transform = 'translateX('+x+'px'+')'
//     //     }
//     //     // arr__p[length.arr__p-1].remove()
//     //     console.log(lenght(arr__p))
//     // }, 1000)
// })();

;(function burger(){
    console.log('hello')
    let burger = document.querySelector('.header__burger');
    let burger_text = document.querySelector('.header__menu')
    let a = 0;
    let start = 0;
    let end = 0;
    let icon = document.querySelector(".header__burger");
    function animation_0(){
        anime({
            targets: burger_text,
            left:['100%','70%'],
            duration: 500,
            loop: false,
            easing: 'easeInSine',
        })
        a=1
    }
    function animation_1(){
        anime({
            targets: burger_text,
            left:['70%','100%'],
            duration: 500,
            loop: false,
            easing: 'easeInSine',
        })
        a=0
    }
    function rotate_left(){
        anime({
            targets: '.stick__top',
            translateY:0,
            rotate:0,
            duration:500,
            loop:false,
            easing: 'easeInOutSine',
        })
        anime({
            targets: '.stick__down',
            translateY:0,
            rotate:0,
            duration:500,
            loop:false,
            easing: 'easeInOutSine',
        })
    }
    function rotate_down(){
        anime({
            targets: '.stick__top',
            translateY:6,
            rotate:45,
            duration:500,
            loop:false,
            easing: 'easeInOutSine',
        })
        anime({
            targets: '.stick__down',
            translateY:-6,
            rotate:-45,
            duration:500,
            loop:false,
            easing: 'easeInOutSine',
        })
    }
    burger.addEventListener('click', function(){
        if(a == 0 ){
            animation_0()
            rotate_down()
        }
        else{
            animation_1()
            rotate_left()
        }
    })
    // $('.container').on('touchstart', function(event){
    //     start = event.originalEvent.touches[0].pageX;
    // })  
    // $('.container').on('touchend', function(event){
    //     end = event.originalEvent.changedTouches[0].pageX;
    //     if(end-start>=100 && a == 0){
    //         animation_0()
    //         rotate_down()
    //     }
    //     else if(start - end >= 100 && a == 1){
    //         animation_1()
    //         rotate_left()
    //     }
    // })

})();