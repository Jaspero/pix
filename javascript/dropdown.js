export class Dropdown {
    constructor() {
      this.dropdown = document.querySelectorAll('.dropdown');
      this.run();
    }

    run() {
      this.dropdown.forEach(el => {

        const dropdownContent = el.querySelector('[class*="dropdown_content"]');

        el.addEventListener('click', (event) => {

          event.stopPropagation();

          this.dropdown.forEach(el => {
            el.classList.remove('active');
          });

          el.classList.add('active');

          dropdownContent.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdownContent.parentElement.classList.remove('active');
          });

        });

      });

      window.addEventListener('click', () => {
        this.dropdown.forEach(el => {
          el.classList.remove('active');
        });
      });
    }
}