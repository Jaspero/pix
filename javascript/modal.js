export class Modal {
 constructor() {
   this.modal = document.querySelectorAll('[class*="modal"][id]');
   this.modalContent = document.querySelectorAll('.modal_content');
   this.modalOpen = document.querySelectorAll('[data-open-modal]');
   this.modalClose = document.querySelectorAll('[data-close-modal]');

   this.run();
 }

 run() {
   this.modalOpen.forEach(el => {
     const modalEl = document.getElementById(el.getAttribute('data-open-modal'));
     el.addEventListener('click', () => {
       modalEl.classList.add('active');
       const modalHeaderEl = modalEl.querySelector('.modal_header').scrollHeight;
       const modalFooterEl = modalEl.querySelector('.modal_footer').scrollHeight;
       const modalBodyEl = modalEl.querySelector('.modal_body');
       modalBodyEl.style.maxHeight = ('calc(100vh - 4rem - ' + (modalHeaderEl + modalFooterEl) + 'px)');
     })
   });

   this.modalContent.forEach(el => {
     el.addEventListener('click', (event) => {
       event.stopPropagation();
     });
   });

   this.modal.forEach(el => {
     el.addEventListener('click', () => {
       el.classList.remove('active');
     });
   });

   this.modalClose.forEach(el => {
     el.addEventListener('click', () => {
       this.modal.forEach(el => {
         el.classList.remove('active');
       });
     });
   });
 }
}