# Puppeteer

[[toc]]

## Quick Starting 

```javascript
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    page.setViewport({width: 1400, height: 700, isLandscape: true});

    await page.goto('https://sotaychemgio.com', {waitUntil: 'networkidle2'});
    await browser.close();
})();
```

## Execute in the page context

```javascript
var result = await page.evaluate( function() {
    $('#my-button').click();
    return $('#result').html();
});
```



## Inject Script

```javascript
async function injectScriptTask(page, scriptUrl){
    await page.addScriptTag({ url: scriptUrl });
}

// usage
await injectScriptTask('https://code.jquery.com/jquery-3.2.1.min.js');
```

## Workflow Pattern

### Workflow

```javascript
const {Logger, UI_Utils, _} = runtime;

function Workflow(config){
    let instance = {};
    let { name, url } = config;

    let page = null; //runtime.getPage();
    let tasks = [];
    
    instance.addTask = (taskItem) => { tasks.push(taskItem) };

    instance.setPage = (_page) => { 
        page = _page;
    }

    instance.getPage = () => page;

    
    instance.accessPage = async () => {
        await UI_Utils.accessPage(page, url, name, 1000);
        Logger.info('Done loading page');
    }


    /*  Hook for run function */
    instance.afterRun = async function(data) { }
    instance.beforeRun = async function(data) { }


   
    instance.runTasks = async function(data) {
        if(!_.isArray(tasks)){
            return;
        }

        for(let task of tasks) {
            await task.run(page, { config, data, app: instance}); // 
        }
    }

    instance.run = async function(){
        var data = {};
        await instance.beforeRun(data);

        await instance.accessPage();
        await instance.runTasks(data);

        await instance.afterRun(data);
    }

    return instance;
}

module.exports = Workflow;
```

### Workflow Task

```javascript
const _ = require("underscore");

var WorkflowTask = function(_subTasks){
    var subTasks = _.isArray(_subTasks) ? _subTasks : []; 
    var instance = {};

    /// NEED TO OVERRIDE BY SUBCLASS
    // will be called by `instance.run`
    instance.execute = async function(page, option){
        console.log('Please implement <3');
    }

    /// DONT EXPECT TO OVERRIDE
    instance.addTask = (task) => {subTasks.push(task) } ;

  
   
    /*
    * This function will call recursive 
    *     if sub task has sub sub tasks 
    */
    /// DONT EXPECT TO OVERRIDE
    instance.run = async function(page, option) {
        await instance.execute(page, option);
        await instance.runTasks(page, option);
    }


    /// DONT EXPECT TO OVERRIDE
    instance.runTasks =  async function(page, option){
        if(!_.isArray(subTasks)){
            return;
        }

        for(let subTask of subTasks) {
            await subTask.run(page, option); // 
        }
    }

    return instance;
};

module.exports = Task;
```

### Usage

**Workflow level**
Focus on config & tasks

```javascript
let grabImageTask = require('./grabImageTask');
let downloadImageTask = require('./downloadImageTask');

const config = {
    name: 'Images', 
}

let wf = Workflow(config);

wf.addTask(grabImageTask);
wf.addTask(downloadImageTask);

module.exports = wf;
```

**Task Level**

`downloadImageTask.js`

```javascript
const download = require('image-downloader')

const instance = WorkflowTask();

instance.execute = async function (page, option) {
    console.log('run task download', option.data.imageLinks)

    for(let i =0, len = option.data.imageLinks.length; i < len; ++i) {
        const url = option.data.imageLinks[i];

        console.log('Downloading image: ', url);
        const options = {
            url: url,
            dest: appRoot + 'downloads/',   
        }
        await download.image(options) 
    }
}

module.exports = instance;
```
