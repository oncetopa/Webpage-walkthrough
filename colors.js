var Links = {
        setColor:function(color){
        $('a').css('color', color);
      }
    }
      
      var Body = {
        setColor:function(color){
        $('body').css('color', color);
        },
        setBackgroundColor:function(color){
        $('body').css('backgroundColor', color);
        }
      }
      
      function nightDayHandler(self){
      if (self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';

        Links.setColor('yellow');
        } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';

        Links.setColor('#8B00FF');
        }
    }
