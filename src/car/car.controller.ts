import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  async getCars() {
    return await this.carService.getCars();
  }

  @Post()
  async createCar(@Body() car: CarDto) {
    return await this.carService.createCar(car);
  }

  @Get(':id')
  async getCarById(@Param('id') id: number) {
    return await this.carService.getCarById(id);
  }

  @Delete(':id')
  async deleteCarById(@Param('id') id: number) {
    return await this.carService.deleteCarById(id);
  }

  @Put(':id')
  async updateCar(@Param('id') id: number, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;

    return await this.carService.updateCarById(id, propertyName, propertyValue);
  }
}
