export interface Data {
  review: Reviews[];
}


export interface Reviews {
    id: string;
    comment: string;
    rating: number;
    Date:Date;
    description:string;
  }
  