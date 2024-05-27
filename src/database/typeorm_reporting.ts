import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

export const dataSourceOptionsReporting: DataSourceOptions = {
    type: 'postgres',
    host: process.env.REPORTING_DATABASE_HOST,
    port: +process.env.REPORTING_DATABASE_PORT,
    username: process.env.REPORTING_DATABASE_USERNAME,
    password: process.env.REPORTING_DATABASE_PASSWORD,
    database: process.env.REPORTING_DATABASE_NAME,
    ssl:
        process.env.APP_ENV == 'local'
        ? false
        : {
            rejectUnauthorized: false,
            },
    };

export const typeormReportingConfiguration = registerAs(
    'typeorm_reporting',
    () => dataSourceOptionsReporting,
);
export const connectionSourceReporting = new DataSource(dataSourceOptionsReporting);