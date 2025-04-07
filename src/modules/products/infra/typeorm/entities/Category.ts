import { v4 as uuidv4 } from "uuid";
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  PrimaryColumn, 
  UpdateDateColumn
} from 'typeorm'

@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
}

export { Category }