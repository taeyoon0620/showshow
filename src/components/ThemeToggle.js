//토글 버튼 스타일링 및 props 적용
import React from 'react';
import styled from 'styled-components';

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleWrapper onClick={toggle} mode={mode}>
      {mode === 'dark' ? '🌚' : '🌝'}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

