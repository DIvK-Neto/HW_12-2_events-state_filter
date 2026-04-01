import './Toolbar.css';

export function Toolbar({ filters, selected, onSelectFilter }) {
  // filters — это Set, преобразуем в массив и добавляем 'All'
  const filtersList = ['All', ...Array.from(filters)];

  return (
    <div className="toolbar">
      {filtersList.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          className={filter === selected ? 'toolbar__selected' : ''}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
