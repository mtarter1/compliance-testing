const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('[data-tabs]').forEach((tabSet) => {
  const buttons = [...tabSet.querySelectorAll('[role="tab"]')];
  const panels = [...tabSet.querySelectorAll('[role="tabpanel"]')];
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.setAttribute('aria-selected', 'false'));
      panels.forEach((panel) => { panel.hidden = true; });
      button.setAttribute('aria-selected', 'true');
      const panel = tabSet.querySelector(`#${button.getAttribute('aria-controls')}`);
      if (panel) panel.hidden = false;
    });
  });
});

const successBanner = document.querySelector('.success-banner');
if (successBanner && new URLSearchParams(window.location.search).get('submitted') === 'true') {
  successBanner.classList.add('visible');
}
