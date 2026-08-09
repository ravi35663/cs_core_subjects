/*
=> Clean React Practices (with Bad vs Good):

1. Always add keys when rendering lists
   - Bad:
      {items.map(item => <li>{item.name}</li>)}
   - Good:
      {items.map(item => <li key={item.id}>{item.name}</li>)}

2. Be careful using objects/arrays as default values
   - Bad:
      const useMyHook = ({ values = [] }) => { ... }
      // New array created on every render → unwanted effects
   - Good:
      const DEFAULT_VALUE = [];
      const useMyHook = ({ values = DEFAULT_VALUE }) => { ... }

3. Avoid recreating fallback arrays/objects on each render
   - Bad:
      const safeValues = values || [];
   - Good:
      const safeValues = useMemo(() => values || [], [values]);

4. Always clean up side effects
   - Bad:
      useEffect(() => {
        document.addEventListener('keyup', handler);
      }, []);
   - Good:
      useEffect(() => {
        document.addEventListener('keyup', handler);
        return () => document.removeEventListener('keyup', handler);
      }, []);

   - Bad:
      setTimeout(() => setValue(value), 2000);
   - Good:
      const id = setTimeout(() => setValue(value), 2000);
      return () => clearTimeout(id);

5. Name functions inside useEffect
   - Bad:
      useEffect(() => { console.log('message'); }, []);
   - Good:
      useEffect(function logMessage() { console.log('message'); }, []);

6. Always include correct hook dependencies
   - Bad:
      useCallback(() => alert(val), []);
      // Uses stale value
   - Good:
      useCallback(() => alert(val), [val]);
      // Always uses latest value
*/