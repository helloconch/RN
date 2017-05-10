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
