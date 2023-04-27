const fields = document.querySelectorAll('[data-field]');
    const task = {
      roaster: '1군 멤버',
      player: '오재일',
      status: '',
    };

    for (let tag of fields) {
      const field = tag.dataset.field;
      tag.textContent = task[field];
    }

    const btns = document.querySelectorAll('.btn');
    for (let btn of btns) {
      const status = btn.dataset.status;
      btn.onclick = function () {
        fields[2].textContent = status;
        fields[2].dataset.status = status;
      };
    }