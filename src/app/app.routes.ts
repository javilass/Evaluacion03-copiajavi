import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Contacto } from './pages/contacto/contacto';
import { About } from './pages/about/about'

export const routes: Routes = [
{path: '', component: Inicio},
{path: 'contacto', component: Contacto},
{path: 'about', component: About}
];