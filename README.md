[Android原生项目集成React Native](http://blog.csdn.net/u013718120/article/details/55050900)

[基于最新版本React Native实现JsBundle预加载，界面秒开优化](http://blog.csdn.net/u013718120/article/details/71538263)

[React Native 实现热部署、差异化增量热更新](http://blog.csdn.net/u013718120/article/details/55096393)

[ React Native与Android通信交互](http://blog.csdn.net/u013718120/article/details/55506238)


# RN

### Android真机设备上运行
```
现在你可以运行react-native run-android来在设备上安装并启动应用了。

译注：在真机上运行时可能会遇到白屏的情况，请找到并开启悬浮窗权限。比如miui系统的设置在此处。

提示
你还可以运行react-native run-android --variant=release来安装release版的应用。当然你需要先配置好签名，
且此时无法再开启开发者菜单。注意在debug和release版本间来回切换安装时可能会报错签名不匹配，此时需要先卸载前一个版本再尝试安装。
```

### Android打包遇到问题
```
A problem occurred starting process 'command 'node''

第1种方式

1)cd android/
./gradlew --stop
2)./gradlew assembleRelease

第2种方式

(https://github.com/facebook/react-native/issues/6875#issuecomment-215854946)

By changing node executable path in build.gradle(app) works for me.

 project.ext.react = [
            nodeExecutableAndArgs : ["/usr/local/bin/node"]
    ];
    
```
### Android Stuido Build异常
```
1.Error:Execution failed for task ':app:mergeDebugResources'. > Error: Some file crunching failed, 
see logs for details
方式:build.gradle中
android{
 aaptOptions {
        cruncherEnabled = false
    }
}

2.错误: 找不到或无法加载主类 org.gradle.wrapper.GradleWrapperMain
方式:新建一个项目，将gradle/wrapper中文件，拷贝到项目中，替换。

}

```
### react native app离线打包准备
```

```
