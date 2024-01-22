import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { IconsComponent } from './components/icons/icons.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
     {
    path:'', 
    component:IndexComponent
     },
     {
        path:'contacto', 
        component:ContactoComponent
    },
    {
        path:'nosotros',
        component:NosotrosComponent
    },
    {
        path:'productos',
        component:ProductosComponent
    }
];
