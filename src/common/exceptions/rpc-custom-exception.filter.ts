import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    // return throwError(() => exception.getError());
    const ctx = host.switchToHttp(); // Execution context
    const response = ctx.getResponse();

    const rpcError = exception.getError();
    console.log({ rpcError });

    if (
      typeof rpcError === 'object' &&
      'status' in rpcError &&
      'message' in rpcError
    ) {
      // const status = isNaN(+rpcError.status) ? +rpcError.status : 400;
      const status = rpcError.status ?? 400;
      return response.status(status).json(rpcError);
    }
    response.status(400).json({
      status: 400,
      message: rpcError,
    });
  }
}
