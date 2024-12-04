import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import axiosInstance from "@/api/axiosInstance";

const DeleteDialog = ({ triggerIcon, id }) => {
    const [isOpen, setIsOpen] = useState(false); 

    const handleDelete = async () => {
        try {
            const response = await axiosInstance.delete(`/api/users/${id}`);

            if (response.status === 204) {
                setIsOpen(false); 
            }
        } catch (error) {
            console.error("Error deleting user", error);
            alert('Failed to delete user');
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {triggerIcon}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. The user's data will be permanently removed.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={() => setIsOpen(false)} // Close dialog without doing anything
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={handleDelete} // Handle delete action
                    >
                        Delete
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteDialog;
