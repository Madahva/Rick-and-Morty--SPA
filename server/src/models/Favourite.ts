
import {
  Model,
  Column,
  DataType,
  Table,
  IsEmail,
  Unique,
  PrimaryKey,
} from "sequelize-typescript";

@Table({ timestamps: false })
export class Favourite extends Model<Favourite> {
  @IsEmail
  @PrimaryKey
  @Column
  user!: string;
  @PrimaryKey
  @Column
  id!: number;
  @Column
  name!: string;
  @Column
  status!: string;
  @Column
  species?: string;
  @Column
  type?: string;
  @Column
  gender!: string;
  @Column
  origin?: string;
  @Column
  location?: string;
  @Column
  image!: string;
  @Column(DataType.ARRAY(DataType.STRING))
  episode!: string[];
}
