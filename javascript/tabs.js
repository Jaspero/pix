/*==================================================

  Tabs

==================================================*/

window.onload = () => {
    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach(el => {
        let nav = el.querySelector('nav');
        let a = nav.querySelectorAll('a');

        a[0].classList.add('active');
        document.getElementById(a[0].getAttribute('href').substring(1)).classList.add('active'); 

        a.forEach(el => {
            el.addEventListener('click', (event) => {
                event.preventDefault();

                a.forEach(el => {
                    el.classList.remove('active');
                    document.getElementById(el.getAttribute('href').substring(1)).classList.remove('active');
                });

                el.classList.add('active');  
                document.getElementById(el.getAttribute('href').substring(1)).classList.add('active'); 

            });
        });
    });
};