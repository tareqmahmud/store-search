import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { APP_PIPE } from '@nestjs/core';
import { ShopsModule } from './shops/shops.module';
import { Shop } from './shops/entities/shop.entity';
import { TagsModule } from './tags/tags.module';
import { Tag } from './tags/entities/tag.entity';
import { AlgoliaModule } from 'nestjs-algoliasearch';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { Cloudinary } from './cloudinary';

@Module({
  imports: [
    // built in and third party module
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      // load: [dbConfiguration, mailerConfig],
    }),

    TypeOrmModule.forRootAsync({
      // imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (dbConfig: ConfigService) => ({
        type: 'postgres',
        host: dbConfig.get<string>('DB_HOST'),
        port: dbConfig.get<number>('DB_PORT'),
        username: dbConfig.get<string>('DB_USER'),
        password: dbConfig.get<string>('DB_PASSWORD'),
        database: dbConfig.get<string>('DB_DATABASE'),
        entities: [User, Shop, Tag],
        synchronize: dbConfig.get<boolean>('DB_SYNCHRONIZE'),
      }),
    }),

    AlgoliaModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (algoliaConfig: ConfigService) => ({
        applicationId: algoliaConfig.get<string>('ALGOLIA_APPLICATION_ID'),
        apiKey: algoliaConfig.get<string>('ALGOLIA_ADMIN_API_KEY'),
      }),
    }),

    MailerModule.forRootAsync({
      // imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (mailerConfig: ConfigService) => ({
        transport: {
          host: mailerConfig.get<string>('EMAIL_HOST'),
          port: mailerConfig.get<number>('EMAIL_PORT'),
          secure:
            mailerConfig.get<string>('EMAIL_SECURE').toLowerCase() === 'true',
          auth: {
            user: mailerConfig.get<string>('EMAIL_USERNAME'),
            pass: mailerConfig.get<string>('EMAIL_PASSWORD'),
          },
        },

        defaults: {
          from: '"TStore" <admin@tstore.com>',
        },

        template: {
          dir: process.cwd() + '/templates/',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),

    // In app custom feature module
    AuthModule,
    UsersModule,
    ShopsModule,
    TagsModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) },
    Cloudinary,
  ],
})
export class AppModule {}
