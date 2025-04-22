document.querySelectorAll('.tab-header a').forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.tab-header a').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        const content = document.querySelector(this.getAttribute('href'));
        content.classList.add('active');
    });
});