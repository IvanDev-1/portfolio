document.querySelectorAll('.circle').forEach(circle => {
    let percentage = circle.getAttribute('data-percentage');
    let offset = 283 - (283 * percentage) / 100;
    circle.querySelector('.progress').style.strokeDashoffset = offset;
});

document.addEventListener('DOMContentLoaded', () => {
    const listHeaders = document.querySelectorAll('.list-header');

    listHeaders.forEach(button => {
        const listItem = button.parentElement;
        const listContent = button.nextElementSibling;

        if (!listItem.classList.contains('active')) {
            listContent.style.maxHeight = '0';
            listContent.style.padding = '0 20px';
            listContent.style.opacity = '0';  // Ensure content is completely hidden
        }

        button.addEventListener('click', () => {
            listItem.classList.toggle('active');

            if (listItem.classList.contains('active')) {
                listContent.style.maxHeight = listContent.scrollHeight + (20 * 2) + "px";  // Added 40px because scrollHeight doesn't include padding
                listContent.style.padding = "20px";
                listContent.style.opacity = '1';  // Make content visible
            } else {
                listContent.style.maxHeight = '0';
                listContent.style.padding = '0 20px';
                listContent.style.opacity = '0';  // Hide content
            }
        });
    });
});

const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('mobile-nav');
const menuClose = document.getElementById('menu-close');

menuIcon.addEventListener('click', () => {
    menu.classList.add('show');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('show');
});



