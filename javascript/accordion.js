/*==================================================

  Accordion

==================================================*/

window.onload = () => {

    const activeClassName = 'active';
    const accordionClassName = 'accordion';
    const summaryClassName = 'accordion_summary';
    const accordionElements = document.querySelectorAll('.' + accordionClassName);

    function open(accordionEl) {
        const height = accordionEl.scrollHeight;
        accordionEl.style.maxHeight = height + 'px';
        let parent = accordionEl.parentElement;

        while (parent) {
            if (parent.classList.contains(accordionClassName)) {
                const currentMaxHeight = parseInt(parent.style.maxHeight.replace('px', ''));
                parent.style.maxHeight = (currentMaxHeight + height) + 'px';
            }
            parent = parent.parentElement;
        }
        accordionEl.classList.add(activeClassName);
    }

    function close(accordionEl, summeryEl) {
        const height = accordionEl.scrollHeight - summeryEl.scrollHeight;
        accordionEl.style.maxHeight = summeryEl.scrollHeight + 'px';
        let parent = accordionEl.parentElement;
        while (parent) {

            if (parent.classList.contains(accordionClassName)) {
                const currentMaxHeight = parseInt(parent.style.maxHeight.replace('px', ''));
                parent.style.maxHeight = (currentMaxHeight - height) + 'px';
            }
            parent = parent.parentElement;
        }
        accordionEl.classList.remove(activeClassName);
    }

    accordionElements.forEach(accordionEl => {
        const summeryEl = accordionEl.querySelector('.' + summaryClassName);
        let active = accordionEl.classList.contains(activeClassName);
        if (active) {
            open(accordionEl);
        } else {
            close(accordionEl, summeryEl);
        }
        summeryEl.addEventListener('click', () => {
            if (active) {
                close(accordionEl, summeryEl);
            } else {
                open(accordionEl);
            }
            active = !active;
        })
    })
};