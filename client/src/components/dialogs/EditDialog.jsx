import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useState } from "react"
import axiosInstance from "@/api/axiosInstance"


const EditDialog = ({ triggerIcon, id, name, children, }) => {

    const [updateName, setUpdateName] = useState(name)
    const [job, setJob] = useState("")

    const editUser = async () => {

        const response = await axiosInstance.put(`/api/users/${id}`, {
            first_name: updateName,
            job: job
            
        })

    }



    return (
        <Dialog>
            <DialogTrigger asChild>
                {triggerIcon}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                    <DialogDescription>
                        Make changes and confirm the update by clicking "Submit".
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className="flex flex-col gap-4">

                        <div className="">

                            <Label >User Name</Label>
                            <Input
                                id='name'
                                name='name'
                                value={updateName}
                                placeHolder='Enter your name'
                                onChange={(e) => setUpdateName(e.target.value)}
                            />



                        </div>
                        <div className="">

                            <Label >Job</Label>
                            <Input
                                id='job'
                                name='jon'
                                value={job}
                                placeHolder='Enter your Job'
                                onChange={(e) => setJob(e.target.value)}
                            />



                        </div>


                        <Button
                            varient='secondary'
                            onClick={editUser}


                        >
                            Submit

                        </Button>

                    </div>
                </div>
            </DialogContent>
        </Dialog>


    )
}

export default EditDialog