interface task { 
  path: string,
  fn: () => {}
}
interface LazyControl {
  tasks: task[],
  option: {
    curTaskPath: string,
    timer: number | null,
    status: string
  }
}
class LazyControl {
  startTask() {}
}
LazyControl.prototype.tasks = []; // 保存所有任务{path:"", fn: ""}
LazyControl.prototype.option= {
  curTaskPath: "", // 当前任务的path
  timer: null, // 当前任务的 timer
  status: "end"
};