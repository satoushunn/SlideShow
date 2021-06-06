$(function() {
    let count = 0;
    let length = $(".yamagata").length;
    $('.back').on('click',function() {
        //この中はカウントをマイナスする処理だけにする//
        console.log(count);
        count --;
        if (count == -length || count == length) {
            count = 0;
        };

    });

    $('.next').on('click',function() {
        //この中はカウントをプラスする処理だけにする//
        console.log(count);
        count ++;
       if (count == length || count == -length) {
           count = 0;
       };
    });

    const Animation = function() {
        //この中はスライドさせる処理だけにし、
        //countの値に応じている位置を変える//
        if (count >= 0 && count < 4) {
            console.log("1番目の操作");
            $('.yamagata').animate({
                right : 640 * count
            });
        } else if (count = 4) {
            console.log("2番目の操作");
            $('.yamagata').animate({
              right : 0
            });
        }
    };

    $('.back').on('click',function(){
        Animation();
    });

    $('.next').on('click',function(){
        Animation();
    });
}); 
