# 代码规范

1. formModelControl,formModelRules超多代码
2. 定义过多不使用的属性和方法（公共minx，等其他功能）
3. Mixin和业务代码耦合（覆盖顺序：先mixin,后业务代码） （nonFormData类似文件）
4. 组件入参数量过多（文件上传）
5. Data属性过多（frnSign，createSign等）
6. 容易被误解的注释
7. 嵌套结构过深
8. 代码格式化,减少莫名的空行，接口的.then缩进.catch缩进统一（便于git管理，合并）
9. 同级页面的组件不应该互相引用（不利于他人维护）
10. 一行不宜写太长代码（不利于阅读）
11. 删除不必要的注释代码（不利于阅读,可从git历史记录寻找）
12. 代码冗余（es6，contentFormatter，方法抽离,组件抽离,
this.$message.error代替this.$message(配置对象),
去除空的compputed/mounted,deep针对(不是基本类型),includes代替|| ||,
a === b? true: false）
13. 使用全等===代替==（java是强数据类型）
14. 有问题的代码（{} == {},JSON.parse({}),）
15. 用模板字符串代替加号拼接
16. props的类型是引用数据类型，default应使用函数return(() => ({}))
因为vue规定，对象或数组默认值必须从一个工厂函数获取
17. html不适合复杂的代码逻辑（两个语句）（computed代替）
18. for的key尽量使用唯一标识（大型列表，减少重绘重排）
19. 托底处理，响应数据返回的列表是null或者[](res.list || [])
20. 接口堵塞，过多同步代码
21. 使用let, const 代替var()
22. html不书写过多的内联样式（）
23. 统一样式风格，规范UI样式
24. js精度计算，非必要要求，不在前端计算（若在bigDecimal,企业的精度计算的库）
25. watch:deep滥用
26. blur,change可以放在一个数组(elementUI)
