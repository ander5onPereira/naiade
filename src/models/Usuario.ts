import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity("usuario")
export default class Usuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  idade: number;

  @Column()
  peso: number;

  @Column()
  etnia: string;

  @Column()
  token: string;

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