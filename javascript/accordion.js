export class Accordion {
  constructor() {
    this.activeClassName = 'active';
    this.accordionClassName = 'accordion';
    this.summaryClassName = 'accordion_summary';
    this.accordionElements = document.querySelectorAll('.' + this.accordionClassName);
    this.run();
  }

  open(accordionEl) {
    const height = accordionEl.scrollHeight;
    accordionEl.style.maxHeight = height + 'px';
    let parent = accordionEl.parentElement;

    while (parent) {
      if (parent.classList.contains(this.accordionClassName)) {
        const currentMaxHeight = parseInt(parent.style.maxHeight.replace('px', ''));
        parent.style.maxHeight = (currentMaxHeight + height) + 'px';
      }
      parent = parent.parentElement;
    }
    accordionEl.classList.add(this.activeClassName);
  }

  close(accordionEl, summeryEl) {
    const height = accordionEl.scrollHeight - summeryEl.scrollHeight;
    accordionEl.style.maxHeight = summeryEl.scrollHeight + 'px';
    let parent = accordionEl.parentElement;
    while (parent) {

      if (parent.classList.contains(this.accordionClassName)) {
        const currentMaxHeight = parseInt(parent.style.maxHeight.replace('px', ''));
        parent.style.maxHeight = (currentMaxHeight - height) + 'px';
      }
      parent = parent.parentElement;
    }
    accordionEl.classList.remove(this.activeClassName);
  }

  run() {
    this.accordionElements.forEach(accordionEl => {
      const summeryEl = accordionEl.querySelector('.' + this.summaryClassName);

      let active = accordionEl.classList.contains(this.activeClassName);

      if (active) {
        this.open(accordionEl);
      } else {
        this.close(accordionEl, summeryEl);
      }
      summeryEl.addEventListener('click', () => {
        if (active) {
          this.close(accordionEl, summeryEl);
        } else {
          this.open(accordionEl);
        }
        active = !active;
      })
    });
  }
}