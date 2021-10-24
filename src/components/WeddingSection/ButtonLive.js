import React from 'react';

import IconIg from './assets/img_maps.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Hadir secara langsung di kediaman mempelai wanita: </p>
        <a href="https://maps.app.goo.gl/qvbMF9T5SQdzBFUc9" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Live IG" />
              <span>LOKASI ACARA</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
