let oldSelectedProject = 1;

function selectProject(id){
    let itemId = id.substring(4,id.length);
    if (oldSelectedProject - itemId == -1 || oldSelectedProject - itemId == 1){
        if (oldSelectedProject == 1){
            $(".momochi").css("width", "40%");
            $(".flymmics").css("width", "60%");
        }
        if (oldSelectedProject == 2){
            $(".momochi").css("width", "60%");
            $(".flymmics").css("width", "40%");
        }
        if (oldSelectedProject == 3){
            $(".whoops").css("width", "40%");
            $(".dead-pet").css("width", "60%");
        }
        if (oldSelectedProject == 4){
            $(".whoops").css("width", "60%");
            $(".dead-pet").css("width", "40%");
        }
    }
    $(".super-selected").removeClass("super-selected");
    $("#"+id).addClass("super-selected");
    oldSelectedProject = itemId;
    console.log(oldSelectedProject);
}