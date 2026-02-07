const likeButtons = document.querySelectorAll<HTMLButtonElement>(
  '[data-like-button]',
);
const saveButtons = document.querySelectorAll<HTMLButtonElement>(
  '[data-save-button]',
);
const followButtons = document.querySelectorAll<HTMLButtonElement>(
  '[data-follow]',
);

function toggleButtonState(
  button: HTMLButtonElement,
  activeText: string,
  inactiveText: string,
  activeClass: string,
) {
  const isActive = button.dataset.active === 'true';
  const nextState = !isActive;
  button.dataset.active = String(nextState);
  button.textContent = nextState ? activeText : inactiveText;
  button.classList.toggle(activeClass, nextState);
}

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleButtonState(button, '♥', '♡', 'text-pink-400');
  });
});

saveButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleButtonState(button, '📌', '🔖', 'text-yellow-300');
  });
});

followButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isFollowing = button.dataset.active === 'true';
    button.dataset.active = String(!isFollowing);
    button.textContent = isFollowing ? 'Follow' : 'Following';
    button.classList.toggle('text-slate-200', !isFollowing);
    button.classList.toggle('text-pink-400', isFollowing);
  });
});
