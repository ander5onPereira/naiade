import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity("enderecos")
export default class Usuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  endereco: string;

  @Column()
  numero: number;

  @Column()
  complemento: string;

  @Column()
  cep: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  id_usuario: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @BeforeInsert()
  hasCreatedAt() {
    this.createdAt = new Date();
  }

  @BeforeInsert()
  @BeforeUpdate()
  hasUpdatedAt() {
    this.updatedAt = new Date();
  }

}