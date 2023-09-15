# 关于
## 分支用途
这个分支用于**备份gridea博客本地资源**，因为main分支部署后本地资源会被编译。如果在本地编辑博客时，因意外造成本地资源文件夹被初始化，之前的资源很有可能无法恢复。

当清空本地资源文件夹并重新启动gridea主程序时，文件夹被初始化，会展示默认的博客模板。

## 更新方式
1. 站点源文件夹与备份文件夹分开创建

例：站点源文件夹为 **/docs** 时，可以命名备份文件夹为src/local等，两个文件夹在同一目录下(这里以 **/src** 为例)

![image](https://github.com/SIyuyuko/SIyuyuko.github.io/assets/59350865/e2120ad4-bf39-4c7e-9d66-b848bbcd0e80)

![image](https://github.com/SIyuyuko/SIyuyuko.github.io/assets/59350865/18ed8a2e-b2ac-43a5-b0a3-f681883dad42)

2. 需要更新备份时，将 **/docs** 内容全部替换到 **/src**

3. 在VS Code中打开 **/src** ，在源代码管理一栏添加远程存储库，可以手动添加仓库URL或直接选择仓库(VS Code需要登录GitHub账号)

![image](https://github.com/SIyuyuko/SIyuyuko.github.io/assets/59350865/dbb5872f-31ae-4d21-a646-6a1d75f0711b)

仓库URL在仓库首页处获取

![image](https://github.com/SIyuyuko/SIyuyuko.github.io/assets/59350865/29962623-87e5-4e80-ad82-0eaafc2e77a2)

4.更新提交文件，请确保签出分支为备份分支，这里以 **local** 为例(备份分支与main不相同，若没有请自行创建新分支)

![image](https://github.com/SIyuyuko/SIyuyuko.github.io/assets/59350865/24c8e52e-1f3e-4746-b087-416d4ca3bf95)

5.暂存、提交、同步代码

## 其他
GitHub会提示该分支没有同步、需要更新等消息，可以忽略，因为该分支存在的意义是为了备份本地资源，无需与main分支合并(而且两个分支内容不同源，本来就无法合并)。

![image](https://github.com/SIyuyuko/SIyuyuko.github.io/assets/59350865/57f2f2c8-e6d4-49f2-881f-926783e06315)
