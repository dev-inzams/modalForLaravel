window.addEventListener('click', function(event) {
    var customModal = document.getElementById('customModal');
    if (event.target.id === 'customModal') {
        customModal.style.display = 'none';
    }
});

 function openModal(){
    document.getElementById('customModal').style.display = 'block';
 }

 function closeModal(){
    document.getElementById('customModal').style.display = 'none';
 }