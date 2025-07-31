import { useParams } from 'react-router-dom';

function Profile() {
    const { id } = useParams();

    return (
        <div>
            <h2>Profile Page</h2>
            <p>User ID: {id}</p>
        </div>
    );
}

export default Profile;