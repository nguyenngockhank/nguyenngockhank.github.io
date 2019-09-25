# Wordpress 


## WP CLI

### Replace options url
```
php wp-cli.phar  search-replace 'http://kaplan.constructdigital.net' 'http://kaplan.local'
```

### Regenerate Image

```
php wp-cli.phar  media regenerate --image_size=product-thumbnail
```

### Execute file
```
php wp-cli.phar eval-file wp-content/themes/poh-heng/migration/product_final_price.php
```

## Snippets 

### Define a page template

Create file: `{{themse}}/page-templates/home-v5.php`

```php
<?php
/**
 * Template Name: Home
 */
get_header('v5'); // {{themse}}/header-v5.php
```

### Enqueue assets
```php
function sap_enqueue_assets () {
    $dsc_path = get_template_directory_uri() . '//assets-dsc/';
    // javascript
    wp_enqueue_script('dsc-main' ,  $dsc_path . 'js/main.js', [], SAP_VERSION, true); 
    // css
    wp_enqueue_style('sap-main-dsc', get_template_directory_uri() . '/built/css/dsc_main.css', [], SAP_VERSION, 'all'); 
    // ... 
}
add_action('wp_enqueue_scripts', 'sap_enqueue_assets');
```

### Add footer hook
```php
function sap_script_footer() {
    get_template_part('page-templates/preprocess-3rd-parties');
    get_template_part('page-templates/processing-3rd-parties');
}

$priority = 100; // 
add_action( 'wp_footer', 'sap_script_footer', $priority );
```

### Update url of Taxanomy

1/ In source code
Update `slug` on source code.  

2/ Regenerate url
> `Admin CMS` > `General` > `Permalink` > Click save to reloads 

### Update new size image

1/ In source code

```php
/// register
add_image_size( 'product-thumbnail', 300, 300 , true);

/// usage
get_the_post_thumbnail_url( $_product, 'product-thumbnail')
```

2/ Regenerate by WP CLI

```
php wp-cli.phar  media regenerate --image_size=product-thumbnail
```

## Get thumbnail size

```php
$post_thumbnail_id = get_post_thumbnail_id( $post );
$thumbnail = image_downsize( $post_thumbnail_id );
```

Result 
```
Array
(
    [0] => http://pohheng.local/wp-content/uploads/2019/06/HLOVEJOURNEY0487A-300x300.jpg
    [1] => 300
    [2] => 300
    [3] => 1
)
```


### [ACF](https://www.advancedcustomfields.com/)

```
title           (Text)
article_list    (Repeater)
--- article (Article)
--- title   (Text)
--- desc    (Textarea)
--- image   (Image)
```

```php
<?php
$sec_data = [
    'title' => get_field('article_title'),
    'article_list' => [],
];

$articles = get_field('article_list');
if (!empty($articles)) {
    foreach($articles as $item) {
        $article = $item['article'];
        unset($item['article']);
        $row_data = $item;

        $row_data['cta_text'] = $item['cta_text'];

        if(empty($row_data['title'])) {
            $row_data['title'] = $article->post_title;
        }
       
        if(empty($row_data['desc'])){
            $row_data['desc'] = $article->post_excerpt ? $article->post_excerpt : wp_trim_words($article->post_content);
        }

        if (empty($row_data['image'])) {
            $row_data['image'] = get_the_post_thumbnail_url($article);
        } else {
            $row_data['image'] = $row_data['image']['url'];
        }
        
        if (empty($row_data['cta_url'])) {
            $row_data['cta_url'] =  get_permalink($article); 
        }
     
        $sec_data['article_list'][] = $row_data;
    }
}
```

