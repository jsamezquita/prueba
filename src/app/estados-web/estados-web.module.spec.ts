import { EstadosWebModule } from './estados-web.module';

describe('EstadosWebModule', () => {
  let estadosWebModule: EstadosWebModule;

  beforeEach(() => {
    estadosWebModule = new EstadosWebModule();
  });

  it('should create an instance', () => {
    expect(estadosWebModule).toBeTruthy();
  });
});
