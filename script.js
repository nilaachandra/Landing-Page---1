document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme');
    const darkElements = document.querySelectorAll('.dark');

    // const activePage = window.location.pathname;
    // darkElements.forEach(link => {
    //   if(link.href.includes(`${activePage}`)){
    //     link.classList.add('active');
    //     console.log(link);
    //   }
    // })


    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('darkmode');

        // Toggle the moon and sun icons
        if (document.body.classList.contains('darkmode')) {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
        } else {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        }

        darkElements.forEach((d) => {
            d.classList.toggle('darkmode');
        });
    });
});
