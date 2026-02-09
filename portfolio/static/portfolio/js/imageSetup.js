function openFullImage(src) {
    document.getElementById('fullImage').src = src;
    document.getElementById('fullImageOverlay').classList.remove('hidden');
    // Disable scrolling and interaction
    document.body.style.overflow = 'hidden';
}

function closeFullImage() {
    document.getElementById('fullImageOverlay').classList.add('hidden');
    // Re-enable scrolling and interaction
    document.body.style.overflow = '';
}

function openImageModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.src = src;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeImageModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeImageModal();
      }
    });
  });