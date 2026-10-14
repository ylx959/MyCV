import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  App  from './App.tsx'
import { cv } from './cv/data.ts'
import './style.css'

const root = document.getElementById('root')
if (!root) throw new Error('#root not found in index.html')

/** Flips `<html class="dark">` and remembers the choice (index.html restores it before paint). */
function toggleTheme() {
  const dark = document.documentElement.classList.toggle('dark')
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {}
}

createRoot(root).render(
  <StrictMode>
    <App cv={cv} onToggleTheme={toggleTheme} />
  </StrictMode>,
)
