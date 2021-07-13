import Base from './base';

class Shape extends Base {
  gradient: any;
  constructor(cfg) {
    super(cfg);
    this.names = [ 'shape' ];
    this.type = 'shape';
    this.gradient = null;
  }

  /**
   * @override
   */
  getLinearValue(percent) {
    const values = this.values;
    const index = Math.round((values.length - 1) * percent);
    return values[index];
  }
}

export default Shape;
