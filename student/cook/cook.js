document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    const nameElement = document.getElementById('cookName');
    const universityElement = document.getElementById('cookUniversity');
    const pointElement = document.getElementById('cookPoints');
    
    nameElement.textContent = currentUser.fullname;
    
    universityElement.textContent = currentUser.university.toUpperCase();
   
    pointElement.textContent = currentUser.points;
});