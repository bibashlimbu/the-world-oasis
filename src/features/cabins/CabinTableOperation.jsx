import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { label: "All", value: "all" },
          { label: "With-discount", value: "with-discount" },
          { label: "No-discount", value: "no-discount" },
        ]}
      />

      <SortBy
        options={[
          { label: "Sort by name(A-Z)", value: "name-asc" },
          { label: "Sort by name(Z-A)", value: "name-desc" },
          { label: "Sort by price(low-high)", value: "regularPrice-asc" },
          { label: "Sort by price(high-low)", value: "regularPrice-desc" },
          { label: "Sort by capacity(low-high)", value: "maxCapacity-asc" },
          { label: "Sort by capacity(high-low)", value: "maxCapacity-desc" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperation;
