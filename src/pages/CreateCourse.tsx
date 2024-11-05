import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  DollarSign,
  Plus,
  ChevronRight, Settings,
} from 'lucide-react';

const CreateCourse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Optionally navigate to another page after submission
    // navigate('/courses');
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li>
              <div className="flex items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center text-gray-400 hover:text-white"
                >
                  Dashboard
                </button>
              </div>
            </li>
            <ChevronRight
              className="flex items-center text-gray-400 hover:text-white"
            />
            <li aria-current="page">
              <div className="flex items-center">
                <span className="text-gray-400 hover:text-white">Create New Course</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Create New Course</h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          {/* Course Title */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-gray-400 text-sm font-medium mb-2"
            >
              Course Title
            </label>
            <div className="flex items-center bg-gray-700 rounded-lg px-4 py-2">
              <BookOpen className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="bg-transparent flex-1 focus:outline-none text-white placeholder-gray-500"
                placeholder="Enter course title"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-400 text-sm font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-gray-700 text-white rounded-lg p-4 focus:outline-none placeholder-gray-500"
              placeholder="Enter course description"
            ></textarea>
          </div>

          {/* Category */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-gray-400 text-sm font-medium mb-2"
            >
              Category
            </label>

            <div className="flex items-center bg-gray-700 rounded-lg px-4 py-2">
              <Settings className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="bg-transparent flex-1 focus:outline-none text-white placeholder-gray-500"
                placeholder="e.g., Development, Security"
              />
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-400 text-sm font-medium mb-2"
            >
              Price (ETH)
            </label>
            <div className="flex items-center bg-gray-700 rounded-lg px-4 py-2">
              <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="bg-transparent flex-1 focus:outline-none text-white placeholder-gray-500"
                placeholder="Enter course price in ETH"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors text-white font-semibold"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
