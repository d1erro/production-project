import { createRoot } from 'react-dom/client';
import {Counter} from "./components/Counter";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Counter/>);