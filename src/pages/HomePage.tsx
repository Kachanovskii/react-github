import { useSearchUsersQuery } from "../store/github/github.api"

function HomePage() {
    const {isLoading, isError, data} = useSearchUsersQuery('test');
    
    return (
        <div>
            Home
        </div>
    )
}

export default HomePage
