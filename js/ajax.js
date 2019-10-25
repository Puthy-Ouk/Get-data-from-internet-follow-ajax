$(document).ready(function(){
    url = "https://pixabay.com/api/?key=14010091-6fc887d8f179a5dc0fe818556&q=green+vegetable&image_type=photo&pretty=true";
    var result ="";
    $.getJSON(url,
    function(data){
        data.hits.forEach(element => {
            result +=`

            <div class="col-3"></div>

            <div class="col-6 mt-5 shadow-lg" >

                <div class="card-body">
                    <img src="${element.largeImageURL}" class="img-fluid"/>
                </div>

                <div class="card-footer">

                    <i class="material-icons text-danger ">favorite</i>
                 
                    <img src="${element.userImageURL}" class="rounded-circle" width="40px" />
                    &nbsp;
                    ${element.tags}

                    <button type="button" class="btn btn-warning float-right"   data-toggle="modal" data-target="#myModal${element.id}">
                        View
                    </button>

                </div>
            </div>

            <div class="col-3"></div>
            
            
            <div class="modal fade" id="myModal${element.id}">
            <div class="modal-dialog">
                 <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header  text-uppercase text-info  "> &nbsp;
                <img src="${element.userImageURL}" class="rounded-circle"  width="40px"/>
                &nbsp;
                ${element.user }

                <button type="button" class="close" data-dismiss="modal">&times; </button>
                
                </div>
        
            <!-- Modal body -->
            <div class="modal-body">
       
                <img src="${element.webformatURL}" class="img-fluid"/>
                <hr>

                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">  
                        <i class="material-icons text-success float-left">thumb_up </i>
                        &nbsp;
                        ${element.likes}
                    </li>

                    <li class="list-group-item">
                        <i class="material-icons text-danger float-left">favorite</i>
                        &nbsp;
                        ${element.favorites}
                    </li>

                    <li class="list-group-item">
                        <i class="material-icons text-primary float-left">visibility</i>
                        &nbsp;
                        ${element.views}
                    </li>

                    <li class="list-group-item">
                        <i class="material-icons text-warning float-left">message</i>
                        &nbsp;
                        ${element.comments}
                    </li>

                </ul>
            </div>

      </div>
    </div>
    </div>
    
        `;
        });
        $('#card').append(result);
    }
    );
})