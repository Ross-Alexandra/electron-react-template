import { useAsyncResponse } from '@ross-alexandra/react-utilities';

export function App() {
    const [apiState, apiData] = useAsyncResponse<string>(window.api.test);

    return (
        <div>
            <p>Get Hacking!</p>
            <p>{apiState === 'ready' ? apiData : 'Testing Api...'}</p>
        </div>
    );
}
