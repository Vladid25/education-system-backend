import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("varchar", {length: 50, unique: true})
    name: String;

    @Column("varchar", {length: 50})
    teacher: String;

    @Column("integer")
    duration: number;

    @Column("date")
    startDate: Date;
}
