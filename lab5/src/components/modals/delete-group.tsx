import {ModalTemplate} from "./modal-template.tsx";

export function DeleteGroup({close}: {close:React.Dispatch<React.SetStateAction<boolean>>}){
    return (
       <ModalTemplate
           title='Delete Group'
           text='Are you sure you want to delete this group along with all its tasks?
           Please note that once the group is deleted, all tasks will be permanently removed.
           This action cannot be undone.'
           closeFunc={close} />
    )
}