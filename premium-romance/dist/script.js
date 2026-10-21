const dialog = document.querySelector('#interaction-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogBody = document.querySelector('#dialog-body');
const dialogEyebrow = document.querySelector('#dialog-eyebrow');
let lastTrigger;

const arrow = '<svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg>';
const closeDialog = () => dialog.close();

function openDialog(kind, trigger) {
  lastTrigger = trigger || document.activeElement;
  dialogEyebrow.textContent = 'PREMIUM ROMANCE / FICTIONAL DEMO';
  if (kind === 'eligibility') {
    dialogTitle.textContent = 'Please verify your usefulness.';
    dialogBody.innerHTML = `<p class="dialog-description">To our fictional service, your personality is an unsupported file type. Pick a pretend profile for our wallet-first screening. Don’t enter real financial information.</p>
      <form class="eligibility-form">
        <label for="pretend-budget">Imaginary monthly romance budget</label>
        <select id="pretend-budget" name="budget" required><option value="" disabled selected>Select a fictional budget</option><option value="connection">Good conversation & homemade pasta</option><option value="premium">₹50,000 & a recurring identity crisis</option><option value="unlimited">Unlimited. My accountant is crying.</option></select>
        <label for="pretend-priority">What are you looking for?</label>
        <select id="pretend-priority" name="priority" required><option value="" disabled selected>Select a fictional priority</option><option value="respect">Mutual respect & a real connection</option><option value="luxury">A lifestyle with someone in it</option><option value="curiosity">Honestly, just here for the satire</option></select>
        <button class="button button-lime" type="submit">Run questionable algorithm ${arrow}</button>
      </form>`;
    dialogBody.querySelector('form').addEventListener('submit', showEligibilityResult);
  } else if (kind === 'basic') {
    dialogTitle.textContent = 'Too healthy to monetise.';
    dialogBody.innerHTML = `<p class="dialog-description">Our imaginary board discontinued this plan for containing an alarming amount of basic decency and absolutely no opportunity to exploit it.</p><div class="result-card"><p class="mini-label">STILL AVAILABLE IN REAL LIFE</p><h3>Respect. Shared interests. Connection.</h3><p>Tragically bad for the entitlement industry. A remarkably good deal for actual human beings.</p></div><div class="dialog-actions"><button class="button button-lime" data-exit-dialog>Choose the healthy option ${arrow}</button></div>`;
  } else {
    dialogTitle.textContent = 'An ego of this size needs financing.';
    dialogBody.innerHTML = `<p class="dialog-description">Our fictional sales team would ask about your needs, but that isn’t how this relationship works.</p><div class="result-card"><p class="mini-label">ENTERPRISE / FICTIONAL SALES RESPONSE</p><h3>“Can you afford the audacity?”</h3><p>Unlimited demands. Entry-level empathy. A dedicated account manager to explain why your perfectly reasonable boundaries aren’t in the contract.</p></div><div class="dialog-actions"><button class="button button-outline" data-close-dialog>Cancel the procurement process</button></div>`;
  }
  bindDialogActions();
  if (!dialog.open) {
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
}

function bindDialogActions() {
  dialogBody.querySelectorAll('[data-close-dialog]').forEach(button => button.addEventListener('click', closeDialog));
  dialogBody.querySelectorAll('[data-exit-dialog]').forEach(button => button.addEventListener('click', () => {
    lastTrigger = document.querySelector('#exit-title');
    closeDialog();
    restoreSelfRespect();
    const exitPanel = document.querySelector('#exit-panel');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    exitPanel.scrollIntoView({ block: 'center', behavior: reducedMotion ? 'instant' : 'smooth' });
    document.querySelector('#exit-title').focus({ preventScroll: true });
  }));
  dialogBody.querySelectorAll('[data-retry]').forEach(button => button.addEventListener('click', () => {
    openDialog('eligibility', lastTrigger);
    dialogBody.querySelector('select').focus();
  }));
}

function showEligibilityResult(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const budget = form.elements.budget.value;
  const priority = form.elements.priority.value;
  let heading, explanation, code;
  if (priority === 'curiosity') {
    code = '200 / SATIRE SUCCESSFULLY DETECTED';
    heading = 'Audacity detected. Subscription avoided.';
    explanation = 'You spotted a luxury invoice wearing a dating profile. Excellent. Our fictional entitlement engine has no defence against a functioning sense of humour.';
  } else if (priority === 'respect' || budget === 'connection') {
    code = '403 / TOO EMOTIONALLY QUALIFIED';
    heading = 'Excellent values. Terrible customer.';
    explanation = 'Mutual respect? Emotional depth? You’ve clearly mistaken our imaginary invoice generator for a relationship. Keep your standards. They’re terrible for our margins.';
  } else {
    code = '402 / FICTIONAL PRE-APPROVAL';
    heading = 'Your wallet passed. Your heart wasn’t consulted.';
    explanation = 'Congratulations. Our fictional system has classified you as a recurring revenue stream with legs. Before accepting this honour, consider being treated like a person.';
  }
  dialogEyebrow.textContent = code;
  dialogTitle.textContent = 'Verification complete.';
  dialogBody.innerHTML = `<div class="result-card" role="status" tabindex="-1"><p class="mini-label">DEMO RESULT / NO REAL EVALUATION</p><h3>${heading}</h3><p>${explanation}</p></div><div class="dialog-actions"><button class="button button-outline" data-retry>Try another pretend profile</button><button class="button button-lime" data-exit-dialog>Choose self-respect ${arrow}</button></div>`;
  bindDialogActions();
  dialogBody.querySelector('.result-card').focus();
}

document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => openDialog(button.dataset.open, button)));
document.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog();
  }
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (lastTrigger?.isConnected) lastTrigger.focus({ preventScroll: true });
});

document.querySelectorAll('[data-billing]').forEach(button => button.addEventListener('click', () => {
  const yearly = button.dataset.billing === 'yearly';
  document.querySelectorAll('[data-billing]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelector('#premium-amount').textContent = yearly ? '₹39,999' : '₹49,999';
  document.querySelector('#billing-note').textContent = yearly ? '₹4,79,988 billed yearly. Same nonsense, longer contract.' : 'Billed monthly. Belittled daily. Fictionally, of course.';
}));

function restoreSelfRespect() {
  const panel = document.querySelector('#exit-panel');
  panel.classList.add('is-free');
  document.querySelector('#exit-code').innerHTML = '200<span>_</span>';
  document.querySelector('#exit-eyebrow').textContent = 'SUCCESS 200: SELF-RESPECT RESTORED';
  document.querySelector('#exit-title').textContent = 'Session terminated. Standards restored.';
  document.querySelector('#exit-details').innerHTML = '<div><dt>STATUS</dt><dd>Emotionally solvent.</dd></div><div><dt>NEXT STEP</dt><dd>Find a connection. Keep your boundaries.</dd></div>';
  document.querySelector('#terminal-status').textContent = 'You owe this platform nothing. Literally.';
  const button = document.querySelector('#exit-button');
  button.innerHTML = 'Self-respect restored ✓';
  button.disabled = true;
  document.querySelector('#exit-result').textContent = 'You’ve exited the fictional relationship. No payments, accounts or real relationships were changed.';
}
document.querySelector('#exit-button').addEventListener('click', restoreSelfRespect);

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu({ restoreFocus = false } = {}) {
  const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
  if (restoreFocus && wasOpen) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a, button').forEach(item => item.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu({ restoreFocus: true }); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => { element.classList.add('reveal-ready'); observer.observe(element); });
}
