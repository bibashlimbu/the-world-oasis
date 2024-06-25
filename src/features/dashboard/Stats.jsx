import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmedStays, numDays, numCabins }) {
  //1. bookings
  const numBookings = bookings.length;

  //2. sales
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  // 3. check ins
  const checkIns = confirmedStays.length;

  //4. number of check in nights / number of available nights(numDays*numberofCabins)
  const occupancyRate =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * numCabins);

  return (
    <>
      <Stat
        title="bookings"
        value={numBookings}
        color="blue"
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="sales"
        value={formatCurrency(sales)}
        color="green"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="check ins"
        value={checkIns}
        color="indigo"
        icon={<HiOutlineCalendar />}
      />
      <Stat
        title="occupancy rate"
        value={Math.round(occupancyRate * 100) + "%"}
        color="yellow"
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
