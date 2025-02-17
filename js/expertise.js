   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var progressbar_html = document.querySelector('#progressbar_html .progress-bar');
      var progressbar_html_observer = new window.ResizeObserver(entries => 
      {
         var val = Math.round(((entries[0].target.clientWidth/entries[0].target.offsetParent.clientWidth)*100));
         entries[0].target.innerText = val + '%';
         entries[0].target.setAttribute('aria-valuenow', val);
      });
      progressbar_html_observer.observe(progressbar_html);
      var progressbar_uidesign = document.querySelector('#progressbar_uidesign .progress-bar');
      var progressbar_uidesign_observer = new window.ResizeObserver(entries => 
      {
         var val = Math.round(((entries[0].target.clientWidth/entries[0].target.offsetParent.clientWidth)*100));
         entries[0].target.innerText = val + '%';
         entries[0].target.setAttribute('aria-valuenow', val);
      });
      progressbar_uidesign_observer.observe(progressbar_uidesign);
      var progressbar_jquery = document.querySelector('#progressbar_jquery .progress-bar');
      var progressbar_jquery_observer = new window.ResizeObserver(entries => 
      {
         var val = Math.round(((entries[0].target.clientWidth/entries[0].target.offsetParent.clientWidth)*100));
         entries[0].target.innerText = val + '%';
         entries[0].target.setAttribute('aria-valuenow', val);
      });
      progressbar_jquery_observer.observe(progressbar_jquery);
      var progressbar_php = document.querySelector('#progressbar_php .progress-bar');
      var progressbar_php_observer = new window.ResizeObserver(entries => 
      {
         var val = Math.round(((entries[0].target.clientWidth/entries[0].target.offsetParent.clientWidth)*100));
         entries[0].target.innerText = val + '%';
         entries[0].target.setAttribute('aria-valuenow', val);
      });
      progressbar_php_observer.observe(progressbar_php);
   });
   
   $(document).ready(function()
   {
      function aspectRatioRollOverText2()
      {
         var $obj = $("#RollOverText2");
         var height = $obj.width() / 1;
         if (height == 0)
         {
            setTimeout(function(){ aspectRatioRollOverText2() }, 250);
         }
         else
         {
            $obj.css('height', height + 'px');
         }
      }
      $(window).resize(function()
      {
         aspectRatioRollOverText2();
      });
      aspectRatioRollOverText2();
      function aspectRatioRollOverText1()
      {
         var $obj = $("#RollOverText1");
         var height = $obj.width() / 1;
         if (height == 0)
         {
            setTimeout(function(){ aspectRatioRollOverText1() }, 250);
         }
         else
         {
            $obj.css('height', height + 'px');
         }
      }
      $(window).resize(function()
      {
         aspectRatioRollOverText1();
      });
      aspectRatioRollOverText1();
      function aspectRatioRollOverText3()
      {
         var $obj = $("#RollOverText3");
         var height = $obj.width() / 1;
         if (height == 0)
         {
            setTimeout(function(){ aspectRatioRollOverText3() }, 250);
         }
         else
         {
            $obj.css('height', height + 'px');
         }
      }
      $(window).resize(function()
      {
         aspectRatioRollOverText3();
      });
      aspectRatioRollOverText3();
      function aspectRatioRollOverText4()
      {
         var $obj = $("#RollOverText4");
         var height = $obj.width() / 1;
         if (height == 0)
         {
            setTimeout(function(){ aspectRatioRollOverText4() }, 250);
         }
         else
         {
            $obj.css('height', height + 'px');
         }
      }
      $(window).resize(function()
      {
         aspectRatioRollOverText4();
      });
      aspectRatioRollOverText4();
      function aspectRatioRollOverText5()
      {
         var $obj = $("#RollOverText5");
         var height = $obj.width() / 1;
         if (height == 0)
         {
            setTimeout(function(){ aspectRatioRollOverText5() }, 250);
         }
         else
         {
            $obj.css('height', height + 'px');
         }
      }
      $(window).resize(function()
      {
         aspectRatioRollOverText5();
      });
      aspectRatioRollOverText5();
   });
   
   $(document).ready(function()
   {
      var $progressbars = $('.ui-progressbar');
      
      $progressbars.each(function() 
      {
        var $obj = $(this);
        $obj.data('value', $obj.progressbar('option', 'value'));
        $obj.data('done', false);
        $obj.progressbar('option', 'value', 0);
      });
      $(window).bind('scroll', function() 
      {
         $progressbars.each(function() 
         {
            var $obj = $(this);
            if (!$obj.data('done') && $(window).scrollTop() + $(window).height() >= $obj.offset().top) 
            {
               $obj.data('done', true);
               $obj.animate({scroll: 1}, 
               { 
                  duration: 3000, 
                  step: function(now) 
                  {
                     var $obj = $(this);
                     var val = Math.round($obj.data('value') * now);
                     $obj.progressbar('option', 'value', val);
                  }
               });
            }
         });
      }).triggerHandler('scroll');
   });
