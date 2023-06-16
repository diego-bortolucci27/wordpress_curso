<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'banco_wordpress' );

/** Database username */
define( 'DB_USER', 'diego' );

/** Database password */
define( 'DB_PASSWORD', '#$Palmeiras27.php' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'J:a3GN1aY)-d::*e5^u@qxW]E7AKa(q0-*`;|dqdX_)whC-c^DC7ARjHuAP[h%&;' );
define( 'SECURE_AUTH_KEY',  'Zj:1Gy45YF}~eKdOk2f#p@p@71[roMd2.:9=EfBNJb7SGDJ+7-w2cGiDcc&7!%VC' );
define( 'LOGGED_IN_KEY',    '/r/Ae2qx&Q>QD0.SMUiW+li*9m]oS?%-st|H9@$kI,Q7Q65`?Png?A@Zt-v{Dou,' );
define( 'NONCE_KEY',        ':p9mc^so+<$t<PV{T,^)H15SMYC*bh-^#FaDm8YX9+1j~L-Uo~W^5c9/mT&8#8P|' );
define( 'AUTH_SALT',        't1%+?F:|w6pgYL=LAq*GDnOej:Of6$}q&=v&0pjH](?PcbuRND7s9voN?p/mI*^I' );
define( 'SECURE_AUTH_SALT', '<NWr3wGCKG]><*ykZvCX:DHF6NvCE,JX5RBw3tSp]^l&c0FNKV2U-i^{BC$_MbA#' );
define( 'LOGGED_IN_SALT',   'bI)~-8D!OQZ`N4 mr/,P:6x#v1[DSPn!7I8AbacI&#QJ@F84.g[$x4CG#x0!:.W?' );
define( 'NONCE_SALT',       'Vu xEkJ.=bZA5W32<;/lU@@*eoi  >SfH.r/c52OoDlzFePg>D!ioe5yV8zCkJH9' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
