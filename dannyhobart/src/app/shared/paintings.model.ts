export class Paintings {
    public id: string;
    public status: string;
    public title: string;
    public dimensions: string;
    public imagePath: string;
    public thumbnailPath: string;
    public desc: string;
    public yr: string;
    public linkTo: string;
    public categoryName: string;

  constructor(
      id: string, 
      status: string,
      title: string, 
      dimensions: string,
      imagePath: string, 
      thumbnailPath: string,
      desc: string, 
      yr: string,
      linkTo: string,
      categoryName: string) {
    this.id = id;
    this.status = status;
    this.title = title;
    this.dimensions = dimensions;
    this.imagePath = imagePath;
    this.thumbnailPath = thumbnailPath;
    this.desc = desc;
    this.yr = yr;
    this.linkTo = linkTo;
    this.categoryName = categoryName;
  }
}
