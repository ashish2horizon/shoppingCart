import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskBoardComponent } from "./task-board.component";
import { SharedModule } from "../../shared/shared.module";
import { TaskRoutes } from "./task.routing";

@NgModule({
  imports: [
    CommonModule, SharedModule, TaskRoutes],
  declarations: [TaskBoardComponent]
})
export class TaskBoardModule { }
