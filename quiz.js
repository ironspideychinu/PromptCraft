// quiz.js - Client-side only role determination for The Binary Serpents
// No backend, no persistence. Pure illusion of initiation.

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submitBtn');
  const form = document.getElementById('initiationQuiz');

  function getSelectedValue(name) {
    const selected = form.querySelector(`input[name="${name}"]:checked`);
    return selected ? selected.value : null;
  }

  function calculateRole() {
    const scores = { netrunner: 0, enforcer: 0, fixer: 0 };
    const answers = [getSelectedValue('q1'), getSelectedValue('q2'), getSelectedValue('q3')];

    // Increment tally for each chosen role
    answers.forEach(val => { if (val && scores.hasOwnProperty(val)) scores[val]++; });

    // Determine highest score (tie-break defaults to fixer)
    let winner = 'fixer';
    let max = -1;
    for (const role in scores) {
      if (scores[role] > max) {
        max = scores[role];
        winner = role;
      }
    }
    return winner;
  }

  function redirectToRole(role) {
    switch (role) {
      case 'netrunner': window.location.href = 'role-netrunner.html'; break;
      case 'enforcer': window.location.href = 'role-enforcer.html'; break;
      case 'fixer':
      default: window.location.href = 'role-fixer.html'; break;
    }
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Basic validation: require at least one answer to proceed (optional enhancement)
    const allAnswered = ['q1','q2','q3'].every(q => getSelectedValue(q));
    if (!allAnswered) {
      // Minimal UX feedback (non-invasive)
      submitBtn.textContent = 'ANSWER ALL QUESTIONS';
      setTimeout(() => submitBtn.textContent = 'SUBMIT APPLICATION', 1600);
      return;
    }
    const role = calculateRole();
    redirectToRole(role);
  });
});