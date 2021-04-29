import React from 'react'
import Gravatar from 'react-gravatar'

const UserAvatar = ({ user }) => (
  <>
    <Gravatar
      email={user.email}
      size={200}
      className="rounded-full text-center inline"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        {user.name}
        <p className="text-gray-500 text-sm">{user.email}</p>
        <p className="text-gray-500 text-base">{user.postsCount}</p>
      </div>
    </div>
  </>
)

export default UserAvatar