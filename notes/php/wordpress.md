# Wordpress 

## Define a new type post

```php
define('TRAINING_VIDEO_POST_TYPE', 'training_video');

// Our custom post type function
function _register_training_video() {
    register_post_type( TRAINING_VIDEO_POST_TYPE,
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'All Training Videos' ),
                'singular_name' => __( 'Training Video' )
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => 'dashicons-format-video',
        )
    );
}

add_action( 'init', '_register_training_video' );
```

## Define a page template

Create file: `{{themse}}/page-templates/home-v5.php`

```php
<?php
/**
 * Template Name: Home
 */
get_header('v5'); // {{themse}}/header-v5.php
```

## Define a REST API

At `functions.php`
```php
function _process_user_logout() {
    auth_logout();
    wp_redirect(web_login_url());
}
add_action ('admin_post_user_logout', '_process_user_logout');
add_action ('admin_post_nopriv_user_logout', '_process_user_logout');
```

At HTML
```html
<form id="logout-form" action="<?= admin_post_url() ?>"  method="post" >
    <input type="hidden" name="action" value="user_logout" />
    <a href="javascript:void(0)" onclick="document.getElementById('logout-form').submit();" class="logout-btn">
        <i class="fas fa-sign-out-alt"></i>
    </a>
</form><!-- end login form -->
```

*Note*: 
- `user_logout` is an action from the param post from the Form. 
- `nopriv_user_logout` is used for case User has no Session in `wp-admin` page.

## Create a new Table in Database & Display in Admin

### 1/ Set up Database
```php
function setup_db_tables() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'feedback';
    if( $wpdb->get_var("SHOW TABLES LIKE '$table_name'" ) != $table_name ) {
        //table not in database. Create new table
        $charset_collate = $wpdb->get_charset_collate();
    
        $sql = "CREATE TABLE $table_name (
                    id mediumint(9) NOT NULL AUTO_INCREMENT,
                    lang varchar(10) NOT NULL,
                    message text NOT NULL,
                    created_at DATETIME NOT NULL,
                    PRIMARY KEY id (id)
                ) $charset_collate;";
        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        dbDelta( $sql );
    }	
}

function _theme_setup() {
    setup_db_tables();
}
add_action( 'after_setup_theme', '_theme_setup' );
```

**`$wpdb`** is a global variable for manipulating Database. 


### 2/ Define helpers 

```php
define("ADMIN_ITEM_PER_PAGE", 50);


// Numbered Pagination
if ( !function_exists( 'wpex_pagination' ) ) {
	function wpex_pagination($total_pages) {
		
		$prev_arrow = is_rtl() ? '→' : '←';
		$next_arrow = is_rtl() ? '←' : '→';
		
		$big = 999999999; // need an unlikely integer
		if( $total_pages > 1 )  {
            if( !$current_page = get_query_var('paged') )
                $current_page = 1;

                $format = '&paged=%#%';
            // }
			echo paginate_links(array(
				'base'			=> str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
				'format'		=> $format,
				'current'		=> isset($_GET['paged']) ? (int)$_GET['paged'] : 1,
				'total' 		=> $total_pages,
				'mid_size'		=> 3,
				'type' 			=> 'list',
				'prev_text'		=> $prev_arrow,
				'next_text'		=> $next_arrow,
			 ) );
		}
	}
}

if (!function_exists('wpex_pagination_info')) {
    function wpex_pagination_info( $wpdb, $table_name ) {
        $current_page = isset($_GET['paged']) ? (int)$_GET['paged'] : 1 ;
        $offset = ADMIN_ITEM_PER_PAGE * ($current_page - 1);
        /// query get items on page 
        $sql = "SELECT * FROM {$table_name} ORDER BY created_at DESC LIMIT ${offset}," . ADMIN_ITEM_PER_PAGE;
        $rows = $wpdb->get_results( $sql  , OBJECT );
        /// count total items -> total pages
        $total = $wpdb->get_row( "SELECT count(*) AS num FROM {$table_name}")->num; 
        $total_pages = ceil($total / ADMIN_ITEM_PER_PAGE);

        return [
            $current_page, $total_pages, $rows
        ];
    }
}
```

### 3/ Add to sidebar Menu

```php
function feedback_admin_page() {
    get_template_part( 'template-parts/feedback-admin');
}

function menu_feedback_submissions() {
    add_menu_page( 'Submissions', 'Feedback', 'manage_options', 'submissions-page.php', 'feedback_admin_page', 'dashicons-cloud', 25 );
}
add_action( 'admin_menu', 'menu_feedback_submissions' );
```

At `template-parts/feedback-admin`

```php
<style>
.message-content {
  white-space: pre-line;
}
</style>
<div class="wrap">
    <h1 class="wp-heading-inline">Feedback Submissions</h1>
    <table class="wp-list-table widefat fixed striped polls">
        <thead>
        <tr>
          <th width="10%" scope="col" class="manage-column column-title column-primary"><span>ID</span></th>
          <th scope="col" class="manage-column column-title column-primary"><span>Message</span></th>
          <th width="20%" scope="col" class="manage-column column-title column-primary"><span>Created At</span></th>
        </tr>
        </thead>
        <tbody>
        <?php
        $table_name = $wpdb->prefix . 'feedback';
        list($current_page, $total_pages, $rows) = wpex_pagination_info($wpdb, $table_name);
        foreach( $rows as $row ) : ?>
          <tr>
            <td><?php echo $row->id ?></td>
            <td class="message-content"><?php echo $row->message ?></td>
            <td><?php echo $row->created_at ?></td>
          </tr>
        <?php endforeach; ?>
        </tbody>
    </table>

    <?= wpex_pagination($total_pages); ?>
</div>
```

## Enqueue assets

### Frontend 

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

### Backend

```php
add_action( 'admin_enqueue_scripts', function($hook) {
    if($hook === 'theme-settings_page_frontend-users') {
        wp_enqueue_script( 'my_custom_script', web_assets_url('js/admin.js'), array(), ASSETS_VERSION);
    }
});
```


## Add footer hook
```php
function sap_script_footer() {
    get_template_part('page-templates/preprocess-3rd-parties');
    get_template_part('page-templates/processing-3rd-parties');
}

$priority = 100;
add_action( 'wp_footer', 'sap_script_footer', $priority );
```

## Update url of Taxanomy

1/ In source code
Update `slug` on source code.  

2/ Regenerate url
> `Admin CMS` > `General` > `Permalink` > Click save to reloads 

## Update new size image

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

## Roles & Capabilities

Must Install Plugin: `Capability Manager Enhanced`

```php
define('VIEW_FEEDBACK_CAPABILITY', 'view_feedback');

// add capability  
function add_theme_caps() {
    $role = get_role('author');
    $role->add_cap( VIEW_FEEDBACK_CAPABILITY ); 
}
add_action( 'admin_init', 'add_theme_caps');

// inject of capability
function menu_feedback_submissions() {
    add_menu_page( 'Submissions', 'Feedback', VIEW_FEEDBACK_CAPABILITY, 'submissions-page.php', 'feedback_admin_page', 'dashicons-cloud', 25 );
}
add_action( 'admin_menu', 'menu_feedback_submissions' );
```

## Add Custom Menu 

1/ Source code

```php
// define name 
define('MENU_FOOTER', 'vethoi-footer-menu');

// register to wordpress
function vethoi_theme_menus()
{
    register_nav_menus(array( // Using array to specify more menus if needed
        MENU_FOOTER => 'Footer Menu',
    ));
}
add_action('init', 'vethoi_theme_menus'); 

// usage
wp_nav_menu( [
    'theme_location' => MENU_FOOTER, 
    'container_class' => 'footer-link' 
]); 
```


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


## WPML

[WPML Coding API](https://wpml.org/documentation/support/wpml-coding-api/)

### `web_url` helper

To provide a helper with `lang` param 

```php
// get_site_url is a function of wordpress
function web_url($path = '', $lang = null) {
    $new_path = get_site_url(null, $path);
    if ($lang === null) {
        $lang = ICL_LANGUAGE_CODE;
    }
    return apply_filters( 'wpml_permalink', $new_path, $lang); 
}

//  if `ICL_LANGUAGE_CODE` is `vi`
//  https://example.com/login?lang=vi 
web_url('login'); 
```

### List languages

```php
// `ICL_LANGUAGE_CODE` - current language
<?php $languages = apply_filters( 'wpml_active_languages', NULL); ?>

<select>
    <?php foreach($languages as $code => $lang ): ?>
        <option <?= $code === ICL_LANGUAGE_CODE ? 'selected' : '' ?> 
            title="<?= $lang['translated_name'] ?>" 
            value="<?= $lang['code'] ?>"
        >
            <?= $lang['native_name'] ?>
        </option>
    <?php endforeach; ?>
</select><!-- end language switcher -->
```

### Global Option

```php
function cl_acf_set_language() {
    return acf_get_setting('default_language');
}
function get_global_option($name) {
    add_filter('acf/settings/current_language', 'cl_acf_set_language', 100);
    $option = get_field($name, 'option');
    remove_filter('acf/settings/current_language', 'cl_acf_set_language', 100);
    return $option;
}
```

## ACF

[Full docs](https://www.advancedcustomfields.com/resources/)

### Get field


**1/ Get field from current Post**

```php
$value = get_field('your_field');
```

**2/ Get field from a specific Post by Post Id**

```php
$value = get_field('your_field', $post_id);
```

**3/ Get field from Option Page**
```php
$value = get_field('your_field', 'options');
```

### Register Option Page 

```php
function register_acf_options_pages() {
    acf_add_options_page(array(
        'page_title' 	=> 'Theme General Settings',
        'menu_title'	=> 'Theme Settings',
        'menu_slug' 	=> 'theme-text-settings',
        'capability'	=> 'edit_posts',
        'redirect'		=> false
    ));
}

// Hook into acf initialization.
add_action('acf/init', 'register_acf_options_pages');
```


### Example 
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

## Plugins 

- **Classic Editor Addon**: This free "Classic Editor Addon" plugin makes sure that the new block editor cannot be accidentally activated and blocks the calls to additional styles from the `` (frontend)
- **Duplicator`**: Migrate and backup a copy of your WordPress files and database. Duplicate and move a site from one location to another quickly.
- **Advanced Custom Fields PRO**: Customize WordPress with powerful, professional and intuitive fields.
- **WPML Multilingual CMS**: Multilingual CMS
- **Yoast SEO**: SEO in general
- **Smush**: Reduce image file sizes, improve performance and boost your SEO using the free free WPMU DEV WordPress Smush API.
- **WP Security Audit Log**: Wholesome auditlog
- **Capability Manager Enhanced**: UI for enter Roles & Capabilities
