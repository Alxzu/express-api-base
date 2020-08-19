import HttpException from './HttpException';

class NotFoundException extends HttpException {
  constructor(id: string, model: string) {
    super(404, `${model.toUpperCase} with id ${id} not found`);
  }
}

export default NotFoundException;
