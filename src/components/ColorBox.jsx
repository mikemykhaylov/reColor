import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../scss/ColorBox.scss';

function ColorBox({ background: backgroundColor, name }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="color-box" style={{ backgroundColor }}>
      <div style={{ backgroundColor }} className={`color-box__overlay ${copied ? 'show' : ''}`} />
      <div className={`color-box__overlay-message ${copied ? 'show' : ''}`}>
        <h1 className="color-box__overlay-heading">PASTE ME!</h1>
        <h3 className="color-box__overlay-subheading">{backgroundColor}</h3>
      </div>
      <CopyToClipboard
        text={backgroundColor}
        onCopy={() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        }}
      >
        <div className="color-box__copy-container">
          <button className="color-box__copy-btn" type="button">
            COPY
          </button>
        </div>
      </CopyToClipboard>
      <div className="color-box__content-container">
        <span className="color-box__name">{name}</span>
        <button className="color-box__more-btn" type="button">
          MORE
        </button>
      </div>
    </div>
  );
}

ColorBox.propTypes = {
  background: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ColorBox;