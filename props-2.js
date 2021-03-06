const USER_DATA = {
  name: 'Tyler McGinnis',
  img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
  username: 'tylermcginnis'
}

function Badge (props) {
  return (
    <div>
      <img src={props.user.img} />
      <h1>Name: {props.user.name}</h1>
      <h3>username: {props.user.username}</h3>
    </div>
  )
}

ReactDOM.render(
  <Badge user={USER_DATA}/>,
  document.getElementById('app')
);
