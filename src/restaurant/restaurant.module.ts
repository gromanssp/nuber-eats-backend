import { Module } from '@nestjs/common';
import { RestaurantResolve } from './restaurant.resolve';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantResolve, RestaurantService],
})
export class RestaurantModule {}
