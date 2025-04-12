import { createRoot } from 'react-dom/client'
import { Router } from './app/providers/router'

createRoot(document.getElementById('root')!).render(
    <Router />
)
