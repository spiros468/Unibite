document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    const nameElement = document.getElementById('consumerName');
    const universityElement = document.getElementById('consumerUniversity');
    const pointsElement  = document.getElementById('userPoints')

    nameElement.textContent = currentUser.fullname;
    
    universityElement.textContent = currentUser.university.toUpperCase();   

    pointsElement.textContent = currentUser.points;

});