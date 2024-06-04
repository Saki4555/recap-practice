

const EditProfile = ({user}) => {
    return (
        <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            defaultValue={user?.displayName}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            defaultValue={user?.email}
            // readOnly
            disabled
          />
        </div>
       
        <div>
          <button
            className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Edit
          </button>
        </div>
      </form>
    );
};

export default EditProfile;