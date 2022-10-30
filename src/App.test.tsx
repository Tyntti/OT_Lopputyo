import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import HomePage from './home/HomePage';
import { Router } from 'react-router-dom';
import ProjectsPage from './projects/ProjectsPage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import { Project } from './projects/Project';
import ProjectForm from './projects/ProjectForm';
import userEvent from '@testing-library/user-event';
import { MOCK_PROJECTS } from './projects/MockProjects';
import ProjectList from './projects/ProjectList';


describe('<ProjectsPage />', () => {
  function renderComponent() {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectsPage />
        </MemoryRouter>
      </Provider>
    );
  }


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('should render without crashing', () => {
//   render(<App />);
// });


//Testi 1:

test('Projects sivulla "More..." napin testaaminen', async () => {
    renderComponent();
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
    expect(screen.getByRole('button', { name: /more/i })).toBeInTheDocument();
  })});

//Testi 2: 

describe('<ProjectForm />', () => {
  let project: Project;
  let updatedProject: Project;
  let handleCancel: jest.Mock;
  let nameTextBox: any;
  let descriptionTextBox: HTMLElement;
  let budgetTextBox: HTMLElement;

  const setup = () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectForm project={project} onCancel={handleCancel} />
        </MemoryRouter>
      </Provider>
    );

    nameTextBox = screen.getByRole('textbox', {
      name: /project name/i,
    });
    descriptionTextBox = screen.getByRole('textbox', {
      name: /project description/i,
    });
    budgetTextBox = screen.getByRole('spinbutton', {
      name: /project budget/i,
    });
  };

  beforeEach(() => {
    project = new Project({
      id: 1,
      name: 'Mission Impossible',
      description: 'This is really difficult',
      budget: 100,
    });
    updatedProject = new Project({
      name: 'Ghost Protocol',
      description:
        'Blamed for a terrorist attack on the Kremlin, Ethan Hunt (Tom Cruise) and the entire IMF agency...',
    });
    handleCancel = jest.fn();
  });

  test('Budjettiin ei voi laittaa 0 arvoa', async () => {
    setup();
    const user = userEvent.setup();
    await user.clear(budgetTextBox);
    await user.type(budgetTextBox, '0');
    expect(screen.getByRole('alert')).toBeInTheDocument();
    await user.type(budgetTextBox, '1');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});

//Testi 3: 

describe('<ProjectForm />', () => {
  let project: Project;
  let updatedProject: Project;
  let handleCancel: jest.Mock;
  let nameTextBox: any;
  let descriptionTextBox: HTMLElement;
  let budgetTextBox: HTMLElement;

  const setup = () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectForm project={project} onCancel={handleCancel} />
        </MemoryRouter>
      </Provider>
    );

    nameTextBox = screen.getByRole('textbox', {
      name: /project name/i,
    });
    descriptionTextBox = screen.getByRole('textbox', {
      name: /project description/i,
    });
    budgetTextBox = screen.getByRole('spinbutton', {
      name: /project budget/i,
    });
  };

  beforeEach(() => {
    project = new Project({
      id: 1,
      name: 'Mission Impossible',
      description: 'This is really difficult',
      budget: 100,
    });
    updatedProject = new Project({
      name: 'Ghost Protocol',
      description:
        'Blamed for a terrorist attack on the Kremlin, Ethan Hunt (Tom Cruise) and the entire IMF agency...',
    });
    handleCancel = jest.fn();
  });

  test('Onko "isActive" aina aktiivinen avattaessa', () => {
    setup();
    expect(
      screen.getByRole('form', {
        name: /edit a project/i,
      })
    ).toHaveFormValues({
      isActive: project.isActive,
    });
  });

});


//Testi 4: 

describe('<ProjectList />', () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectList projects={MOCK_PROJECTS} />
        </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {});

  test('Pitäisi näyttää lista', () => {
    setup();
    expect(screen.getAllByRole('heading')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('img')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('link')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('button')).toHaveLength(MOCK_PROJECTS.length);
  });
});

//Testi 5:

test('Kokeillaan renderöikö Projects sivun oikein', () => {
  
<Provider store={store}>
  <ProjectsPage />
</Provider>
});

