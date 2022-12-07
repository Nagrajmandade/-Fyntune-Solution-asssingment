import { useState } from "react";
import dayjs from "dayjs";

import "./App.css";
import PersonItem from "./components/PersonItem";
import { data } from "./MOCK_DATA";
import FilterBar from "./components/FilterBar";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function App() {
  const [allData, setData] = useState(data);

  const generateGenderDataForDropdown = () => {
    return [...new Set(data.map((item) => item.gender))];
  };

  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };
  const handleFilterArea = (area) => {
    const filteredData = data.filter((item) => {
      if ( item.target.value.toLowerCase().includes(afterEach.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };
  const handleFilterCategory = (category) => {
    const filteredData = data.filter((item) => {
      if (category.target.value.toLowerCase().includes(afterEach.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterOpen = (Open, field) => {
    const filteredData = data.filter((item) => {
      if (field === "Open" && dayjs(item.Open).isSameOrAfter(dayjs(Open))) {
        return item;
      }
    });

    setData(filteredData);
  };
  const handleFilterClose= (close, field) => {
    const filteredData = data.filter((item) => {
      if (field === "close" && dayjs(item.close).isSameOrAfter(dayjs(close))) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            genders={generateGenderDataForDropdown()}
            onNameFilter={handleFilterName}
            onAreaFilter={handleFilterArea}
            onCategoryFilter={handleFilterCategory}
            onOpenFilter={handleFilterOpen}
            onCloseFilter={handleFilterClose} 
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map((item) => (
              <PersonItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
