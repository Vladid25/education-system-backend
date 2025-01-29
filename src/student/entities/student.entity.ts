import { Enrollment } from "src/entrollment/entities/entrollment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 30 })
    firstName: string;

    @Column({ type: 'varchar', length: 30 })
    lastName: string;
  
    @Column({ type: 'varchar', length: 40 })
    email: string;
        
    @Column({ type: 'varchar',length: 20 })
    password: string;
    
    @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
    enrollments: Enrollment[];

}
