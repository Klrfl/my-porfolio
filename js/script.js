// sidebar
let sidebar = document.getElementById("sidebar");
let sidebarOpen = document.getElementById("sidebar-open");
let sidebarClose = document.getElementById("sidebar-close");
let sidebarLinks = document.querySelectorAll(".navlinks");

sidebarOpen.addEventListener('click', ()=>{
  sidebar.classList.toggle("active");
})

sidebarClose.addEventListener('click', ()=>{
  sidebar.classList.remove("active");
});

for(let i = 0; i < sidebarLinks.length; i++){
  sidebar.addEventListener('click', ()=>{
    sidebar.classList.remove("active");
  })
}