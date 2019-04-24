import { ChangesModule } from './changes.module';

describe('CambiosModule', () => {
  let cambiosModule: ChangesModule;

  beforeEach(() => {
    cambiosModule = new ChangesModule();
  });

  it('should create an instance', () => {
    expect(cambiosModule).toBeTruthy();
  });
});
