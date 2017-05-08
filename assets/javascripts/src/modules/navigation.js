/**
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */

(function module() {
  const container = document.getElementById('site-navigation');
  const button = container.getElementsByTagName('button')[0];
  const menu = container.getElementsByTagName('ul')[0];
  const links = menu.getElementsByTagName('a');
  const subMenus = menu.getElementsByTagName('ul');

  if (!container || typeof button === 'undefined') {
    return;
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    // jshint validthis:true
    let self = this;

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while (self.className.indexOf('nav-menu') === -1) {
      // On li elements toggle the class .focus.
      if (self.tagName.toLowerCase() === 'li') {
        if (self.className.indexOf('focus') !== -1) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }

  // Hide menu toggle button if menu is empty and return early.
  if (typeof menu === 'undefined') {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');
  if (menu.className.indexOf('nav-menu') === -1) {
    menu.className += ' nav-menu';
  }

  button.onclick = () => {
    if (container.className.indexOf('toggled') !== -1) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  };

  // Set menu items with submenus to aria-haspopup="true".
  for (let i = 0; i < subMenus.length; i += 1) {
    subMenus[i].parentNode.setAttribute('aria-haspopup', 'true');
  }

  // Each time a menu link is focused or blurred, toggle focus.
  for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }
}());
