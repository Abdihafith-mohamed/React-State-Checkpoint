import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate full-stack developer',
        imgSrc: 'blob:https://web.whatsapp.com/4cdc6972-ec1f-48b7-b6ae-505a47d560b8',
        profession: 'Software Engineer'
      },
      shows: false,
      timeElapsed: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeElapsed } = this.state;

    return (
      <div className="flex flex-col gap-5">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700">Time since mounted: <strong>{timeElapsed}s</strong></p>
        </div>

        <button 
          onClick={this.toggleShow} 
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <img src={person.imgSrc} alt={person.fullName} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white object-cover" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{person.fullName}</h2>
            <p className="text-purple-600 font-semibold mb-3">{person.profession}</p>
            <p className="text-gray-600 text-sm">{person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
