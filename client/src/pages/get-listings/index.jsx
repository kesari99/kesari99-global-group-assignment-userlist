
import axiosInstance from '@/api/axiosInstance.js';
import { Table, TableCaption, TableHeader,TableHead, TableBody, TableCell, TableRow } from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { FilePenLine, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import EditDialog from '@/components/dialogs/EditDialog';
import DeleteDialog from '@/components/dialogs/DeleteDialog';


const GetListing = () => {

  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)


    const getUsers = async (page = 1) => {
        try {
            const response = await axiosInstance.get(`/api/users?page=${page}`)
            console.log(response)
            console.log(response.data.data)
            setUsers(response.data.data)
            setTotalPages(response.data.total_pages);

           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers(currentPage)
    }, [currentPage])


    const handlePageChange = (page) => {
      setCurrentPage(page)


    }

  


  return (
    <div className=' w-full  overflow-y-auto'>
      <h1 className='md:text-4xl text-xl mt-5 font-extrabold'>Get Listing</h1>

      <Table className="mt-10">
  <TableCaption>A list all your users.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Avatar</TableHead>
      <TableHead>First Name</TableHead>
      <TableHead className="hidden md:block">Last Name</TableHead>
      <TableHead>Email</TableHead>

    </TableRow>
  </TableHeader>
  <TableBody>
      {
          users.map(user => (
            <TableRow key={user.id}>
               <TableCell key={user.id} className="w-[100px]">
                <img src={user.avatar} alt={user.first_name} className="w-10 h-10 rounded-full" />
              </TableCell>
              <TableCell className="font-medium">{user.first_name}</TableCell>
              <TableCell className="hidden md:block">{user.last_name}</TableCell>
              <TableCell className="max-w-[120px] truncate">{user.email}</TableCell>
              <TableCell>

                <EditDialog
                    triggerIcon = {
                        <Button className='bg-background hover:bg-blue-100  ' varient = 'ghost'>
                        <FilePenLine className="w-5 h-5 text-blue-500 cursor-pointer" />
                        </Button>

                    }
                    id={user.id}
                    name={user.first_name}


                
                />
                  
              </TableCell>
              <TableCell>
                <DeleteDialog 
                  triggerIcon = {
                    <Button  className='bg-background hover:bg-red-50' varient = 'ghost'>
                        <Trash2 className="W-5 h-5 text-red-500 cursor-pointer" />

                    </Button>
                  }
               
                
                />
              
              </TableCell>

            </TableRow>


            
         )
      )}
      
  </TableBody>
</Table>

<Pagination className='mt-6 flex justify-end'>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
       href="#" 
       onClick = {() => handlePageChange(Math.max(currentPage - 1, 1))}
       disabled={currentPage === 1}
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    {/* {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)}
                active={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))} */}

    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>

    <PaginationItem>
      <PaginationNext 
        href="#"
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>


    </div>

    

    

  )
}

export default GetListing