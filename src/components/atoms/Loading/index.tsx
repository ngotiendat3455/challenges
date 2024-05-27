import React from 'react';

import mapModifiers from 'utils/functions';

interface LoadingProps {
  variant?: 'fullScreen' | 'default' | 'fullScreenAbsolute';
  isShow?: boolean;
  isWrapper?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isShow, variant, isWrapper }) => {
  if (!isShow) return null;
  if (isWrapper) {
    return (
      <div className="a-loadingContainer">
        <div className={mapModifiers('a-loading', variant)}>
          <div className="a-loading_wrapper">
            <div className="rhombusLoading">
              <div className="rhombusLoading_dots">
                <div className="rhombusLoading_dot" />
                <div className="rhombusLoading_dot" />
                <div className="rhombusLoading_dot" />
                <div className="rhombusLoading_dot" />
                <div className="rhombusLoading_dot" />
                <div className="rhombusLoading_dot" />
                <div className="rhombusLoading_dot" />
                <div className="rhombusLoading_dot" />
                <div className="rhombusLoading_dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={mapModifiers('a-loading', variant)}>
      <div className="a-loading_wrapper">
        <div className="rhombusLoading">
          <div className="rhombusLoading_dots">
            <div className="rhombusLoading_dot" />
            <div className="rhombusLoading_dot" />
            <div className="rhombusLoading_dot" />
            <div className="rhombusLoading_dot" />
            <div className="rhombusLoading_dot" />
            <div className="rhombusLoading_dot" />
            <div className="rhombusLoading_dot" />
            <div className="rhombusLoading_dot" />
            <div className="rhombusLoading_dot" />
          </div>
        </div>
      </div>
    </div>
  );
};

Loading.defaultProps = {
  variant: 'default',
  isShow: false,
  isWrapper: false,
};

export default Loading;
