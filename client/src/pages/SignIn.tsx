

export default function SignIn () {

  const [identifier, setIdentifier] = useState(''); // can be either username or email
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/signin', {
        identifier,
        password,
      });

      const json = response.data;

      if (json.error) {
        alert(json.message);
      } else {
        // Redirect to the dashboard or home page upon successful sign-in
        navigate('/dashboard/home');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div>SignIn</div>
  )
}

