import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Chamado } from '../model/chamado';
import { ChamadoService } from '../chamado.service';

@Component({
  selector: 'app-adiciona-chamado',
  templateUrl: './adiciona-chamado.component.html',
  styleUrls: ['./adiciona-chamado.component.scss']
})
export class AdicionaChamadoComponent implements OnInit {

  /*chamadoForm = new FormGroup ({
    descricaoChamado: new FormControl ('')
  });*/
  chamadoForm = this.fb.group({
    descricaoChamado: ['', Validators.required]
  });

  onSubmit (): void{
    //console.log (this.chamadoForm.value);
    const idFila = 
      +this.route.snapshot.paramMap.get('idFila');
    const descricao: string = 
      this.chamadoForm.get('descricaoChamado').value;
    let chamado: Chamado = {
      //id: this.chamadoService.nextId(),
      descricao: descricao,
      status: 'aberto',
      dataAbertura: Date.now().toString(),
      dataFechamento: null,
      descricaoFinalizacao: null,
      idFila: idFila
    };
    this.chamadoService.
      adicionaChamado(chamado).subscribe(
        () => this.location.back()
      );
  }

  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public location: Location,
    public chamadoService: ChamadoService
  ) { }

  ngOnInit() {
  }

}
