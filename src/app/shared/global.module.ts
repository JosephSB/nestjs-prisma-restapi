import { Global, Module } from '@nestjs/common';
import config from '../../config';

@Global()
@Module({
  providers: [
    {
      provide: 'GLOBAL_KEY',
      useValue: config.PORT,
    },
    {
      provide: 'LOG_TOKEN',
      useFactory: async () => {
        // run processs
        return config.PORT;
      },
      inject: [],
    },
  ],
  exports: ['GLOBAL_KEY'],
})
export class GlobalModule {}
