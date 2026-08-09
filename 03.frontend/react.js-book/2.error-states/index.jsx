/*
=> Error states in react:
    -   Error states represent all the situations where the UI cannot proceed with 
        the “happy path” due to failures such as "invalid input", "failed API calls", 
        "unexpected data", or runtime errors—and must still behave predictably and 
        gracefully.
*/
/*
=>  Types of Error States in React
*/
/*
=>  1.Client-side (UI / Validation Errors):
    - These happen before an API call.
    Examples:
        - Empty required field
        - Invalid email format
        - Password too short
        - Example:
            const [error, setError] = useState<string | null>(null);
            const submit = () => {
            if (!email.includes("@")) {
                setError("Invalid email address");
                return;
                }
            };
*/
/*
=> 2.Async / API Error States (Most Common):
    - This is the core React error-state topic.
    - Typical causes
        - Network failure
        - 4xx errors (unauthorized, validation)
        - 5xx errors (server down)
*/
// Canonical Pattern:
function asyncAPIError(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch("/api/users")
            .then(res => {
            if (!res.ok) throw new Error("Request failed");
                return res.json();
            })
            .then(setData)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    // UI  rendering:
    if (loading) return <Spinner />;
    if (error) return <ErrorState message={error} />;
    if (!data) return <EmptyState />;

    return <UserList users={data} />;
}

/*
=> 3️.Empty States (Often Forgotten, Still Errors):
    - Not a crash—but still a non-happy path.
    Examples
        - No search results
        - Empty list
        - New user with no data
    if (data.length === 0) {
       return <EmptyState message="No users found" />;
    }
*/

/*
=> 4.Runtime Render Errors (React Error Boundaries):
    - These are JavaScript errors during rendering.
    - Example:
        undefined.map(...) // 💥 crash
*/
/*
// Solution: Error Boundaries
    class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean }
    > {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
        return <h1>Something went wrong</h1>;
        }
        return this.props.children;
    }
    }
*/
// Usage:
{/* <ErrorBoundary>
  <UserDashboard />
</ErrorBoundary> */}

/*
=> 5.Permission/Authorization Errors:
    - Extremely common in MERN apps.
    - Examples
        401 Unauthorized
        403 Forbidden
    if (error?.status === 401) {
       return <LoginRedirect />;
    }
*/

/*
=>  Error States vs Loading States (Common Trap):
*/
// Wrong:
if (!data) return <Spinner />;
/*
Why wrong?
    - Could be loading
    - Could be error
    - Could be empty
*/
// Correct:
if (loading) return <Spinner />;
if (error) return <ErrorState />;
if (!data) return <EmptyState />;

/*
=> Retry & Recovery (Senior Signal):
    - Error handling is useless without recovery.
    - <button onClick={refetch}>Retry</button>
*/

/*
=>  Common Anti-Patterns that you should not follow:
    - Ignoring error states
    - Logging errors but not showing UI
    - Showing generic “Something went wrong” everywhere
    - Using try/catch inside render
    - Relying only on Error Boundaries
*/
