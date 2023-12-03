// For this example, there's no specific JavaScript needed.
// However, here's a placeholder for any future scripts you might want to add.

// Example JavaScript to toggle an FAQ answer
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.querySelector('h2').addEventListener('click', () => {
            const answer = item.querySelector('p');
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });
});
