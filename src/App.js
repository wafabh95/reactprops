import Profile from './profile/profileComponent'; //import profile component
import './App.css'; //import css file
import 'bootstrap/dist/css/bootstrap.min.css';
function App() { 
  const alertMyInput = name => alert(name); //function handleName function as props that alert name of profile user.
 
  return (
    <div className="App">
      <Profile name="wafa ben hamouda" bioDescription="Hello, my name is wafa ben hamouda. I have been performing
      as a fullstack web developer for 1 year and am still in the process of gaining more experiences through
      more years.
      
      My educational background process a professional master in computer network security service.
      I have done a training in fullstack javascript with GoMyCode" 
      
      
      prof="Full Stack Web Developer" alertMyInput={alertMyInput}><img src="wafa.jpg" alt=""  className="rounded-circle"></img></Profile>
    </div>
  );
}
export default App;
