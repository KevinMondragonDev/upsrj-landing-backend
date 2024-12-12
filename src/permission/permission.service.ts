import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './entities/permissions.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class PermissionService {
  private readonly logger = new Logger('PermissionService')
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>
  ){}

  async create(createPermissionDto: CreatePermissionDto, user: User) {
    const {...permissionDetails} = createPermissionDto;
    try {
      const newPermission = this.permissionRepository.create({
        ...permissionDetails,
        user,
      });
      await this.permissionRepository.save( newPermission );
      return { ...newPermission };
        
    } catch (error) {
        // Handle errors
    }
  }
  findAll() {
    return `This action returns all permission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }

  private handleDBExceptions( error: any ) {

    if ( error.code === '23505' )
      throw new BadRequestException(error.detail);
    
    this.logger.error(error)
    // console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server logs');

  }
}
