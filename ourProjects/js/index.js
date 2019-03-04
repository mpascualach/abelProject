let oldSelectedProject;

function selectProject(id){
    let itemId = id.substring(4,id.length);
    $(".super-selected").removeClass("super-selected");
    $("#"+id).addClass("super-selected");
    oldSelectedProject = itemId;
}