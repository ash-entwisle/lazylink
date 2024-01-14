/**
 * Represents an icon used in LazyLink.
 */
export interface LLIcon {
    /**
     * The Font Awesome icon hex code.
     */
    code: string;
    
    /**
     * Determines whether the icon should use the FA-Solid style.
     */
    bold: boolean;
}

/**
 * Represents a lazy link.
 */
export interface LLLink {
    /**
     * The name of the link.
     */
    name : string;   
    /**
     * The URL of the link.
     */
    href : string;
    /**
     * The description of the link.
     */
    desc : string;
    /**
     * The link that will be used to redirect to the link.
     */
    link : string;
    /**
     * The optional FA icon for the link.
     */
    icon?: LLIcon;
    /**
     * Toggles whether the link should be displayed in the tree
     */
    hide?: boolean;
}

/**
 * Represents the configuration for LazyLink.
 */
export interface LLConfig {
    /**
     * The title of the page.
     */
    title : string;
    /**
     * optional secondary title of the page.
     */
    subtitle?: string;
    /**
     * The about section of the page.
     */
    about : string;
    /**
     * The link to the profile image.
     */
    image?: string;
    /**
     * The links to be displayed.
     */
    links : LLLink[];
}