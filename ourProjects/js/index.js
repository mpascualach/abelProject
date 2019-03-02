let selectedProject;
let extendedProject;

function selectProject(id){
    if (selectedProject) $("#"+id).removeClass("selected");
    $("#"+id).addClass("selected");
    selectedProject = id.substring(4,id.length);
}