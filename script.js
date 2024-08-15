document.getElementById('confirm-button').addEventListener('click', function() {
  const button = this;
  const zipFilePath = 'https://github.com/RepublicofAuech/recoveraue/raw/main/solveme.zip'; // Replace with your actual ZIP file path

  if (!button.classList.contains('confirmation')) {
    button.textContent = '縺溘☆縺代※縺上□縺輔';
    button.classList.add('confirmation');

    // Create a handler that will download the ZIP file
    const secondClickHandler = function() {
      const link = document.createElement('a');
      link.href = zipFilePath;
      link.download = 'solveme.zip'; // You can specify the file name for the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      button.textContent = 'Recover?';
      button.classList.remove('confirmation');
      button.removeEventListener('click', secondClickHandler);
    };

    // Attach the handler to wait for the second click
    button.addEventListener('click', secondClickHandler, { once: true });

    // Reset if not clicked within 5 seconds
    setTimeout(() => {
      if (button.classList.contains('confirmation')) {
        button.textContent = 'Recover?';
        button.classList.remove('confirmation');
        button.removeEventListener('click', secondClickHandler); // Remove the second click handler
      }
    }, 5000);

  }
});
