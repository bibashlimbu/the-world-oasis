import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModel, setOpenModel] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setOpenModel(true)}>Add Cabin</Button>
//       {isOpenModel && (
//         <Modal onClose={() => setOpenModel(false)}>
//           <CreateCabinForm onCloseModal={() => setOpenModel(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
