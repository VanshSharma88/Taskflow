import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div className="container">
      <div className="home-hero">
        <h1>Welcome to TaskBoard</h1>
        <p>
          {isSignedIn 
            ? `Hello ${user.firstName}! Manage your tasks efficiently with our beautiful Kanban board.`
            : 'Organize your tasks and boost productivity with our intuitive Kanban board system.'
          }
        </p>
        {isSignedIn && (
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/tasks" className="btn btn-primary">
              View Kanban Board
            </Link>
            <Link to="/all-tasks" className="btn btn-secondary">
              View All Tasks
            </Link>
          </div>
        )}
        {!isSignedIn && (
          <Link to="/sign-in" className="btn btn-primary">
            Get Started Now
          </Link>
        )}
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>📋 Smart Task Management</h3>
          <p>
            Create, edit, and organize tasks with ease. Set priorities, assign team members, 
            and track due dates to stay on top of your projects with our intuitive interface.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔄 Interactive Kanban Board</h3>
          <p>
            Visualize your workflow with our beautiful Kanban board. Drag and drop tasks through 
            different stages: To Do, In Progress, and Done with smooth animations.
          </p>
        </div>

        <div className="feature-card">
          <h3>👥 Team Collaboration</h3>
          <p>
            Assign tasks to team members, track progress, and collaborate effectively. 
            Keep everyone on the same page with real-time updates and notifications.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Progress Analytics</h3>
          <p>
            Monitor task completion rates, identify bottlenecks, and improve your 
            team's productivity with comprehensive analytics and reporting tools.
          </p>
        </div>

        <div className="feature-card">
          <h3>⏰ Deadline Management</h3>
          <p>
            Set due dates for tasks and never miss important deadlines. Get visual 
            cues about upcoming deadlines and overdue tasks with smart notifications.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure & Reliable</h3>
          <p>
            Your data is secure with our authentication system. Access your tasks 
            from anywhere with confidence in data privacy and enterprise-grade security.
          </p>
        </div>
      </div>

      {isSignedIn && (
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: '3rem 2rem',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white'
        }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Ready to get started?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', opacity: '0.9' }}>
            Jump into your task management dashboard and start organizing your work efficiently.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/tasks" className="btn btn-primary">
              Go to Kanban Board
            </Link>
            <Link to="/all-tasks" className="btn btn-secondary">
              View All Tasks
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;