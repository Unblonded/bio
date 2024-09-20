function toggleDescription(projectId) {
    const projectDesc = document.getElementById(projectId);
    if (projectDesc.style.display === "none") {
        projectDesc.style.display = "block";
    } else {
        projectDesc.style.display = "none";
    }
}
