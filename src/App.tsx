import { useAsyncResponse } from '@ross-alexandra/react-utilities';

export function App() {
    const [apiState, apiData] = useAsyncResponse<{result: 'success' | 'failure'}>((async () => window.api.exampleFunction('foo', 5)));

    return (
        <div>
            <p>Get Hacking!</p>
            <p>{apiState === 'ready' ? apiData?.result : 'Testing Api...'}</p>
        </div>
    );
}
