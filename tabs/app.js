const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', e=>{
  const id = e.target.dataset.id;
  if (id) {
    // sacar active de bts
    btns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    // sacar active de articles
    articles.forEach(article => article.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
})