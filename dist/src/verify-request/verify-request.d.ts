import compose from 'koa-compose';
import {Options} from './types';
export default function verifyRequest(
  givenOptions?: Options,
): compose.Middleware<
  import('koa').ParameterizedContext<
    import('koa').DefaultState,
    import('koa').Context,
    any
  >
>;
//# sourceMappingURL=verify-request.d.ts.map
