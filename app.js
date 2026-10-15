document.querySelector('button.print-control')?.addEventListener('click',()=>window.print());
// Keep the same section selected when changing between Japanese and English.
document.querySelectorAll('.language-switch a').forEach(link=>{
 const target=new URL(link.getAttribute('href'),location.href);
 target.hash=location.hash;
 link.href=target.href;
});
window.addEventListener('hashchange',()=>{
 document.querySelectorAll('.language-switch a').forEach(link=>{
  const target=new URL(link.href);target.hash=location.hash;link.href=target.href;
 });
});
