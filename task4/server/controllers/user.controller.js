let users = [];

// CREATE
exports.createUser = (req, res) => {
  const { name, email, branch, mobile, gender, address } = req.body;
  
  // Generate a unique ID for each user
  const id = Date.now().toString();

  const newUser = { id, name, email, branch, mobile, gender, address };
  users.push(newUser);

  res.status(201).json({ message: 'User created successfully', user: newUser });
};

// READ
exports.getUsers = (req, res) => {
  res.status(200).json(users);
};

// UPDATE
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, branch, mobile, gender, address } = req.body;

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex !== -1) {
    const updatedUser = { ...users[userIndex], name, email, branch, mobile, gender, address };
    users[userIndex] = updatedUser;
    return res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  }

  res.status(404).json({ message: 'User not found' });
};

// DELETE
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return res.status(200).json({ message: 'User deleted successfully' });
  }

  res.status(404).json({ message: 'User not found' });
};
