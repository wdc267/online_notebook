# online_notebook_test
this is an online notebook.
这是本人的一次课程作业，主要用于练习原生js,许多功能并不完善，存在许多不足之处，欢迎大家共同交流，如需参考代码，希望能够得到本人的允许。
## 当前功能
1. 隐藏和展开左侧导航边栏。
2. 单元格从上自下编号
3. 文本编辑模式和html预览模式切换
4. 单元格操作，选中、上移、下移、删除、在上方新建、在下方新建，暂时没有做cell的上下位置变换
5. 输入框自动调整大小
## 操作说明
1. 默认为编辑模式，文本框聚焦时为橙色状态，单击当前cell不包括文本区切换为蓝色选中状态。
2. 若当前cell处于蓝色选中状态，按键盘上的m键可以切换为预览模式。重新双击cell可以切换回编辑模式。
3. 按键盘上下键可以切换cell。
4. 也可通过菜单工具栏用鼠标点击进行单元格操作
## 出现的一些问题
1. 在github pages中引用文件夹中marked.min.js时出现无法加载的情况,原因尚未查明。报错显示Failed to load resource: the server responded with a status of 404 ()。
2. markdown转html时存在问题，对应的文字太小，部分语法无法实现比如有序列表、斜体等，原因是与css文件样式冲突。
