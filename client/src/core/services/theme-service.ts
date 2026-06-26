import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) this.setTheme(saved);
  }

  setTheme(theme: 'light' | 'dark') {
    this.theme.set(theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggle() {
    this.setTheme(this.theme() === 'light' ? 'dark' : 'light');
  }
}
