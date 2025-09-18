import { AdminTitle } from "@/admin/components/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle title="Products" subtitle="Here you can see and manage your products." />
      
        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              New product
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Inventory</TableHead>
            <TableHead>Sizes</TableHead>
            <TableHead className="text-right">Accions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img src="https://placehold.co/250*250" alt="Product" className="w-20 h-20 object-cover rounded-md" />
            </TableCell>
            <TableCell>Product 1</TableCell>
            <TableCell>$250</TableCell>
            <TableCell>Category 1</TableCell>
            <TableCell>100 stock</TableCell>
            <TableCell>XS,S,L</TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/products/t-shirt-teslo`}>
                Editar
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <CustomPagination totalPages={10} />
    </>
  )
}
