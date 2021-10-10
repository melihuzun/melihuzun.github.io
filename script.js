const rootDom=document.querySelector("#root");
const homeDom=document.querySelector("#home-page")
async function getData(page) {
  const response = await fetch(`./${page}.json`);
  return await response.json();
}
async function renderContent(page) {
  let data = await getData(page);
  let list = "";
  data.forEach((d) => {
    let listItem = `
    <div class="row">
    <div class="card">
        <div class="card-body">
          <h1 class="card-title">${d.title}</h1>
          <p class="card-text">${d.desc}</p>
          <footer class="blockquote-footer">${d.tarih}</footer>
        </div>
      </div>
    </div>`;
      
    list += listItem;
  });
  rootDom.innerHTML = list;
}

document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click',e=>{
  if(item.id!=="home"){ 
    homeDom.classList.add("delete")
    rootDom.classList.remove("delete")
    renderContent(item.id)

  }else{
    homeDom.classList.remove("delete")
    rootDom.classList.add("delete")
  }
  })
})