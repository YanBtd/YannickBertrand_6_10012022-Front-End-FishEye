'use strict';

export default class Modal {
    manageModal(data) {
        let modalBtn = document.getElementById("btn-contact");
        let closeBtn = document.getElementsByClassName('close-form-icon');

        if (modalBtn) {
            modalBtn.addEventListener('click', this.launchModal);
            this.displayPhName(data);
        }
        if (closeBtn) {
            closeBtn[0].addEventListener('click', this.closeModal);
        }
    }
    // Ouverture modale
    launchModal() {
        const modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'flex';
    }
    // Fermeture modale
    closeModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'none';
    }
    // Affichage nom du photographe dans formulaire
    displayPhName(data) {
        let id = window.location.search.split('id=')[1];
        let photographers = !id ? data : data.filter(photographer => photographer.id == id);
        let phName = document.getElementById('ph-form-name');
        let phNameTemplate = `${photographers[0].name}`
        phName.innerHTML = phNameTemplate;
    }
};