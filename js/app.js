const model ={



    argentina : "https://newsapi.org/v2/top-headlines?country=ar&apiKey=6800e16ec0a047f0b21a53891efea814",
    germany: "https://newsapi.org/v2/top-headlines?country=de&apiKey=6800e16ec0a047f0b21a53891efea814",
    usa: "https://newsapi.org/v2/top-headlines?country=us&apiKey=6800e16ec0a047f0b21a53891efea814",

}

var eventsMediator = {
  events: {},
  on: function (eventName, callbackfn) {
    this.events[eventName] = this.events[eventName]
      ? this.events[eventName]
      : [];
    this.events[eventName].push(callbackfn);
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (callBackfn) {
        callBackfn(data);
      });
    }
  },
};

eventsMediator.on("Country", function (data) {


  $.ajax({
    url: data,
    
    method: 'GET',
    dataType: 'JSON',
    
    success: function(data) {
     
      console.log(data)
      debugger
      renderHello(data);

      
    },
    error: function(err) {
      console.log('error:' + err)
    }
    });



    function renderHello(data) {
      debugger
      if(data != null){
      var articles = data.articles;
      const template = document.getElementById('template').innerHTML;
      const rendered = Mustache.render(template, {articles});
      document.getElementById('myTemplate').innerHTML = rendered;
      // if($(".card").hasClass("d-none")){
      //   $(".card").removeClass("d-none");
      //   $(".card").addClass("d-block");
      //   debugger
      // }
      }
   
    };
  

});



var imgs = $(".item")
imgs.bind('click', function(e) {
 

 
  // Emit an event when the button is clicked
  var img = e.target.closest("img");
  

  if(img && img.id == 'arg'){
   
    eventsMediator.emit('Country', model.argentina );
    debugger
  }

  if(img && img.id == 'ger'){
    eventsMediator.emit('Country',model.germany );
    debugger
  }

  if(img && img.id == 'us'){
    eventsMediator.emit('Country', model.usa);
    debugger
  }


  
});

// A $( document ).ready() block.
$( document ).ready(function() {
   
    $("#owl-demo").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
    });


  
// $.ajax({
//     url: countries.argentina,
    
//     method: 'GET',
//     dataType: 'JSON',
    
//     success: function(data) {
//       console.log(data)
      
//     },
//     error: function(err) {
//       console.log('error:' + err)
//     }
//     });




//     $.ajax({
//         url: countries.germany,
        
//         method: 'GET',
//         dataType: 'JSON',
        
//         success: function(data) {
//           console.log(data)
        
//         },
//         error: function(err) {
//           console.log('error:' + err)
//         }
//         });

        

// $.ajax({
//     url: countries.usa,
    
//     method: 'GET',
//     dataType: 'JSON',
    
//     success: function(data) {
//       console.log(data)
    
//     },
//     error: function(err) {
//       console.log('error:' + err)
//     }
//     });



});