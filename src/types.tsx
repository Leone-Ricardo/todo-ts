export type TaskStatus = "todo" | "done";


export type Task ={
    id: number;
    title: string;
    status: TaskStatus;

}