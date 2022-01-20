var LazyControl = /** @class */ (function () {
    function LazyControl() {
    }
    LazyControl.prototype.startTask = function () { };
    return LazyControl;
}());
LazyControl.prototype.tasks = []; // 保存所有任务{path:"", fn: ""}
LazyControl.prototype.option = {
    curTaskPath: "",
    timer: null,
    status: "end"
};
