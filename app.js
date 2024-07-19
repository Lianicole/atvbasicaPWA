document.addEventListener('DOMContentLoaded', function() {
    const infoForm = document.getElementById('infoForm');
    const infoInput = document.getElementById('infoInput');
    const infoList = document.getElementById('infoList');

    // Carregar informações do localStorage
    const infos = JSON.parse(localStorage.getItem('infos')) || [];

    // Função para salvar informações no localStorage
    function saveInfos() {
        localStorage.setItem('infos', JSON.stringify(infos));
    }

    // Função para exibir informações na lista
    function renderInfos() {
        infoList.innerHTML = '';
        infos.forEach((info, index) => {
            const li = document.createElement('li');
            li.textContent = info;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', () => {
                infos.splice(index, 1);
                saveInfos();
                renderInfos();
            });
            li.appendChild(deleteButton);
            infoList.appendChild(li);
        });
    }

    // Adicionar nova informação
    infoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newInfo = infoInput.value.trim();
        if (newInfo) {
            infos.push(newInfo);
            saveInfos();
            renderInfos();
            infoInput.value = '';
        }
    });

    renderInfos();
});
