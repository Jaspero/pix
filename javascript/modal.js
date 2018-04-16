/*==================================================

  Modal

==================================================*/

window.onload = () => {

    const modal = document.querySelectorAll('[class*="modal"][id]');
    const modalContent = document.querySelectorAll('.modal_content');
    const modalOpen = document.querySelectorAll('[data-open-modal]');
    const modalClose = document.querySelectorAll('[data-close-modal]');

    modalOpen.forEach(el => {
        const modalEl = document.getElementById(el.getAttribute('data-open-modal'));
        el.addEventListener('click', () => {
            modalEl.classList.add('active');
            const modalHeaderEl = modalEl.querySelector('.modal_header').scrollHeight;
            const modalFooterEl = modalEl.querySelector('.modal_footer').scrollHeight;
            const modalBodyEl = modalEl.querySelector('.modal_body');
            modalBodyEl.style.maxHeight = ('calc(100vh - 4rem - ' + (modalHeaderEl + modalFooterEl) + 'px)');
        })
    });

    modalContent.forEach(el => {
        el.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });

    modal.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.remove('active');
        });
    });

    modalClose.forEach(el => {
        el.addEventListener('click', () => {
            modal.forEach(el => {
                el.classList.remove('active');
            });
        });
    });

};