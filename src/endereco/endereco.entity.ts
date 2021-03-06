import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AlunoEntity } from '../aluno/aluno.entity';

@Entity('endereco')

export class EnderecoEntity{

    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column ('text') 
    rua : string;

    //Pode ser null 
    @Column ({type: 'text', nullable: true }) 
    numero : string;

    //Pode ser null 
    @Column ({type: 'text', nullable: true }) 
    complemento : string;

    @Column ('text') 
    bairro : string;
    
    //relacionamento 1 endereço pode pertencer a 1 ou varios alunos 
    @ManyToOne(type => AlunoEntity , aluno => aluno.enderecos)
    aluno : AlunoEntity ;

    @Column('uuid')
    alunoId: string;

     //Exemplo documentação 
    //@ManyToOne(type => Author, author => author.photos)
    //author: Author;

}