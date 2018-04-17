export class Modal {
 constructor() {
   this.modal = document.querySelectorAll('[class*="modal"][id]');
   this.modalContent = document.querySelectorAll('.modal-content');
   this.modalOpen = document.querySelectorAll('[data-open-modal]');
   this.modalClose = document.querySelectorAll('[data-close-modal]');

   this.run();
 }

 run() {
   this.modalOpen.forEach(el => {
     const modalEl = document.getElementById(el.getAttribute('data-open-modal'));
     el.addEventListener('click', () => {
       modalEl.classList.add('active');
         document.documentElement.classList.add('modal-opened');
       const modalHeaderEl = modalEl.querySelector('.modal-header').scrollHeight;
       const modalFooterEl = modalEl.querySelector('.modal-footer').scrollHeight;
       const modalBodyEl = modalEl.querySelector('.modal-body');
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
       document.documentElement.classList.remove('modal-opened');
     });
   });

   this.modalClose.forEach(el => {
     el.addEventListener('click', () => {
       this.modal.forEach(el => {
         el.classList.remove('active');
         document.documentElement.classList.remove('modal-opened');
       });
     });
   });
 }
}