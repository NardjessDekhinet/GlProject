import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const userData = [
  { id: 1, name: "John Doe", email: "john@example.com", service: "coiffure", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", service: "soin", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", service: "massage", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", service: "Coiffure", status: "Active" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", service: "Massage", status: "Active" },
];

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [showAddForm, setShowAddForm] = useState(false); // Ajout d'un état pour afficher/masquer le formulaire
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    service: "",
    status: "Active",
  });

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newId = Date.now(); // Utilisation de l'ID basé sur le temps pour chaque utilisateur ajouté
    const updatedUsers = [...filteredUsers, { ...newUser, id: newId }];
    setFilteredUsers(updatedUsers);
    setShowAddForm(false); // Masquer le formulaire après l'ajout
    setNewUser({ name: "", email: "", service: "", status: "Active" }); // Réinitialiser le formulaire
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Users</h2>
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            Ajouter un Prestataire
          </button>
        </div>
      </div>

      {showAddForm && (
        <motion.div
          className="bg-gray-700 p-4 rounded-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Ajouter un prestataire</h3>
          <form onSubmit={handleAddUser} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={newUser.name}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
              required
            />
            <input
              type="text"
              name="service"
              placeholder="Service"
              value={newUser.service}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
              required
            />
            <select
              name="status"
              value={newUser.status}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-800 text-gray-100 border border-gray-600 rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Ajouter
            </button>
          </form>
        </motion.div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-100">{user.name}</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                    {user.service}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "Active"
                        ? "bg-green-800 text-green-100"
                        : "bg-red-800 text-red-100"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">Edit</button>
                  <button className="text-red-400 hover:text-red-300">Delete</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTable;
