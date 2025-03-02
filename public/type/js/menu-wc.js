'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">type</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessDeniedError.html" data-type="entity-link" >AccessDeniedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmptyArrayError.html" data-type="entity-link" >EmptyArrayError</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmptyObjectError.html" data-type="entity-link" >EmptyObjectError</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidInputError.html" data-type="entity-link" >InvalidInputError</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidPropertyTypeError.html" data-type="entity-link" >InvalidPropertyTypeError</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidSchemaError.html" data-type="entity-link" >InvalidSchemaError</a>
                            </li>
                            <li class="link">
                                <a href="classes/ItemNotFoundError.html" data-type="entity-link" >ItemNotFoundError</a>
                            </li>
                            <li class="link">
                                <a href="classes/KeyNotFoundError.html" data-type="entity-link" >KeyNotFoundError</a>
                            </li>
                            <li class="link">
                                <a href="classes/MissingPropertyError.html" data-type="entity-link" >MissingPropertyError</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotAbsolutePathError.html" data-type="entity-link" >NotAbsolutePathError</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotFileError.html" data-type="entity-link" >NotFileError</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotImplementedError.html" data-type="entity-link" >NotImplementedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumberNotInRangeError.html" data-type="entity-link" >NumberNotInRangeError</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequiredError.html" data-type="entity-link" >RequiredError</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Logger.html" data-type="entity-link" >Logger</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Type.html" data-type="entity-link" >Type</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});