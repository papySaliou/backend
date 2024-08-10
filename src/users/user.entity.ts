import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar'})
  nom: string;

  @Column({ type: 'varchar'})
  prenom: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telephone: string;

  @Column({ type: 'varchar' })
  adresse: string;

  @Column()
  role: string;

  @Column({ type: 'boolean', default: true })
  status: boolean; // `true` pour Actif, `false` pour Inactif
}
