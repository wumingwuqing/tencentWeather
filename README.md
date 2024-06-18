# 说明

## 使用的技术:

ts+less+echart+git

## 文件说明:

service中是获取天气和获取城市的api请求函数
utils中是解析天气api的工具以及对图片和颜色进行映射的工具
asset下的img文件夹下放着程序中使用到的图片,基本都转为了base64格式,嵌入ts代码中方便映射使用
pages/xxx放的是xxx页面对应的文件,其下还有cpns文件放的是该页面使用到的组件

## 技术说明

1.ts代替js强类型开发，less代替WXSS使用嵌套层级和变量，echart用于绘制折线图，git用于版本控制和管理

2.ts模板中的页面使用的是Component()，使用组件方式开发页面

3.图片几乎都采用行内样式设置背景图片的方式显示（因为在写的时候发现image标签有时无法正常显示图片）

4.在天气状况详情的显示中使用到了组件传值中的子传父，CurrentInfo组件发送showAirInfo事件，AirInfo发送closeAirInfo事件

5.生活建议中也使用了组件传值：父组件传给子组件，子组件传给父组件，兄弟组件传值（涉及到另一个兄弟组件SixWeather）
	1）.在本组件及其子组件中：

1. LifeAdvice把item给AdviceItem组件，两个advice组件每个item有八个元素
2. AdviceItem组件发送showAdviceInfo事件给LifeAdvice组件，参数是当前事件item的建议详情
3. LifeAdvice把currentAdviceInfo传给AdviceInfo组件，并接收该组件的HidShowLine事件

​	2）.此组件会把HidShowLine事件发送给它的父组件，修改lineisplaychange，并传递给SixWeather组件

6.首页地址后的三角形使用less设置boder样式绘制

7.在城市搜索页面的搜索历史中使用到了数组去重技术，这里依托与map对象和它的has方法实现

8.在对城市的搜索中使用了双向绑定触发侦听器实现，并在侦听器内使用防抖操作减少对服务器的请求次数

## 其他

只剩下一些天气图片没有添加映射