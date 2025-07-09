export const getProgress = (): string[] => {
  return JSON.parse(localStorage.getItem('unlockedThemes') || '[]');
};

export const unlockTheme = (themeName: string) => {
  const current = getProgress();
  if (!current.includes(themeName)) {
    localStorage.setItem('unlockedThemes', JSON.stringify([...current, themeName]));
  }
};
