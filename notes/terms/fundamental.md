# Fundamental principles

## Early Return Principle

:::: tabs
::: tab Before
```php
protected function track_user_activity(){
    $user_id = $this->get_user_id();
    if(!empty($user_id)){

        $controller = $this->router->fetch_class();
        if($controller != 'internet') {

            $method = $this->router->fetch_method();
            if ($method != 'index') {
                // 60+ lines of code ... 
            }
        }
    }
}
```
:::

::: tab After

```php
protected function track_user_activity(){
    $user_id = $this->get_user_id();
    if(empty($user_id)){ 
        return;
    }

    $controller = $this->router->fetch_class();
    if($this->router->fetch_class() == 'internet'){
        return;
    }

    $method = $this->router->fetch_method();
    if ($method == 'index') {
        return;
    }

    // 60+ lines of code ... 
}
```
:::
::::




## Separation of Concerns

:::: tabs

::: tab Before
```php
protected function track_user_activity(){
    $shouldTrack = $this->should_track_user_activity();
    if (!$shouldTrack) {
        return;
    }
    // 60+ lines of code ... 
}

private function should_track_user_activity() {
    $user_id = $this->get_user_id();
    $controller = $this->router->fetch_class();
    $method = $this->router->fetch_method();
    if(empty($user_id) || $controller === "internet" || $method == 'index'){ 
        return false;
    } 
    return true;
}
```
:::



### Remove temp var

::::

Example 2
:::: tabs

::: tab Before
```ts
private getUons = async (context: InteractorContext, areaId?: number): Promise<Uon[]> => {

    /// ---- code 

    const uonDistributorStoreClient = new UonDistributorStoreClient(this.appConfigs);
    if (!areaId) {
        const result = await this.getUonsForConsumer(context, userGetting, uonDistributorStoreClient);
        return result;
    }

    const result = await this.uonsInAreaForConsumer(context, userGetting, areaId, uonDistributorStoreClient);
    return result;
};
```
:::

::: tab After

```ts
private getUons = async (context: InteractorContext, areaId?: number): Promise<Uon[]> => {

    /// ---- code 

    const uonDistributorStoreClient = new UonDistributorStoreClient(this.appConfigs);
    if (!areaId) {
      return this.getUonsForConsumer(context, userGetting, uonDistributorStoreClient);
    }

    return this.uonsInAreaForConsumer(context, userGetting, areaId, uonDistributorStoreClient);
};
```
:::
::::