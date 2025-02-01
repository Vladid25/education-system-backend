import { Course } from "src/course/entities/course.entity";
import { Enrollment } from "src/entrollment/entities/entrollment.entity";
import { Grade } from "src/grade/entities/grade.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    TEACHER = "teacher",
    STUDENT = "student",
}
@Entity()
export class User {
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

    @Column({type: "enum", enum: UserRole, default: UserRole.STUDENT})
    role: UserRole;

    @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
    enrollments: Enrollment[];

    @OneToMany(() => Course, (course) => course.teacher)
    courses: Course[];
    
    @OneToMany(() => Grade, (grade) => grade.student)
    grades: Grade[];

}
