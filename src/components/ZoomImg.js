import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const Frame = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: 'block' },
    opacity: 1
  }
});

const FrameStyled = styled( Frame )`
    display: none;
    position: fixed;
    background: #ffffffc4;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateZ(0);
`;

const transition = {
  duration: 400,
  //ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
  init: {
    position: 'absolute',
    maxWidth: 'none',
    height: '130%',
    top:'0',
    left:'auto',
    right:'auto',
    bottom: '0',
    width: 'auto',
    marginLeft: '0',
    transition,
    flip: true,
  },
  zoom: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true,
    marginLeft: '0',
    width: '100%',
    height: 'auto'
  }
});

const StyledZoomContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

class ZoomImg extends React.Component {
  state = { isZoomed: false };

  zoomIn() {
    window.addEventListener('scroll', this.zoomOut);
    this.setState({ isZoomed: true });
  }

  zoomOut = () => {
    window.removeEventListener('scroll', this.zoomOut);
    this.setState({ isZoomed: false });
  };

  toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

  render() {
    const { isZoomed } = this.state;
    const { imageWidth, imageHeight, ...props } = this.props;
    const pose = isZoomed ? 'zoom' : 'init';

    return (
      <StyledZoomContainer
        onClick={this.toggleZoom}
      >
        <FrameStyled pose={pose} className="frame" />
        <Image pose={pose} {...props} />
      </StyledZoomContainer>
    );
  }
}

export default ZoomImg;