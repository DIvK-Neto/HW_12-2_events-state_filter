import React from 'react';
import { Toolbar } from '../Toolbar/Toolbar';
import { ProjectList } from '../ProjectList/ProjectList';
import './Portfolio.css';

export class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFilter: 'All' };
    this.allProjects = props.projects;

    // Получаем уникальные категории
    const categories = new Set(this.allProjects.map((p) => p.category));
    this.filters = categories;

    this.selectFilter = this.selectFilter.bind(this);
  }

  selectFilter(filter) {
    this.setState({ selectedFilter: filter });
  }

  getFilteredProjects() {
    const { selectedFilter } = this.state;
    if (selectedFilter === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter((p) => p.category === selectedFilter);
  }

  render() {
    const filteredProjects = this.getFilteredProjects();
    return (
      <div className="portfolio">
        <Toolbar
          filters={this.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.selectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}
