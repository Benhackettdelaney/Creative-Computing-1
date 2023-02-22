class BarChart {
  constructor(_verticalH, _verticalW, _positionX, _positionY, _Info, _numberOfTickss) {
    this.verticalH = _verticalH;
    this.verticalW = _verticalW;
    this.positionX = _positionX;
    this.positionY = _positionY;
    this.Info = _Info;
    // this.numberOfTicks = _numberOfTickss;
    this.numberOfTicks = this.Info.length;
    this.tickverticalW = _verticalW / _numberOfTickss;

    this.chartMargin = 20;
    this.chartGap = 10;
    this.chartVerticalW =
      (this.verticalW - this.chartMargin * 2 - (this.Info.length - 1) * this.chartGap) /
      this.Info.length;
  }

  render() {
    push();
    translate(this.positionX, this.posY);
    this.drawHLine();
    this.drawVLine();
    this.drawBars();
    this.drawTickLine();
    pop();
  }

  drawBars() {
    translate(this.chartMargin, 0);
    for (let x = 0; x < this.Info.length; x++) {
      fill(255, 0, 0);
      let chartGap = x * (this.chartGap + this.chartVerticalW);
      rect(chartGap, 0, this.chartVerticalW, -this.Info[x]);
    }
  }

  drawVLine() {
    noFill();
    stroke(55);
    line(0, 0, 0, -this.verticalH);
  }

  drawHLine() {
    noFill();
    stroke(55);
    line(0, 0, this.verticalW, 0);
  }

  scaling() {
    let scale = chartverticalH/maximumValue;
  return _num* scale
  }

  drawTickLine() {
    let tickchartGap = this.verticalH / (this.numberOfTicks - 1);

    for (let x = 0; x < this.numberOfTicks; x++) {
      line(0, x * -tickchartGap, 5, x * -tickchartGap);
    }
  }
}

