<?php
/**
 * User administration panel
 *
 * @package WordPress
 * @subpackage Administration
 * @since 1.0.0
 */

/** WordPress Administration Bootstrap */
require_once __DIR__ . '/admin.php';

if ( ! current_user_can( 'list_users' ) ) {
	wp_die(
		'<h1>' . __( 'You need a higher level of permission.' ) . '</h1>' .
		'<p>' . __( 'Sorry, you are not allowed to list users.' ) . '</p>',
		403
	);
}

$wp_list_table = _get_list_table( 'WP_Users_List_Table' );
$pagenum       = $wp_list_table->get_pagenum();

// Used in the HTML title tag.
$title       = __( 'Users' );
$parent_file = 'users.php';

add_screen_option( 'per_page' );

// Contextual help - choose Help on the top right of admin panel to preview this.
get_current_screen()->add_help_tab(
	array(
		'id'      => 'overview',
		'title'   => __( 'Overview' ),
		'content' => '<p>' . __( 'This screen lists all the existing users for your site. Each user has one of five defined roles as set by the site admin: Site Administrator, Editor, Author, Contributor, or Subscriber. Users with roles other than Administrator will see fewer options in the dashboard navigation when they are logged in, based on their role.' ) . '</p>' .
						'<p>' . __( 'To add a new user for your site, click the Add New button at the top of the screen or Add New in the Users menu section.' ) . '</p>',
	)
);

get_current_screen()->add_help_tab(
	array(
		'id'      => 'screen-content',
		'title'   => __( 'Screen Content' ),
		'content' => '<p>' . __( 'You can customize the display of this screen in a number of ways:' ) . '</p>' .
						'<ul>' .
						'<li>' . __( 'You can hide/display columns based on your needs and decide how many users to list per screen using the Screen Options tab.' ) . '</li>' .
						'<li>' . __( 'You can filter the list of users by User Role using the text links above the users list to show All, Administrator, Editor, Author, Contributor, or Subscriber. The default view is to show all users. Unused User Roles are not listed.' ) . '</li>' .
						'<li>' . __( 'You can view all posts made by a user by clicking on the number under the Posts column.' ) . '</li>' .
						'</ul>',
	)
);

$help = '<p>' . __( 'Hovering over a row in the users list will display action links that allow you to manage users. You can perform the following actions:' ) . '</p>' .
	'<ul>' .
	'<li>' . __( '<strong>Edit</strong> takes you to the editable profile screen for that user. You can also reach that screen by clicking on the username.' ) . '</li>';

if ( is_multisite() ) {
	$help .= '<li>' . __( '<strong>Remove</strong> allows you to remove a user from your site. It does not delete their content. You can also remove multiple users at once by using bulk actions.' ) . '</li>';
} else {
	$help .= '<li>' . __( '<strong>Delete</strong> brings you to the Delete Users screen for confirmation, where you can permanently remove a user from your site and delete their content. You can also delete multiple users at once by using bulk actions.' ) . '</li>';
}

$help .= '</ul>';

get_current_screen()->add_help_tab(
	array(
		'id'      => 'action-links',
		'title'   => __( 'Available Actions' ),
		'content' => $help,
	)
);
unset( $help );

get_current_screen()->set_help_sidebar(
	'<p><strong>' . __( 'For more information:' ) . '</strong></p>' .
	'<p>' . __( '<a href="https://wordpress.org/support/article/users-screen/">Documentation on Managing Users</a>' ) . '</p>' .
	'<p>' . __( '<a href="https://wordpress.org/support/article/roles-and-capabilities/">Descriptions of Roles and Capabilities</a>' ) . '</p>' .
	'<p>' . __( '<a href="https://wordpress.org/support/">Support</a>' ) . '</p>'
);

get_current_screen()->set_screen_reader_content(
	array(
		'heading_views'      => __( 'Filter users list' ),
		'heading_pagination' => __( 'Users list navigation' ),
		'heading_list'       => __( 'Users list' ),
	)
);

if ( empty( $_REQUEST ) ) {
	$referer = '<input type="hidden" name="wp_http_referer" value="' . esc_attr( wp_unslash( $_SERVER['REQUEST_URI'] ) ) . '" />';
} elseif ( isset( $_REQUEST['wp_http_referer'] ) ) {
	$redirect = remove_query_arg( array( 'wp_http_referer', 'updated', 'delete_count' ), wp_unslash( $_REQUEST['wp_http_referer'] ) );
	$referer  = '<input type="hidden" name="wp_http_referer" value="' . esc_attr( $redirect ) . '" />';
} else {
	$redirect = 'users.php';
	$referer  = '';
}

$update = '';

echo 'current123';
var_dump($wp_list_table->current_action());




require_once ABSPATH . 'wp-admin/admin-footer.php';
