/*
The original Newsletter components is defined using an
ES6 class, so we use the "class foo extends bar" syntax
to extend it. This way, we can simply redefine the
render method to change it, while preserving
all of the class's other methods (other render
functions, event handlers, etc.).
*/

import { Components, getRawComponent, replaceComponent }from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage /*, intlShape */ } from 'meteor/vulcan:i18n';

import AdSense from 'react-adsense';

class CustomNewsletter extends getRawComponent('Newsletter') {

  render() {
    // console.log(this.renderButton); <-- exists



    return (

        <div className="google-adsense">
            <script type="text/javascript" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <AdSense.Google client='ca-pub-6931460474152339' />
        </div>
      );
  }

}

replaceComponent('Newsletter', CustomNewsletter);
