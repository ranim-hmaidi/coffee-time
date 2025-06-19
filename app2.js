thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

    const form = document.getElementById('orderForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const coffee = form.coffee.value;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const quantity = form.quantity.value;

      alert(
        `Commande reçue:\n` +
        `Café: ${coffee}\n` +
        `Nom: ${name}\n` +
        `Email: ${email}\n` +
        `Quantité: ${quantity}`
      );

      form.reset();
    });