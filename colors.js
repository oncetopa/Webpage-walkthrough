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
      
      var Button = {
        setFontColor:function(color){
        $('input').css('font-color', color);
        },
        setBackgroundColor:function(color){
        $('input').css('background-color', color);
        }
      } 
              
      function nightDayHandler(self){
      if (self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Button.setFontColor('black');
        Button.setBackgroundColor('white');
        self.value='day';

        Links.setColor('yellow');
        } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Button.setFontColor('white');
        Button.setBackgroundColor('black');
        self.value='night';

        Links.setColor('#8B00FF');
        }
    }
