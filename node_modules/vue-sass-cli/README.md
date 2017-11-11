# vue-sass-cli scaffold
vue-sass-cli 脚手架

## usage:
### Generate static-html-sub-compile directory structure.
```
    vue-sass ${component-name}
```    
    
# Directories will be generated:

## component-name

###  componentName.js.js
    
> componentName.js.js is the render js file in dirname webstorm entry;   
> componentName.js.js will generate a single html with it's own asserts directory in dist folder(configured as default output directory by default.)
        
### component-name.scss    
    
> component-name.scss just like this:
```
    @import "./**/*.sass";
```

### component-name.sass

> component-name.sass would be edit as this component's own style rule.    
> Of cause, it will follow the sass sytax, which one don't need bracket qoutes (大括号).    
> If you are interesting in this 'vue-sass-cli', may you like this sytax, too.

### component-name.vue
> component-name.vue is the main vue file of this component,    
> In order to build separate static html with it's assert correctly for every component,      
> I suggest you to keeping only one vue file in current folder, 
> When any sub component is need to create, just run this, which is very eary:
```
    vue-sass sub-cpomonent
```

### component-name.html
> component-name.html will be the template of separate dist entry html.    
>
> And component-name.html wouldn't work for the parent (dir's) component,
     since it's own template html file will be valid.
####### dropping
template.html isn't necessary, it's better to special in webpapck.config.js, like this:
    const aryHtmlWebpackPlugin = Object.keys(entry).map(function (key) {
        return new HtmlWebpackPlugin({
        
            // here, special the template.html:
            template: 'src/template.html', 
            
            filename: key + '/' + [key.match(/([\w-]+)$/)[1]] + '.html',
            chunks: [key],
        })
    });
####### dropping

> In order to render vue component correct,     
> you must make sure the div element in template.html is the same as
the component.js mount point.

###### Everything is easy, isn't it?

# Enjoy it !
