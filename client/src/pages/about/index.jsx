import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-center mb-6">About This Project</h1>

      <p className="text-lg mb-4">
        Welcome to the Dashboard! This project is designed to manage and interact with user data in a seamless and intuitive interface. It provides functionalities such as managing users, viewing user details, updating user information, and handling deletion. The project has been built to be user-friendly, highly functional, and secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Project Overview</h2>
      <p className="text-lg mb-4">
        The application is built with React, leveraging modern web development tools and libraries. It incorporates user authentication, provides an intuitive dashboard for managing user data, and supports efficient CRUD operations (Create, Read, Update, Delete) for users. The design is responsive, providing a smooth user experience across devices, from mobile phones to desktop computers.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Key Features</h2>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-lg mb-2">User Management: Add, edit, and delete users seamlessly.</li>
        <li className="text-lg mb-2">Responsive Dashboard: A user-friendly dashboard that adjusts to different screen sizes.</li>
        <li className="text-lg mb-2">CRUD Operations: Perform Create, Read, Update, and Delete operations on user data.</li>
        <li className="text-lg mb-2">API Integration: The project integrates with a backend API to fetch, update, and delete user data in real-time.</li>
        <li className="text-lg mb-2">Confirmation Dialogs: Before performing critical actions like deleting users, confirmation dialogs are displayed to prevent accidental actions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Technologies Used</h2>
      <p className="text-lg mb-4">
        This project utilizes a wide range of modern technologies to ensure high performance and maintainability:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-lg mb-2">React.js: The core framework used to build the user interface and manage state.</li>
        <li className="text-lg mb-2">ShadCN: A set of UI components used to create a beautiful and consistent user experience.</li>
        <li className="text-lg mb-2">Axios: A library used to make HTTP requests to the backend API.</li>
        <li className="text-lg mb-2">Tailwind CSS: A utility-first CSS framework used to style the application and ensure responsiveness.</li>
        <li className="text-lg mb-2">React Router: A routing library used to manage navigation between different pages and views in the application.</li>
        <li className="text-lg mb-2">Dialog & Button Components: Custom components used for displaying modals, forms, and actions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How It Works</h2>
      <p className="text-lg mb-4">
        The project operates around the concept of managing user information through an admin panel (Dashboard). Here's how the core features work:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-lg mb-2">
          <strong>Adding Users:</strong> The admin can add new users by filling out a simple form that includes fields like user name and job.
        </li>
        <li className="text-lg mb-2">
          <strong>Editing Users:</strong> Clicking the "Edit" button on a user brings up a dialog where the admin can update the user information. After editing, changes can be saved to the backend via API calls.
        </li>
        <li className="text-lg mb-2">
          <strong>Deleting Users:</strong> Users can be deleted by clicking the "Delete" button next to a user's information. A confirmation dialog ensures that the user is not accidentally deleted.
        </li>
        <li className="text-lg mb-2">
          <strong>Real-time Updates:</strong> Any changes made (e.g., editing or deleting users) are immediately reflected in the UI after the API call completes.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Future Improvements</h2>
      <p className="text-lg mb-4">
        While this project is already quite functional, there are several enhancements that could be made in the future:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-lg mb-2">Integrating user authentication for admins to ensure security.</li>
        <li className="text-lg mb-2">Implementing search and filtering features for managing large sets of user data.</li>
        <li className="text-lg mb-2">Adding pagination to display users in manageable chunks.</li>
        <li className="text-lg mb-2">Improving error handling and feedback for a better user experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
      <p className="text-lg mb-4">
        This project serves as a practical solution for managing users in a clean and intuitive dashboard interface. By combining modern web development practices and technologies, it provides a solid foundation for creating scalable applications that can handle various administrative tasks efficiently.
      </p>
      <p className="text-lg">
        Whether you're looking to manage users or just want to explore how different technologies come together, this project provides a good reference point for building real-world applications.
      </p>
    </div>
  );
};

export default AboutPage;
