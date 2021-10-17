export class Task {
    id: string;
    name: string;
    date: number;
    priority: string;
    category: string;
    status: boolean;
  
    constructor()
    constructor(id?: string,
                name?: string,
                date?: number,
                priority?: string,
                category?: string,
                status?: boolean) {
      this.id = (id)? id : '';
      this.name = (name)? name : name;
      this.date = (date)? date : null;
      this.priority = (priority)? priority : '';
      this.category = (category)? category : '';
      this.status = (status)? status : false;
    }
  }

