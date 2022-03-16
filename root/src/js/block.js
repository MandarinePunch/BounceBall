export class Block {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.maxX = width + x;
    this.maxY = height + y;
  }

  draw(ctx) {
    const gapX = 60;
    const gapY = 40;

    ctx.fillStyle = "tomato";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();

    ctx.fillStyle = "#190F3A";
    ctx.beginPath();
    ctx.moveTo(this.maxX, this.maxY);
    ctx.lineTo(this.maxX - gapX, this.maxY + gapY);
    ctx.lineTo(this.x - gapX, this.maxY + gapY);
    ctx.lineTo(this.x, this.maxY);
    ctx.fill();

    ctx.fillStyle = "#9D0919";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.maxY);
    ctx.lineTo(this.x - gapX, this.maxY + gapY);
    ctx.lineTo(this.x - gapX, this.maxY + gapY - this.height);
    ctx.fill();
  }
}
