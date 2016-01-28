var movieApp = {

    init   : function(){
        $('#search-movie').on('keyup', function(){
            var value = $(this).val();
            if(value.length >= 3){
                movieApp.search(value);
            }else{
                movieApp.clear();
            }
        });

        $('.search-movie-remove').on('click', function(){
            movieApp.clear();
            $('#search-movie').val('');
        });
    },

    search : function(searchText){
        $.get('/search/'+searchText, function(data){
            $('.search-movie-remove').addClass('active');
            $('#result').addClass('active');
            $('#result').html(data);
        });
    },

    clear: function(){
        $('.search-movie-remove').removeClass('active');
        $('#result').removeClass('active');
        $('#result').html('');
    }
};

$(function(){
    movieApp.init();
});