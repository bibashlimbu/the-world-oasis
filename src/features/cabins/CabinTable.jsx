import { useGetCabin } from "./UseGetCabin";
import { useSearchParams } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

function CabinTable() {
  const { isLoading, cabins } = useGetCabin();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("discount") || "all";

  if (isLoading) return <Spinner />;

  //FILTER
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "with-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
  if (filterValue === "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);

  //SORTING
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, order] = sortBy.split("-");
  const modifier = order === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </Table.Header>
        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
