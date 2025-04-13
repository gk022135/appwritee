'use client';

export default function ProfilePage() {
  const user = {
    name: 'Gaurav Krr',
    email: 'gk022135@gmail.com',
    bio: 'Full-stack developer, tech lover, and coffee enthusiast ☕️',
    avatar: 'https://i.pravatar.cc/150?img=3',
    location: 'Bihar, India',
    joinDate: 'Nov 2022',
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl flex flex-col md:flex-row gap-8">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-violet-600 shadow-lg"
          />
          <h2 className="text-xl font-bold mt-4 text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.location}</p>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">About</h3>
            <p className="text-gray-600">{user.bio}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">Contact Info</h3>
            <p className="text-gray-600">📧 {user.email}</p>
            <p className="text-gray-600">📍 {user.location}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">Member Since</h3>
            <p className="text-gray-600">{user.joinDate}</p>
          </div>

          <button className="mt-4 py-2 px-6 bg-violet-600 hover:bg-violet-700 text-white rounded-xl transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
