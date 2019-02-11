// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

export interface TodoResponse {
    Id: number;
    Task: string;
    Description: string;
    Completed: boolean;
    Marked: boolean;
}
//export class TodoResp implements TodoResponse {
//  Id: number;
//  Task: string;
//  Description: string;
//  Completed: boolean;
//  Marked: boolean;
//}

export class TodoResp implements TodoResponse{
  Id: number;
  Task: string;
  Description: string;
  Completed: boolean;
  Marked: boolean;
  constructor(Id: number,
    Task: string,
    Description: string,
    Completed: boolean,
    Marked: boolean) {
    this.Id = Id,
      this.Task = Task,
      this.Description = Description,
      this.Completed = Completed,
      this.Marked = Marked
  }
}
