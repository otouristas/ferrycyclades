import React from 'react';

export const LoadingSpinner = React.memo(() => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';