import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './components/App/App.tsx';
import 'modern-normalize';
import './global.css';

// Помилка: відсутня ініціалізація queryClient через new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={{}}>
            <App />
        </QueryClientProvider>
    </StrictMode>,
);
