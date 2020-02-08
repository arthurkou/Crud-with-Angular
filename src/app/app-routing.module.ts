import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {AdicionaFilaComponent} 
    from './adiciona-fila/adiciona-fila.component'
import { FilasComponent } 
  from './filas/filas.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { AdicionaChamadoComponent } from './adiciona-chamado/adiciona-chamado.component';
import { DetalhesChamadoComponent } from './detalhes-chamado/detalhes-chamado.component';


const routes: Routes = [
  {
    path: 'adicionaFila', 
    component: AdicionaFilaComponent
  },
  {
    path: 'filas',
    component: FilasComponent
  },
  {
    path: '',
    redirectTo: '/filas',
    pathMatch: 'full'
  },
  {
    path: 'chamados/:idFila',
    component: ChamadosComponent
  },
  {
    path: 'chamados/:idFila/adicionaChamado',
    component: AdicionaChamadoComponent
  },
  {
    path: 'chamados/detalhes/:idChamado',
    component: DetalhesChamadoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
