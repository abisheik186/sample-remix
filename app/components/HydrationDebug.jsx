import { useState, useEffect } from 'react';

export function HydrationDebug() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="hydration-debug">
      {!isClient && (
        <div className="text-red-500">
          Server-side rendering detected. Checking hydration...
        </div>
      )}
    </div>
  );
}
