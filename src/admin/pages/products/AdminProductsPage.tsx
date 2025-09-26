import { AdminTitle } from "@/admin/components/components/AdminTitle"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { useProducts } from "@/shop/hooks/useProducts"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {

  const { data, isLoading }  = useProducts();
  if( isLoading ) return <CustomFullScreenLoading />

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
          {
            data?.products.map((product) => (
              <TableRow key={ product.id } >
                <TableCell>
                  <img src={ product.images[0] } alt="Product" className="w-20 h-20 object-cover rounded-md" />
                </TableCell>
                <TableCell>{ product.title }</TableCell>
                <TableCell>${ product.price }</TableCell>
                <TableCell>{ product.gender }</TableCell>
                <TableCell>{ product.stock }</TableCell>
                <TableCell>{ product.sizes.join(', ') }</TableCell>
                <TableCell className="text-right">
                  <Link to={`/admin/products/t-shirt-teslo`}>
                    Editar
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

      <CustomPagination totalPages={ data?.pages || 0 } />
    </>
  )
}
