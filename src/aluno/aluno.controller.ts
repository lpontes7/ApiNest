import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoData } from './aluno.data';

@Controller('aluno')
export class AlunoController {
    constructor(private alunoService : AlunoService) {}

    //cadastrar aluno
    @Post()
    createAluno(@Body() data: AlunoData, cpf: AlunoData["cpf"]){
        return this.alunoService.createAluno(data, cpf)
    }

    //atualizar dados dos aluno
    @Put(':id')
    updateAluno(@Param('id') id: string, @Body() data : Partial<AlunoData>){
        return this.alunoService.updateAluno(id, data)
    }
    
    //mostrar dados especifico do aluno
    @Get(':id')
    showOneAluno(@Param('id') id: string){
        return this.alunoService.showOneAluno(id);
    }
    
    //mostrar dados de todos alunos
    @Get()
    showAllAlunos(){
        return this.alunoService.showAllAlunos();
    }
    
    //Alunos A cima da media 
    //coloquei a url assim pq estava dando erro com o a url de pegar um unico aluno 
    @Get('aluno/media')
    showAlunoMedia(){
        return this.alunoService.showAlunoMedia();
    }

    
    @Get(':nota/criterio/:criterio')
    showAlunoCriterio(){
        return this.alunoService.showAlunoCriterio();
    }    

    //Apagar aluno 
    //Acabei fazendo o delete porque tive que apagar todos os alunos que ja tinha sido cadastrados 
    @Delete(':id')
    deleteAluno(@Param('id') id: string){
        return this.alunoService.deleteAluno(id);
    }

}
