import { useState } from "react";

const FilterBar = ({
  onNameFilter,
  onAreaFilter,
  onCategoryFilter,
  onOpenFilter,
  onCloseFilter, 
}) => {
  const [filters, setFilters] = useState({
    name: "",
    area: "",
    category: "",
    open: "",
    close: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;
      case "area":
        onAreaFilter(value, "area");
        break;
      case "category":
        onCategoryFilter(value, "category");
        break;
      case "open":
        onOpenFilter(value, "open");
        break;
      case "close":
        onCloseFilter(value, "close");
        break;

      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">area</label>
        <input
          type="text"
          className="form-control"
          id="area"
          value={filters.area}
          onChange={handleInput("area")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">category</label>
        <input
          type="text"
          className="form-control"
          id="category"
          value={filters.category}
          onChange={handleInput("category")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">open Date</label>
        <input
          type="date"
          className="form-control"
          id="open"
          value={filters.open}
          onChange={handleInput("open")}
        />
      </div>
 
      <div className="col-sm-12 my-2">
        <label htmlFor="name">close Date</label>
        <input
          type="date"
          className="form-control"
          id="name"
          value={filters.close}
          onChange={handleInput("close")}
        />
      </div>
    </div>
  );
};

export default FilterBar;
