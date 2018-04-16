/*==================================================

  Dropdown

==================================================*/

window.onload = () => {

    const dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(el => {

        const dropdownContent = el.querySelector('[class*="dropdown_content"]');
        console.log(dropdownContent);

        el.addEventListener('click', (event) => {

            event.stopPropagation();

            dropdown.forEach(el => {
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
        dropdown.forEach(el => {
            el.classList.remove('active');
        });
    });

};