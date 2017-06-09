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
Android

新增main.jsbundle文件

首先在浏览器打开http://localhost:8081/index.ios.bundle?platform=android&dev=false（根据自己项目及平台来），
然后将自己创建一个文件main.jsbundle来保存此网址返回的代码，最后放到Android的assets目录中

新增写文件代码

 private static final String JSBUNDLE_FILE = "main.jsbundle";

  private static void copyFile(InputStream in, OutputStream out) throws IOException
  {
    byte[] buffer = new byte[1024];
    int read;
    while((read = in.read(buffer)) != -1){
      out.write(buffer, 0, read);
    }
  }

  private void prepareJSBundle() {
    File targetFile = new File(getFilesDir(), JSBUNDLE_FILE);
    if (!targetFile.exists()) {
      try {
        OutputStream out = new FileOutputStream(targetFile);
        InputStream in = getAssets().open(JSBUNDLE_FILE);

        copyFile(in, out);
        out.close();
        in.close();
      } catch (FileNotFoundException e) {
        e.printStackTrace();
      } catch (IOException e) {
        e.printStackTrace();
      }
    }
  }

onCreate中setContentView之后调用prepareJSBundle()即可;

Ios

新增main.jsbundle文件

首先在浏览器打开http://localhost:8081/index.ios.bundle?platform=ios&dev=false（根据自己项目及平台来），
然后将自己创建一个文件main.jsbundle来保存此网址返回的代码，最后放到iOS的项目根目录中

修改项目中加载代码的判断

注释 jsCodeLocation = [NSURL URLWithString:@”http://localhost:8090/index.ios.bundle?platform=ios&dev=true“];

打开 jsCodeLocation = [[NSBundle mainBundle] URLForResource:@”main” withExtension:@”jsbundle”];

```
