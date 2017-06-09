[Android原生项目集成React Native](http://blog.csdn.net/u013718120/article/details/55050900)

[基于最新版本React Native实现JsBundle预加载，界面秒开优化](http://blog.csdn.net/u013718120/article/details/71538263)

[React Native 实现热部署、差异化增量热更新](http://blog.csdn.net/u013718120/article/details/55096393)

[ React Native与Android通信交互](http://blog.csdn.net/u013718120/article/details/55506238)

# RN
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

### react native app离线打包准备
```

```
