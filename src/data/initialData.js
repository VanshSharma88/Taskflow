export const initialData = {
    tasks: {
      'task-1': {
        id: 'task-1',
        identifier: 'SMA-116',
        title: 'Implement notification for delivery updates',
        description: 'Create a notification system that alerts users about delivery status changes in real-time.',
        priority: 'high',
        type: 'feature',
        dueDate: 'Oct 15',
        estimatedTime: '8 hours',
        storyPoints: 5,
        assignee: {
          name: 'Sarah Johnson',
          role: 'Frontend Developer',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        subtasks: [
          { text: 'Design notification UI', completed: true },
          { text: 'Implement notification logic', completed: false },
          { text: 'Add sound alerts', completed: false }
        ]
      },
      'task-2': {
        id: 'task-2',
        identifier: 'SMA-19',
        title: 'Monitor app performance Post-deployment',
        description: 'Set up monitoring tools to track application performance metrics after the recent deployment.',
        priority: 'medium',
        type: 'task',
        dueDate: 'Oct 20',
        assignee: {
          name: 'Mike Chen',
          role: 'DevOps Engineer',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
      },
      'task-3': {
        id: 'task-3',
        identifier: 'SMA-114',
        title: 'Integrate Google Maps API for location-based delivery',
        description: 'Add Google Maps integration to allow location tracking for deliveries in real-time.',
        priority: 'high',
        type: 'feature',
        dueDate: 'Oct 18',
        assignee: {
          name: 'David Wilson',
          role: 'Backend Developer',
          avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
        }
      },
      'task-4': {
        id: 'task-4',
        identifier: 'SMA-118',
        title: 'Minify JavaScript and CSS for faster page rendering',
        description: 'Optimize frontend performance by minifying JS and CSS assets to reduce load times.',
        priority: 'low',
        type: 'improvement',
        dueDate: 'Oct 22',
        assignee: {
          name: 'Emily Taylor',
          role: 'Frontend Developer',
          avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
        }
      },
      'task-5': {
        id: 'task-5',
        identifier: 'SMA-118',
        title: 'Deploy ZSprints beta version to App Store',
        description: 'Prepare and upload the beta version of the ZSprints application to the Apple App Store for testing.',
        priority: 'high',
        type: 'task',
        dueDate: 'Oct 14',
        assignee: {
          name: 'Ryan Martinez',
          role: 'DevOps Engineer',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg'
        }
      },
      'task-6': {
        id: 'task-6',
        identifier: 'SMA-117',
        title: 'Build user authentication API',
        description: 'Create secure endpoints for user authentication including login, registration, and password reset.',
        priority: 'medium',
        type: 'feature',
        dueDate: 'Oct 25',
        assignee: {
          name: 'Alex Johnson',
          role: 'Backend Developer',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      },
      'task-7': {
        id: 'task-7',
        identifier: 'SMA-115',
        title: 'Update alignment in checkout page',
        description: 'Fix the alignment issues in the checkout page to ensure consistent spacing between elements.',
        priority: 'low',
        type: 'bug',
        dueDate: 'Oct 16',
        assignee: {
          name: 'Lisa Wang',
          role: 'UI Designer',
          avatar: 'https://randomuser.me/api/portraits/women/52.jpg'
        }
      },
      'task-8': {
        id: 'task-8',
        identifier: 'SMA-109',
        title: 'Update API keys for third-party services',
        description: 'Rotate API keys for all integrated third-party services to maintain security standards.',
        priority: 'medium',
        type: 'task',
        dueDate: 'Oct 19',
        assignee: {
          name: 'James Wilson',
          role: 'Security Engineer',
          avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
        }
      },
      'task-9': {
        id: 'task-9',
        identifier: 'SMA-111',
        title: 'Resolve login failure with Invalid credentials',
        description: 'Fix the bug causing users to get "Invalid credentials" error even with correct login information.',
        priority: 'high',
        type: 'bug',
        dueDate: 'Oct 12',
        assignee: {
          name: 'Sophia Garcia',
          role: 'Full Stack Developer',
          avatar: 'https://randomuser.me/api/portraits/women/39.jpg'
        }
      }
    },
    columns: {
      'todo': {
        id: 'todo',
        title: 'To Do',
        taskIds: ['task-3', 'task-8', 'task-9']
      },
      'inProgress': {
        id: 'inProgress',
        title: 'In Progress',
        taskIds: ['task-2', 'task-4', 'task-6', 'task-7']
      },
      'done': {
        id: 'done',
        title: 'Done',
        taskIds: ['task-1', 'task-5']
      }
    }
  };