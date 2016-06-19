
$('#submit').click( function(e){
    e.preventDefault();
    var keyword  = $("#Keyword").val();
    console.log(keyword);
    var resturl = "http://www.omdbapi.com/?s="+keyword+"&y=&plot=short&r=json";
     $.ajax({
      url: resturl,
        dataType: 'json',        
        success: function(data){
            var search = data.Search; 
            var thehtml = "";
            var total = data.totalResults;
            var pages=0;
            if(data.Response!="False")
            {
                for (i = 0; i < search.length; i++)
                {
                var title = search[i].Title;
                movieinfo(title);
                }
             }   
            else
              $("#imdbcontents").html("<div class='adjwidth'><h2>No Movie With Such Title Found</h2></div>");
        
        }
    });
    });

   function movieinfo(title) {
           title=title.replace(/ /g,"%20");
           window.x="";
           var resturl = "http://www.omdbapi.com/?t="+title+"&y=&plot=short&r=json";
           $.ajax({
           url: resturl,
           dataType: 'json',        
           success: function(data){
                     
                            
                            var title = data.Title;
                            var year = data.Year;
                            var genre = data.Genre;
                            var poster=data.Poster;
                            if(poster=="N/A")
                                poster="img/download.jpg";
                            var cast = data.Actors;
                            var plot = data.Plot;
            
                            x = x+"<a><div id=\"listings"+title+"\" style='width: 80%;display:flex;margin-top:30px;'><img src=\""+poster+"\" ><div style='margin-left:30px'><h2 id="+title+">"+title+"("+year+")"+"</h2><div class='padandleft'><b>CAST : </b>"+cast+"</div><div class='padandleft'><b>GENRE :</b> "+genre+"</div><div class='padandleft'><b>PLOT : </b>"+plot+"</div></div></div></a>";
                            $("#imdbcontents").html(x);

        }
});   
        
      
       }