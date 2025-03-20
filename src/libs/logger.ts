import type { DestinationStream } from 'pino';
import { env } from '@/constants/env';
import logtail from '@logtail/pino';
import pino from 'pino';
import pretty from 'pino-pretty';

let stream: DestinationStream;

if (env.LOGTAIL_SOURCE_TOKEN) {
  stream = pino.multistream([
    await logtail({
      sourceToken: env.LOGTAIL_SOURCE_TOKEN,
      options: {
        sendLogsToBetterStack: true,
      },
    }),
    {
      stream: pretty(), // Prints logs to the console
    },
  ]);
} else {
  stream = pretty({
    colorize: true,
  });
}

export const logger = pino({ base: undefined }, stream);
